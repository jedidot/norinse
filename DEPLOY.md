# 노린스 사이트 배포 (Vercel)

이 프로젝트는 **정적 페이지 + `/api/contact` 서버 API**(Resend 메일)를 사용합니다.  
API 라우트가 있으므로 **Vercel**(또는 Node를 지원하는 호스팅)에 올리는 것을 권장합니다.  
Cloudflare Pages만으로는 문의 폼 API를 그대로 쓰기 어렵습니다.

---

## 1. 사전 확인

로컬에서 빌드가 통과하는지 확인합니다.

```bash
cd site
npm install
npm run build
```

---

## 2-A. Vercel 대시보드로 배포 (권장)

### 2-A-1. GitHub에 코드 올리기

`site` 폴더가 Git 저장소 루트입니다. (상위 `Norinse` 폴더가 아님)

```bash
cd site
git add .
git status   # .env.local 이 목록에 없어야 함
git commit -m "Prepare Norinse site for deployment"
```

GitHub에 새 저장소를 만든 뒤:

```bash
git remote add origin https://github.com/<계정>/<저장소>.git
git branch -M main
git push -u origin main
```

### 2-A-2. Vercel 프로젝트 연결

1. [https://vercel.com](https://vercel.com) 로그인
2. **Add New → Project**
3. GitHub 저장소 Import
4. 설정 확인:
   - **Framework Preset**: Next.js
   - **Root Directory**: `.` (저장소 루트 = `site` 폴더 내용)
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: 비움 (Next.js 기본)
5. **Environment Variables**에 아래 추가 (Production·Preview·Development 모두 동일 권장):

| 이름 | 설명 | 예시 |
|------|------|------|
| `RESEND_API_KEY` | [Resend](https://resend.com) API 키 | `re_...` |
| `CONTACT_ADMIN_EMAIL` | 문의 메일 수신 주소 | `admin@example.com` |
| `CONTACT_FROM_EMAIL` | (선택) 인증된 도메인 발신 주소 | `노린스 <noreply@yourdomain.com>` |

6. **Deploy** 클릭

배포 URL 예: `https://norinse-xxxx.vercel.app`

---

## 2-B. Vercel CLI로 배포

전역 설치 없이:

```bash
cd site
npx vercel login
npx vercel          # 첫 배포(프리뷰), 질문에 답변
npx vercel --prod   # 프로덕션 URL
```

환경 변수는 CLI 또는 대시보드에서 설정:

```bash
npx vercel env add RESEND_API_KEY
npx vercel env add CONTACT_ADMIN_EMAIL
# 선택
npx vercel env add CONTACT_FROM_EMAIL
```

값을 바꾼 뒤에는 **Redeploy**가 필요합니다.

---

## 3. Resend(문의 메일) 운영 시 참고

- `CONTACT_FROM_EMAIL`을 비우면 기본값 `onboarding@resend.dev`가 사용됩니다.
- **도메인 미인증** 상태에서는 Resend 테스트 정책에 따라 **가입 이메일로만** 발송될 수 있습니다.
- 실제 운영(`medicamp.kr` 등)에서는 Resend에서 **도메인 DNS 인증** 후  
  `CONTACT_FROM_EMAIL=노린스 <noreply@medicamp.kr>` 형태로 설정하세요.
- `CONTACT_ADMIN_EMAIL`은 문의를 받을 실제 수신 주소입니다.

배포 후 [문의하기](/contact-us/)에서 테스트 전송해 보세요.

---

## 4. 배포 후 점검 체크리스트

- [ ] 홈·제품·FAQ·구매처 페이지 로드
- [ ] 이미지(`/images/...`) 정상 표시
- [ ] `/contact-us/` 폼 제출 → 수신 메일 도착
- [ ] `sitemap.xml`, `robots.txt` 접근
- [ ] (선택) Vercel **Settings → Domains**에서 커스텀 도메인 연결

---

## 5. 커스텀 도메인 (선택)

Vercel 프로젝트 → **Settings → Domains** → 도메인 입력 후 안내하는 DNS 레코드를  
도메인 등록업체(가비아, Cloudflare, Route53 등)에 추가합니다.

---

## 6. 보안

- `.env.local`은 **절대 Git에 커밋하지 마세요.** (`.gitignore`에 포함됨)
- API 키가 노출되었다면 Resend에서 키를 **재발급**하세요.
- Vercel 환경 변수만 프로덕션 비밀값으로 사용합니다.

---

## 문제 해결

| 증상 | 확인 |
|------|------|
| 문의 시 "설정이 완료되지 않았습니다" | Vercel에 `RESEND_API_KEY`, `CONTACT_ADMIN_EMAIL` 설정 후 재배포 |
| 메일이 안 옴 | Resend 대시보드 Logs, 도메인 인증·수신 주소 제한 |
| 404 on API | `trailingSlash: true` → 클라이언트는 `/api/contact/` 로 POST (이미 적용됨) |
