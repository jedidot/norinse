const res = await fetch("https://cleanlifeproducts.com/hair-care/", {
  headers: { "User-Agent": "Mozilla/5.0" },
});
const html = await res.text();
const match = html.match(/background-image:\s*url\(([^)]*HairCare[^)]*)\)/i);
console.log("hero:", match?.[1] ?? "not found");
