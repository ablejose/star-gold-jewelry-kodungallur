import type { BrandConfig } from "@/types/brand";

export const BRAND: BrandConfig = {
  businessName: "Star Gold Jewelry",
  tagline: "Exquisite Jewellery in Kodungallur",
  description:
    "Star Gold Jewelry is Kodungallur's trusted destination for gold, diamond and silver jewellery. Serving Kodungallur with timeless craftsmanship and exquisite collections for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്‍.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "കൊടുങ്ങല്ലൂർയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "/images/store1.webp",
    "/images/store2.webp",
    "/images/store3.webp",
    "/images/store4.webp",
  ],

  address: "Kodungallur, Kerala 680664",
  city: "Kodungallur",
  state: "Kerala",
  pincode: "680664",

  phone: "+919745003738",
  whatsapp: "919745003738",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Star%20Gold%20Jewelry&query_place_id=ChIJywUkbJQbCDsR0PqbOUCdoGE",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "Star Gold Jewelry | Jewellery Store in Kodungallur",
    description:
      "Star Gold Jewelry — your trusted destination for gold, diamond and silver jewellery in Kodungallur, Kerala.",
    keywords: [
      "Star Gold Jewelry",
      "jewellery Kodungallur",
      "gold jewellery Kodungallur",
      "diamond jewellery Kodungallur",
      "silver jewellery Kodungallur",
      "jewellery store Kodungallur",
      "jewellery Kerala",
    ],
    canonical: "https://star-gold-jewelry-kodungallur.vercel.app",
    ogImage:
      "/images/store1.webp",
  },

  faq: [],

  whatsappMessage:
    "Hello Star Gold Jewelry, I'd like to know more about your jewellery collections.",
};
