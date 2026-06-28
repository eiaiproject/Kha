/**
 * Centralized business config for Kopi KHA.
 * Replace placeholder values with real data before launch.
 */

export const CONTACT = {
  whatsappNumber: "", // e.g. "6281234567890"
  instagramHandle: "", // e.g. "kopikha.id"
  email: "hello@kopikha.id",
  deliveryAvailable: false,
  deliveryUrl: "", // e.g. "https://grabfood.co.id/kopikha"
};

export const WHATSAPP_URL = CONTACT.whatsappNumber
  ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent("Halo KHA, saya mau order kopi.")}`
  : "";

export const INSTAGRAM_URL = CONTACT.instagramHandle
  ? `https://instagram.com/${CONTACT.instagramHandle}`
  : "";

export const WHATSAPP_ORDER_MSG = (productName) =>
  CONTACT.whatsappNumber
    ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(`Halo KHA, saya mau order ${productName}.`)}`.trim()
    : "";

export const LOCATION = {
  address: "", // e.g. "Jl. Contoh No. 123, Bandung"
  hours: "Setiap hari, 08:00 – 22:00 WIB",
  mapsUrl: "", // e.g. "https://maps.google.com/?q=..."
  deliveryNote: "Cek area pengiriman via WhatsApp",
  outletStatus: "coming_soon", // "active" | "coming_soon"
};

export const BRAND = {
  name: "KHA",
  fullName: "Kopi KHA",
  tagline: "Support Your Local Caffeine Dealers",
  ogImage: "/og-image.png",
  copyright: "2026 Kopi KHA",
};
