export const products = [
  { id: 1, name: "Handcrafted Terracotta Diya Lamp", category: "Home Décor", material: "Terracotta", craft: "Pottery", location: "Jaipur", artisan: "Sita Devi", price: 625, minOrder: 20, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80", description: "Hand-shaped terracotta diya lamp inspired by traditional Rajasthani forms.", tags: ["Handmade","Terracotta","HomeDecor"] },
  { id: 2, name: "Bamboo Heritage Basket", category: "Utility", material: "Bamboo", craft: "Bamboo Craft", location: "Assam", artisan: "Rina Das", price: 450, minOrder: 25, image: "https://images.unsplash.com/photo-1595521624992-48a59a1e7e2a?auto=format&fit=crop&w=900&q=80", description: "Lightweight handwoven bamboo basket made using traditional techniques.", tags: ["Bamboo","Handwoven","Sustainable"] },
  { id: 3, name: "Block Print Cotton Stole", category: "Textiles", material: "Cotton", craft: "Block Printing", location: "Jaipur", artisan: "Meera Kumari", price: 850, minOrder: 15, image: "https://images.unsplash.com/photo-1583845112203-454c1f1f1f0a?auto=format&fit=crop&w=900&q=80", description: "Hand-block printed cotton stole with a contemporary take on heritage motifs.", tags: ["Textile","BlockPrint","Cotton"] },
  { id: 4, name: "Kutch Embroidered Wall Art", category: "Home Décor", material: "Cotton", craft: "Embroidery", location: "Kutch", artisan: "Fatima Khatri", price: 1450, minOrder: 10, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80", description: "Vibrant hand-embroidered textile art inspired by Kutch folk traditions.", tags: ["Embroidery","Kutch","WallArt"] },
  { id: 5, name: "Carved Wooden Serving Tray", category: "Kitchen", material: "Sheesham Wood", craft: "Wood Carving", location: "Saharanpur", artisan: "Arun Kumar", price: 1100, minOrder: 12, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80", description: "Hand-carved wooden tray combining utility with traditional floral motifs.", tags: ["Wood","Carving","Kitchen"] },
  { id: 6, name: "Blue Pottery Planter", category: "Home Décor", material: "Ceramic", craft: "Blue Pottery", location: "Jaipur", artisan: "Nisha Sharma", price: 780, minOrder: 20, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80", description: "Decorative blue pottery planter made by local artisans in Jaipur.", tags: ["BluePottery","Planter","Décor"] },
  { id: 7, name: "Handmade Brass Bell", category: "Décor", material: "Brass", craft: "Metal Craft", location: "Moradabad", artisan: "Rakesh Singh", price: 520, minOrder: 30, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80", description: "Small brass bell with hand-finished detailing and a warm traditional tone.", tags: ["Brass","MetalCraft","Gift"] },
  { id: 8, name: "Banarasi Handwoven Runner", category: "Textiles", material: "Silk", craft: "Handloom", location: "Varanasi", artisan: "Kavita Devi", price: 2100, minOrder: 8, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80", description: "Handwoven runner inspired by Banarasi textile motifs.", tags: ["Banarasi","Silk","Handloom"] }
];

export const artisans = [
  { id: 1, name: "Sita Devi", craft: "Terracotta Artisan", location: "Jaipur", experience: 15, rating: 4.8, products: 12 },
  { id: 2, name: "Rina Das", craft: "Bamboo Artisan", location: "Assam", experience: 11, rating: 4.7, products: 9 },
  { id: 3, name: "Meera Kumari", craft: "Block Print Artist", location: "Jaipur", experience: 8, rating: 4.9, products: 14 },
  { id: 4, name: "Fatima Khatri", craft: "Embroidery Artisan", location: "Kutch", experience: 17, rating: 4.9, products: 18 },
  { id: 5, name: "Arun Kumar", craft: "Wood Carver", location: "Saharanpur", experience: 20, rating: 4.6, products: 10 }
];

export const buyers = [
  { id: 1, name: "The Heritage Hotel", type: "Boutique Hotel", location: "Delhi", need: "Traditional décor and guest-room products" },
  { id: 2, name: "GiftBox India", type: "Corporate Gifting", location: "Gurugram", need: "Handmade products for corporate hampers" },
  { id: 3, name: "Earth & Home", type: "Home Décor Store", location: "Mumbai", need: "Sustainable handmade décor" },
  { id: 4, name: "Craft Collective", type: "Retailer", location: "Bengaluru", need: "Indian craft products for retail" },
  { id: 5, name: "Boutique Stay Co.", type: "Hospitality", location: "Udaipur", need: "Small-batch artisan décor" }
];

export const markets = [
  { name: "Boutique Hotels", score: 94, reason: ["Product category matches", "Suitable price range", "Suitable for bulk orders", "Location compatible"], order: "20–200 pieces", location: "Pan India" },
  { name: "Corporate Gifting", score: 88, reason: ["Strong gifting appeal", "Customizable quantities", "Good price range"], order: "50–500 pieces", location: "Delhi NCR" },
  { name: "Home Décor Stores", score: 82, reason: ["Fits store category", "Visual product appeal", "Retail-friendly pricing"], order: "10–100 pieces", location: "Major cities" },
  { name: "Handicraft Retailers", score: 76, reason: ["Traditional craft fit", "Artisan story adds value"], order: "10–75 pieces", location: "Pan India" }
];

export const demoEnquiries = [
  { id: 1, buyer: "The Heritage Hotel", product: "Handcrafted Terracotta Diya Lamp", quantity: 100, message: "We are interested in purchasing these for our hotel.", status: "Pending", location: "Delhi" },
  { id: 2, buyer: "GiftBox India", product: "Handcrafted Terracotta Diya Lamp", quantity: 60, message: "Please share availability for a corporate gifting order.", status: "Accepted", location: "Gurugram" }
];

export function getSaved(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}