export const site = {
  name: "Harmony Garden",
  location: "Banswara, Rajasthan",
  category: "Wedding & Event Venue",

  hero: {
    eyebrow: "Wedding & Events in Banswara",
    title: "Your Celebration, Beautifully Gathered.",
    description:
      "Harmony Garden — A spacious wedding & celebration venue in Banswara",
    primaryCta: "Check Availability",
    secondaryCta: "Explore the Venue"
  },

  navigation: [
    { label: "HOME", href: "#hero" },
    { label: "VENUE", href: "#venue" },
    { label: "EVENTS", href: "#events" },
    { label: "GALLERY", href: "#gallery" },
    { label: "FACILITIES", href: "#facilities" },
    { label: "REVIEWS", href: "#reviews" }
  ],

  contact: {
    phone: "",
    whatsapp: "",
    address: "Banswara, Rajasthan"
  }
} as const;
