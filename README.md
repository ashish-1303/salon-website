# AK Salon Website

Responsive salon website for AK Salon in Naranpura, Ahmedabad.

The app uses React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS 4, Framer Motion, and Lucide React. Content is stored in typed local data files behind accessor functions. There is no connected backend or booking integration.

2. PAGES: Home, Services, Gallery, Reviews, and Contact are implemented as TanStack file routes in `src/routes/`, with shared Navbar and Footer components.

3. HOME PAGE: Hero section with salon name, tagline, and a prominent "Book Appointment" CTA button; a short highlights section showing 3-4 featured services with icons/images; a preview of top 3 customer reviews; a brief "Why choose us" section; a footer with quick links, contact info, and social icons.

4. SERVICES PAGE: Display services grouped into two clear categories — "For Men" and "For Women" — using tabs or a toggle. Each service card must show: service name, a representative image, price, and duration. Include these common salon services split by category:

   - Men: Haircut, Beard Trim/Shave, Hair Color, Head Massage, Facial, Hair Spa

   - Women: Haircut & Styling, Hair Color/Highlights, Facial, Waxing, Manicure/Pedicure, Bridal Makeup, Hair Spa

   Use a responsive grid (e.g. 3 columns desktop, 2 tablet, 1 mobile) with hover animations on each card.

5. GALLERY PAGE: A responsive image grid/masonry layout showing salon interior photos, before-after style shots, and styling work samples. Use placeholder images sourced from a free stock photo service (e.g. Unsplash) with realistic salon-related search terms (haircut, salon interior, hairstyling, spa) so it looks like a real, modern salon gallery. Include a lightbox/modal preview on image click.

6. REVIEWS PAGE: Display customer testimonials as cards with a star rating, customer name, and short review text. Use a responsive grid or a horizontal scroll/carousel on mobile. Include 6-8 realistic sample reviews as placeholder data.

7. CONTACT PAGE: Displays salon contact details, opening hours, and a Google Maps iframe. The enquiry form uses client-side validation with Zod and React Hook Form. It currently provides demo-only feedback; it does not deliver messages or book appointments.

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

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```
