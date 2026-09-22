/**
 * Data access layer.
 *
 * Today these read from typed static files in /src/data. Swap the bodies for
 * database/CMS calls later — UI components only ever call these functions.
 */
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { galleryImages } from "@/data/gallery";
import { salonInfo } from "@/data/salon";
import type { GalleryImage, Review, SalonInfo, Service, ServiceCategory } from "@/types";

export function getServices(category?: ServiceCategory): Service[] {
  return category ? services.filter((s) => s.category === category) : services;
}

export function getFeaturedServices(limit = 4): Service[] {
  return services.filter((s) => s.featured).slice(0, limit);
}

export function getReviews(): Review[] {
  return reviews;
}

export function getFeaturedReviews(limit = 3): Review[] {
  return reviews.filter((r) => r.featured).slice(0, limit);
}

export function getGalleryImages(): GalleryImage[] {
  return galleryImages;
}

export function getSalonInfo(): SalonInfo {
  return salonInfo;
}
