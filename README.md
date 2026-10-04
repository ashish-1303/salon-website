# Salon Website

Build an MVP for a modern, responsive salon website for a unisex salon (services for both men and women).

1. TECH STACK: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion (for animations/transitions) + Lucide React (for icons). Do not set up a database or backend yet — use local typed TypeScript data files (e.g. /data/services.ts, /data/reviews.ts) as the data source for this MVP; keep the data layer cleanly separated so it can be swapped for a real backend later without touching UI components.

2. PAGES (MVP scope only): Home, Services, Gallery, Reviews, Contact Us. Use Next.js App Router file-based routing (/app/services/page.tsx, etc.) with a shared Navbar and Footer layout component across all pages.

3. HOME PAGE: Hero section with salon name, tagline, and a prominent "Book Appointment" CTA button; a short highlights section showing 3-4 featured services with icons/images; a preview of top 3 customer reviews; a brief "Why choose us" section; a footer with quick links, contact info, and social icons.

4. SERVICES PAGE: Display services grouped into two clear categories — "For Men" and "For Women" — using tabs or a toggle. Each service card must show: service name, a representative image, price, and duration. Include these common salon services split by category:

   - Men: Haircut, Beard Trim/Shave, Hair Color, Head Massage, Facial, Hair Spa

   - Women: Haircut & Styling, Hair Color/Highlights, Facial, Waxing, Manicure/Pedicure, Bridal Makeup, Hair Spa

   Use a responsive grid (e.g. 3 columns desktop, 2 tablet, 1 mobile) with hover animations on each card.

5. GALLERY PAGE: A responsive image grid/masonry layout showing salon interior photos, before-after style shots, and styling work samples. Use placeholder images sourced from a free stock photo service (e.g. Unsplash) with realistic salon-related search terms (haircut, salon interior, hairstyling, spa) so it looks like a real, modern salon gallery. Include a lightbox/modal preview on image click.

6. REVIEWS PAGE: Display customer testimonials as cards with a star rating, customer name, and short review text. Use a responsive grid or a horizontal scroll/carousel on mobile. Include 6-8 realistic sample reviews as placeholder data.

7. CONTACT US PAGE: Salon address, phone number, opening hours, and an embedded Google Map (iframe). Include a simple enquiry form (name, phone, message) with client-side validation using Zod + React Hook Form. On submit, just log/show a success message for now (no backend wiring yet).

8. UI/UX REQUIREMENTS: Modern, clean, visually attractive design similar to contemporary salon/beauty industry websites — soft color palette (e.g. warm neutrals, soft pinks/golds, or elegant black-and-gold), good use of whitespace, clear visual hierarchy, and smooth Framer Motion animations (fade-ins, scroll reveals, hover scale effects on cards/buttons). Avoid generic template look — should feel premium and intentional.

9. RESPONSIVENESS: Fully responsive and mobile-first across all breakpoints (mobile, tablet, desktop). Sticky mobile-friendly navbar with a hamburger menu on small screens. All images, grids, and text must scale properly with no horizontal overflow on any screen size.

10. CODE QUALITY: Code must be clean, modular, and industry-standard — reusable components (e.g. ServiceCard, ReviewCard, Button, SectionHeading), proper TypeScript types/interfaces for all data models (Service, Review, etc.), no inline magic values, and consistent naming conventions.

11. FOLDER STRUCTURE: Use a scalable, maintainable structure, e.g.:

    /app (routes)

    /components (reusable UI components)

    /data (typed static data files)

    /types (shared TypeScript interfaces)

    /lib (utility functions, validation schemas)

    /public/images (static assets)

    Keep it simple and not over-engineered for an MVP, but structured so a database/backend layer can be added later without a rewrite.

12. FUTURE-PROOFING NOTE: Structure the data-fetching logic (even though it's static for now) behind simple functions like getServices() or getReviews() in /lib, so that swapping in a real database or CMS later only requires changing those functions, not the UI components that consume them.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/180525d2-8a50-45ed-97ec-a47ef525fbb5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
