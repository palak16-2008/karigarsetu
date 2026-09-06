// Mock service layer. Replace the internals with fetch() calls when your backend is ready.

import { markets, products, demoEnquiries, save, getSaved } from "./data";

export async function analyzeProduct(imageFile) {
  await new Promise(r => setTimeout(r, 1800));
  return {
    name: "Handcrafted Terracotta Diya Lamp",
    category: "Home Décor",
    material: "Terracotta",
    craftType: "Traditional Indian Craft",
    style: "Traditional",
    description: "A handcrafted terracotta diya lamp featuring an earthy finish and traditional Indian detailing. Ideal for festive décor, hospitality spaces and thoughtful gifting.",
    tags: ["Handmade", "Terracotta", "IndianCraft", "HomeDecor"]
  };
}

export function getMarketMatches(product) {
  return markets.map(m => ({ ...m }));
}

export function calculatePrice(material, labour, time, quantity) {
  const base = Number(material || 0) + Number(labour || 0);
  const recommended = Math.max(100, Math.round((base + Number(time || 0) * 35) * 1.35));
  return { min: Math.round(recommended * 0.88), max: Math.round(recommended * 1.12), recommended };
}

export function createProduct(product) {
  const saved = getSaved("ks_products", products);
  const next = { ...product, id: Date.now(), views: 0, interests: 0 };
  save("ks_products", [next, ...saved]);
  return next;
}

export function getProducts() {
  return getSaved("ks_products", products);
}

export function sendEnquiry(enquiry) {
  const saved = getSaved("ks_enquiries", demoEnquiries);
  const next = { ...enquiry, id: Date.now(), status: "Pending" };
  save("ks_enquiries", [next, ...saved]);
  return next;
}

export function getEnquiries() {
  return getSaved("ks_enquiries", demoEnquiries);
}
export { save };