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
    { label: "Home", href: "#hero" },
    { label: "Venue", href: "#venue" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Facilities", href: "#facilities" },
    { label: "Reviews", href: "#reviews" }
  ],

  contact: {
    phone: "",
    whatsapp: "",
    address: "Banswara, Rajasthan"
  }
} as const;
