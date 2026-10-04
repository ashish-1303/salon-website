import type { SalonInfo } from "@/types";

export const salonInfo: SalonInfo = {
  name: "AK Salon",
  tagline: "Where style is sculpted with softness.",
  address: "1st Floor, Binali Complex, Naranpura, Ahmedabad-380013, Gujarat",
  phone: "(555) 018-2247",
  email: "hello@verveandbalm.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1st%20Floor%2C%20Binali%20Complex%2C%20Naranpura%2C%20Ahmedabad-380013%2C%20Gujarat&output=embed",
  hours: [
    { day: "Monday – Friday", time: "9:00 am – 7:00 pm" },
    { day: "Saturday", time: "9:00 am – 8:00 pm" },
    { day: "Sunday", time: "10:00 am – 5:00 pm" },
  ],
};
