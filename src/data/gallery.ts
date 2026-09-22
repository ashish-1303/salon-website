import type { GalleryImage } from "@/types";

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const galleryImages: GalleryImage[] = [
  { id: "g9", src: img("photo-1540555700478-4be289fbecef"), alt: "Calm spa treatment room" },
  { id: "g12", src: img("photo-1522337660859-02fbefca4702"), alt: "Relaxed client after styling" },
  { id: "g2", src: img("photo-1521590832167-7bcbfaa6381f"), alt: "Bright modern salon interior" },
  { id: "g7", src: img("photo-1516975080664-ed2fc6a32937"), alt: "Blow-dry styling in progress", tall: true },
  { id: "g1", src: img("photo-1560066984-138dadb4c035"), alt: "Stylist finishing a fresh haircut", tall: true },
  { id: "g6", src: img("photo-1585747860715-2ba37e788b70"), alt: "Barber shaping a beard" },
];
