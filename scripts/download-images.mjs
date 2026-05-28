/**
 * CDN 이미지를 public/images/ 로 다운로드
 * Usage: npm run download-images
 *
 * src/lib/images.ts 의 imagePaths 와 동기화 유지
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CDN = "https://cleanlifeproducts.com/wp-content/uploads";

const paths = [
  "thegem/logos/logo_c46fc3b9eca1be6c59743332ef25cb1d_1x.png",
  "thegem/logos/logo_7012343275b77a54854f1eab01cb3e30_1x.png",
  "CL_WebImages_CL.png",
  "2021/02/HandFoamImages2_72-01.png",
  "2021/02/HandFoamImages2_72-07.png",
  "2021/02/CL_WebImages_HeroBanners2_021721_02_Hero_Carousel_2_LOGO.png",
  "2021/02/CL_WebImages_HeroBanners2_021721_05_Hero_Carousel_5_LOGO.png",
  "2021/04/CL_WebImages_Hero_Carousel_4-copy-3.png",
  "2021/02/CL_WebImages_HeroBanners2_021721_03_Hero_Carousel_3_LOGO.png",
  "2021/02/CL_WebImages_HeroBanners_BubbleAlone.png",
  "2021/02/CL_WebImages_Products_041221_Home_Hair1A.png",
  "2021/02/CL_WebImages_Products_081021_Home_BodyBOTH-copy.png",
  "2021/02/HandFoamImages-02.png",
  "2021/02/CL_WebImages_Products_022121_Home_Hair2-copy.png",
  "2021/02/CL_WebImages_Products_081021_Home_BodyBOTH_ColorBG.png",
  "2021/02/HandFoamImages-03.png",
  "2021/02/CL_WebImages_Products_021721_CL_NR.png",
  "2021/02/CL_WebImages_Icons_021721_Alternative.png",
  "2021/02/CL_WebImages_Icons_021721_Icon_Easy.png",
  "2021/02/CL_WebImages_Icons_021721_Icon_Paraben.png",
  "2021/04/CL_WebImages_Icons_051021_Icon_Location.png",
  "2021/04/CL_WebImages_Icons_051021_Icon_OnlinePurchase.png",
  "2021/03/CL_WebImages_Icons_030121_Icon_Online.png",
  "2021/03/CL_WebImages_Icons_051021_Icon_BulkSales.png",
  "2021/02/CL_WebImages_021521_Man_Blank.png",
  "2021/02/CL_WebImages_021521_Girl_Blank.png",
  "2021/02/CL_WebImages_021521_Nurse_Blank.png",
  "2021/02/CL_WebImages_021521_Hiker_Blank.png",
  "2021/02/CL_WebImages_021521_Trucker_Blank.png",
  "2021/02/WEB_HomeCare.png",
  "2021/02/WEB_Outdoors.png",
  "2021/02/WEB_SpecialNeeds.png",
  "2021/02/WEB_Traveling.png",
  "2021/04/CL_WebImages_HairCareNEW-49.png",
  "2021/02/P_CL_WebImages_Products_022121_Product_Sham-copy.png",
  "2021/02/P_CL_WebImages_Products_022121_Product_Conditionr.png",
  "2021/02/WEB_VideoBG_Body.png",
  "CL_WebImages_HeroBanner__WBG_081821-02-1.png",
  "2021/02/CL_WebImages_Products_022321_BodyBath-copy-1.png",
  "2021/02/CL_WebImages_Products_022321_BathWipes-copy-1.png",
  "2021/02/CL_WebImages_Products_022321t_Peri-1.png",
  "2021/02/WEB_VideoBG_Hand.png",
  "HandFoamImages-05.png",
  "HandFoamImages-06.png",
  "2021/04/HandFoamWide.png",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicRoot = path.join(__dirname, "..", "public", "images");

async function download(relativePath) {
  const url = `${CDN}/${relativePath}`;
  const dest = path.join(publicRoot, relativePath);
  await mkdir(path.dirname(dest), { recursive: true });

  const res = await fetch(url, {
    headers: { "User-Agent": "NorinseSite/1.0" },
  });

  if (!res.ok) {
    throw new Error(`${res.status} ${url}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buffer);
  console.log(`OK  ${relativePath} (${buffer.length} bytes)`);
}

let failed = 0;
for (const p of paths) {
  try {
    await download(p);
  } catch (err) {
    failed++;
    console.error(`FAIL ${p}:`, err.message);
  }
}

if (failed > 0) {
  process.exit(1);
}

console.log(`\nDone. ${paths.length - failed}/${paths.length} images saved to public/images/`);
