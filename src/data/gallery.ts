import type { GalleryImage } from "@/types";

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: img("photo-1560066984-138dadb4c035"), alt: "Stylist finishing a fresh haircut", tall: true },
  { id: "g2", src: img("photo-1521590832167-7bcbfaa6381f"), alt: "Bright modern salon interior" },
  { id: "g3", src: img("photo-1562322140-8baeececf3df"), alt: "Client having hair washed at the basin" },
  { id: "g4", src: img("photo-1595476108010-b4d1f102b1b1"), alt: "Soft balayage colour result", tall: true },
  { id: "g5", src: img("photo-1470259078422-826894b933aa"), alt: "Salon styling station with mirrors" },
  { id: "g6", src: img("photo-1585747860715-2ba37e788b70"), alt: "Barber shaping a beard" },
  { id: "g7", src: img("photo-1516975080664-ed2fc6a32937"), alt: "Blow-dry styling in progress", tall: true },
  { id: "g8", src: img("photo-1487412947147-5cebf100ffc2"), alt: "Finished waves and styling work" },
  { id: "g9", src: img("photo-1540555700478-4be289fbecef"), alt: "Calm spa treatment room" },
  { id: "g10", src: img("photo-1559599101-f09722fb4948"), alt: "Product shelf and warm salon lighting" },
  { id: "g11", src: img("photo-1552693673-1bf958298935"), alt: "Detail of a precision cut", tall: true },
  { id: "g12", src: img("photo-1522337660859-02fbefca4702"), alt: "Relaxed client after styling" },
];
