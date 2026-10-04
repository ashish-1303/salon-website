export type ServiceCategory = "men" | "women";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  /** Price in USD */
  price: number;
  /** Duration in minutes */
  durationMinutes: number;
  imageUrl: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  /** Whole number, 1-5 */
  rating: number;
  text: string;
  service: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Controls masonry span */
  tall?: boolean;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  hours: { day: string; time: string }[];
}
