// Mock service layer. Replace the internals with fetch() calls when your backend is ready.

import { markets, products, demoEnquiries, save, getSaved } from "./data";

export async function analyzeProduct(imageFile) {
  await new Promise(r => setTimeout(r, 1800));

  // Prototype AI logic.
  // In the future this will use the uploaded image with a real vision model.
  const fileName = imageFile?.name?.toLowerCase() || "";

  if (fileName.includes("crochet") || fileName.includes("knit")) {
    return {
      name: "Handcrafted Crochet Product",
      category: "Handicrafts",
      material: "Cotton Yarn",
      craftType: "Crochet Craft",
      style: "Contemporary Handmade",
      description:
        "A handcrafted crochet product made with cotton yarn, featuring detailed handmade work and a contemporary artisanal finish.",
      tags: ["Handmade", "Crochet", "Cotton", "IndianCraft"]
    };
  }

  if (fileName.includes("pot") || fileName.includes("clay")) {
    return {
      name: "Handcrafted Clay Pot",
      category: "Home Décor",
      material: "Clay",
      craftType: "Pottery",
      style: "Traditional",
      description:
        "A handcrafted clay pottery item featuring traditional artisanal techniques and an earthy handmade finish.",
      tags: ["Handmade", "Pottery", "Clay", "IndianCraft"]
    };
  }

  return {
    name: "Handcrafted Artisan Product",
    category: "Handicrafts",
    material: "Handmade Material",
    craftType: "Traditional Indian Craft",
    style: "Traditional",
    description:
      "A handcrafted artisan product made using traditional techniques, suitable for home décor, gifting and curated craft collections.",
    tags: ["Handmade", "IndianCraft", "Artisan", "Handicraft"]
  };
}

export function getMarketMatches(product) {
  return markets.map(m => ({ ...m }));
}

export function calculatePrice(material, labour, time, quantity) {
  const base = Number(material || 0) + Number(labour || 0);

  const recommended = Math.max(
    100,
    Math.round((base + Number(time || 0) * 35) * 1.35)
  );

  return {
    min: Math.round(recommended * 0.88),
    max: Math.round(recommended * 1.12),
    recommended
  };
}

export function createProduct(product) {
  const saved = getSaved("ks_products", products);

  const next = {
    ...product,
    id: Date.now(),
    views: 0,
    interests: 0
  };

  save("ks_products", [next, ...saved]);

  return next;
}

export function getProducts() {
  return getSaved("ks_products", products);
}

// DELETE PRODUCT
export function deleteProduct(id) {
  const saved = getSaved("ks_products", products);

  const updated = saved.filter(product => product.id !== id);

  save("ks_products", updated);

  return updated;
}

export function sendEnquiry(enquiry) {
  const saved = getSaved("ks_enquiries", demoEnquiries);

  const next = {
    ...enquiry,
    id: Date.now(),
    status: "Pending"
  };

  save("ks_enquiries", [next, ...saved]);

  return next;
}

export function getEnquiries() {
  return getSaved("ks_enquiries", demoEnquiries);
}

export { save };
