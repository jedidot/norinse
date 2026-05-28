# Norinse — Next.js 사이트

CleanLife(cleanlifeproducts.com) HTTrack 미러를 기반으로 변환한 **한국어 브랜드 사이트(노린스)**입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **정적 페이지 + API Route** (`/api/contact` — Resend 메일)
- **Pretendard** 폰트
- **Embla Carousel** (히어로·후기 슬라이더)

## 시작하기

```bash
cd site
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 빌드

```bash
npm run build
npm run start   # 로컬 프로덕션 모드 확인
```

## 배포 (Vercel)

문의 API 때문에 **Vercel** 배포를 권장합니다. 단계별 안내:

→ **[DEPLOY.md](./DEPLOY.md)**

로컬 `.env.local` 값을 Vercel 프로젝트 **Environment Variables**에 동일하게 등록한 뒤 배포하세요.

## 프로젝트 구조

```
src/
├── app/              # 페이지 라우트 (SSG)
├── components/
│   ├── home/         # 홈 섹션 컴포넌트
│   ├── layout/       # Header, Footer
│   ├── pages/        # 공통 콘텐츠 페이지
│   └── ui/           # Button, Container, Image 등
└── lib/
    ├── i18n/         # 한국어 locale (ko.ts)
    ├── images.ts     # 이미지 URL 상수
    └── seo.ts        # Metadata / JSON-LD
```

## 한국어(i18n) 확장

- 기본 locale: `src/lib/i18n/locales/ko.ts`
- 영문 추가 시 `locales/en.ts` 생성 후 `src/lib/i18n/index.ts`에 등록
- 모든 UI 텍스트·SEO 메타는 dictionary에서 관리

## 이미지

원본 CDN(`cleanlifeproducts.com`)에서 `public/images/`로 다운로드해 사용합니다.

```bash
npm run download-images
```

로컬 경로는 `src/lib/images.ts`에서 `/images/...` 형태로 참조합니다.

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 |
| `/hair-care/` | 헤어케어 |
| `/body-care/` | 바디케어 |
| `/hand-care/` | 핸드케어 |
| `/where-to-buy/` | 구매처 |
| `/faq/` | FAQ |
| `/contact-us/` | 문의 |
| `/privacy-policy/` | 개인정보처리방침 |

## SEO

- 페이지별 `metadata` (title, description, OG, Twitter)
- `sitemap.xml`, `robots.txt` 자동 생성
- JSON-LD Organization / WebSite 스키마

## 환경 변수

| 변수 | 필수 | 설명 |
|------|------|------|
| `RESEND_API_KEY` | ✓ | Resend API 키 |
| `CONTACT_ADMIN_EMAIL` | ✓ | 문의 수신 이메일 |
| `CONTACT_FROM_EMAIL` | | 인증 도메인 발신 주소 (미설정 시 Resend 기본) |

템플릿: [.env.example](./.env.example)
