import fs from "fs";

const h = fs.readFileSync(new URL("../../index.html", import.meta.url), "utf8");
const block = h.match(/vc_shortcodes-custom-css">([\s\S]*?)<\/style>/)?.[1] ?? "";

const slideIds = [
  "1718980439264", // home-hero-1 first slide
  "1620742080793",
  "1620742087436",
  "1620742097317",
  "1620742102915",
];

for (const id of slideIds) {
  const m = block.match(new RegExp(`\\.vc_custom_${id}\\{([^}]+)\\}`, "i"));
  console.log(`\n=== slide vc_custom_${id} ===`);
  console.log(m ? m[1].replace(/\s+/g, " ") : "not in block");
}

// inline thegem rules in page
for (const id of ["6a166c3e12f978982", "6a166c3e241cb4806", "6a166c3e2837b6567"]) {
  const re = new RegExp(`thegem-custom-${id}[^<]*<style[^>]*>([^<]+)</style>`, "i");
  const m = h.match(re);
  if (m) console.log(`\nthegem ${id}:`, m[1].replace(/\s+/g, " ").slice(0, 300));
}

const bgRules = [...block.matchAll(/background[^;{}]+/gi)]
  .map((x) => x[0])
  .filter((x) => /Hero|HandFoam|uploads/i.test(x));
console.log("\n=== hero background rules count ===", bgRules.length);
for (const r of bgRules.slice(0, 12)) console.log(r.replace(/\s+/g, " ").slice(0, 180));
