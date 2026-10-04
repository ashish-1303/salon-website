import serviceFacial from "@/assets/service-facial.jpg";
import serviceHairSpa from "@/assets/service-hair-spa.jpg";
import serviceStyling from "@/assets/service-styling.jpg";
import serviceWaxing from "@/assets/service-waxing.jpg";
import type { Service } from "@/types";

const img = (query: string) =>
  `https://images.unsplash.com/${query}?auto=format&fit=crop&w=800&q=70`;

export const services: Service[] = [
  // ---- For Men ----
  {
    id: "m-haircut",
    name: "Haircut",
    description: "A sharp, tailored cut shaped to your face and hair type.",
    category: "men",
    price: 35,
    durationMinutes: 45,
    imageUrl: img("photo-1503951914875-452162b0f3f1"),
    featured: true,
  },
  {
    id: "m-beard",
    name: "Beard Trim & Shave",
    description: "Hot towel, straight razor finish and a clean, precise line.",
    category: "men",
    price: 28,
    durationMinutes: 30,
    imageUrl: img("photo-1621607512214-68297480165e"),
    featured: true,
  },
  {
    id: "m-color",
    name: "Hair Color",
    description: "Natural-looking tone, grey blending and soft dimension.",
    category: "men",
    price: 70,
    durationMinutes: 90,
    imageUrl: img("photo-1596728325488-58c87691e9af"),
  },
  {
    id: "m-head-massage",
    name: "Head Massage",
    description: "Warm oil pressure-point massage to unwind the scalp.",
    category: "men",
    price: 30,
    durationMinutes: 30,
    imageUrl: serviceHairSpa,
  },
  {
    id: "m-facial",
    name: "Facial",
    description: "Deep cleanse, exfoliation and hydration for all skin types.",
    category: "men",
    price: 55,
    durationMinutes: 60,
    imageUrl: serviceFacial,
  },
  {
    id: "m-hair-spa",
    name: "Hair Spa",
    description: "Restorative scalp and strand treatment with a steam finish.",
    category: "men",
    price: 50,
    durationMinutes: 50,
    imageUrl: serviceHairSpa,
  },

  // ---- For Women ----
  {
    id: "w-haircut",
    name: "Haircut & Styling",
    description: "Consultation, wash, cut and a blow-dry you can recreate.",
    category: "women",
    price: 55,
    durationMinutes: 60,
    imageUrl: serviceStyling,
    featured: true,
  },
  {
    id: "w-color",
    name: "Hair Color & Highlights",
    description: "Hand-painted dimension, gloss and soft grown-out blends.",
    category: "women",
    price: 120,
    durationMinutes: 120,
    imageUrl: img("photo-1560869713-7d0a29430803"),
    featured: true,
  },
  {
    id: "w-facial",
    name: "Facial",
    description: "Brightening deep-cleanse tailored to your skin that week.",
    category: "women",
    price: 60,
    durationMinutes: 60,
    imageUrl: serviceFacial,
  },
  {
    id: "w-waxing",
    name: "Waxing",
    description: "Gentle warm wax with soothing aftercare, head to toe.",
    category: "women",
    price: 40,
    durationMinutes: 45,
    imageUrl: serviceWaxing,
  },
  {
    id: "w-mani-pedi",
    name: "Manicure & Pedicure",
    description: "Shaping, cuticle care and a long-wearing polish finish.",
    category: "women",
    price: 65,
    durationMinutes: 75,
    imageUrl: img("photo-1604654894610-df63bc536371"),
  },
  {
    id: "w-bridal",
    name: "Bridal Makeup",
    description: "Trial plus day-of makeup built to last from dawn to dance.",
    category: "women",
    price: 220,
    durationMinutes: 150,
    imageUrl: img("photo-1519741497674-611481863552"),
  },
  {
    id: "w-hair-spa",
    name: "Hair Spa",
    description: "Deep-conditioning ritual for softness, shine and slip.",
    category: "women",
    price: 55,
    durationMinutes: 50,
    imageUrl: serviceHairSpa,
  },
];
