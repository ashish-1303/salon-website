import type { SalonInfo } from "@/types";

export const salonInfo: SalonInfo = {
  name: "Verve & Balm",
  tagline: "Where style is sculpted with softness.",
  address: "142 Willow Lane, Bandra West, Mumbai 400050",
  phone: "(555) 018-2247",
  email: "hello@verveandbalm.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bandra%20West%2C%20Mumbai&output=embed",
  hours: [
    { day: "Monday – Friday", time: "9:00 am – 7:00 pm" },
    { day: "Saturday", time: "9:00 am – 8:00 pm" },
    { day: "Sunday", time: "10:00 am – 5:00 pm" },
  ],
};
