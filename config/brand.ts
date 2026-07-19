import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file and the Cloudinary asset URLs. No component code should change.
 */
export const BRAND: BrandConfig = {
  businessName: "Star Gold Jewelry",
  tagline: "Trusted Jewellery Store in Chalakudy",
  description:
    "Star Gold Jewelry is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചാലക്കുടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFln55bgnQtduw2ErL_suEfUfw2Y3spYLi_eVXgMjzCqmT-qhMWUqNJE3hE8FkoWVGidRrDi4NZOnVveERHjQiP_NSDLjaneRMGo0gh-OSpPgflXFVApU6r6mw6-EjGp8io2Es-A=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlN3h0a3cVsGvLBhTxZYEPOKgP6X6CmkqxacXmEQBpKaAY2ycbWQg1p5dmDf3Exrk4t10iognamRjsL4EpZD4BCjVcY85rPPynCZue--k6YGwewL_f0b6cB6sR2VjczKRC0MX2Q=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDhIryuYzMniPq2jY8GI0U9l2h8seV0mlU40u1J7AqsaF4BuKLT52ogCmSdNhiucERbsJFIACEMMX6Rp4JOkdUl8iF73gTlEDGznz3AIZmZCoLcB1QNJoUPy5rOAzfRAGhotSg=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl7jgraLnkkN7qImI9lNGtr_D4PJ6d4vD0CxA4KsDSkxrJZYCfh1O2PgzqPRR6Gfj4UWYgsX5BpkqGRiuVnBnGHItwOR9DR5i3keH4CRlQ6fBDW_PeAO2AXSyw24fkw5FFmYy8_=s1600",
  ],

  address: "Kodungallur, Kerala 680664",
  city: "Chalakudy",
  state: "Kerala",
  pincode: "680664",

  phone: "+919745003738",
  whatsapp: "919745003738",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Star%20Gold%20Jewelry&query_place_id=ChIJywUkbJQbCDsR0PqbOUCdoGE",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "Star Gold Jewelry | Jewellery in Chalakudy",
    description:
      "Star Gold Jewelry is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",
    keywords: [
      "Star Gold Jewelry",
      "jewellery Chalakudy",
      "gold jewellery Chalakudy",
      "diamond jewellery Chalakudy",
      "silver jewellery Chalakudy",
      "jewellery store Kerala",
    ],
    canonical: "https://star-gold-jewelry-kodungallur.vercel.app",
    ogImage:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFln55bgnQtduw2ErL_suEfUfw2Y3spYLi_eVXgMjzCqmT-qhMWUqNJE3hE8FkoWVGidRrDi4NZOnVveERHjQiP_NSDLjaneRMGo0gh-OSpPgflXFVApU6r6mw6-EjGp8io2Es-A=s1600",
  },

  faq: [],

  whatsappMessage:
    "Hello Star Gold Jewelry, I'd like to know more about your jewellery collections.",
};
