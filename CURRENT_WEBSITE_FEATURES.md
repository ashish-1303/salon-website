# Current Website Features

## Audit Scope

This document records the implementation present before the visual redesign. It is based on the maintained project source, route files, data, styles, configuration, and assets. User-facing claims and data values are described as they currently appear, not as independently verified salon facts.

## Current Pages And Routes

The TanStack file routes are registered through `src/routeTree.gen.ts`, with route implementations in `src/routes/`:

- `/` (`src/routes/index.tsx`) — Homepage with a salon/beauty hero, featured services, salon highlights, and featured testimonials.
- `/services` (`src/routes/services.tsx`) — Service menu with For Women / For Men tabs and service cards.
- `/gallery` (`src/routes/gallery.tsx`) — Masonry-style image gallery and click-to-open image lightbox.
- `/reviews` (`src/routes/reviews.tsx`) — Client review cards; horizontal snap scrolling on mobile and a grid from the small breakpoint upward.
- `/contact` (`src/routes/contact.tsx`) — Contact information, embedded map, and enquiry form.
- Root-level not-found and error views are defined in `src/routes/__root.tsx`.

The shared root shell wraps route content with the navbar, main outlet, footer, and Sonner toast provider. TanStack Router is configured with scroll restoration in `src/router.tsx`.

## Shared Header And Footer

- `src/components/Navbar.tsx` implements a sticky header with AK Salon wordmark/monogram, Home, Services, Gallery, Reviews, and Contact links, plus a desktop “Book Appointment” link to `/contact`.
- At widths below Tailwind `md`, desktop navigation is hidden and an animated menu button reveals the same links and a full-width booking CTA. Selecting a link closes the menu.
- `src/components/Footer.tsx` shows the AK Salon wordmark, quick links, Instagram/Facebook/TikTok icon links, and address, phone, and the first opening-hours entry. Social links currently use `href="#"` placeholders.

## Homepage Sections And CTAs

The homepage uses an animated two-column hero with an eyebrow, headline, supporting copy, “Book Appointment” and “Explore services” CTAs, plus rating/client-count/wait-time claims. It includes a local salon interior image with a rating badge; a four-card featured service grid and “View all” link; a “Why AK Salon” highlight list beside a featured review; and a featured reviews section with a “Read all reviews” CTA.

The displayed hero claims include “4.9 rating”, “12k+ happy clients”, “20 min avg wait”, “Certified unisex stylists”, and “Organic, cruelty-free products”. They are hardcoded, not sourced from verified data.

## Services Content And Interaction

`src/data/services.ts` contains six men's and seven women's services, with descriptions, image URLs, numeric prices, durations, and featured flags. `src/routes/services.tsx` starts on the women category and switches between women and men using an animated tab indicator. `src/components/ServiceCard.tsx` renders an image, name, and description with a reveal and hover-lift animation. Although price and duration exist in the data/type, the current card does not display them. `src/lib/format.ts` formats dollar prices and durations, and `src/types/index.ts` explicitly documents price as USD.

## Gallery Content And Interaction

`src/data/gallery.ts` defines twelve gallery entries whose image URLs are from Unsplash and whose alt text describes salon-related scenes. `src/routes/gallery.tsx` lays them out in one column, then two columns at `sm`, then three at `lg`. Clicking an image opens an animated modal/lightbox; clicking its backdrop or the close button closes it, and Escape closes it from the keyboard. The modal uses dialog roles and an accessible label, but does not implement focus trapping or focus restoration.

## Reviews Content And Interaction

`src/data/reviews.ts` supplies eight sample review objects with names, 4–5 star ratings, text, service labels, and featured flags. `src/components/ReviewCard.tsx` presents a semantic figure, decorative stars with screen-reader rating text, quote, and reviewer/service attribution. The reviews page uses horizontal snap scrolling below `sm` and a 2-column grid at `sm`, expanding to 3 columns at `lg`. The homepage shows featured reviews from the same data.

## Contact, Form, And Map

`src/data/salon.ts` is the central typed salon configuration used by the contact page and footer. It currently contains AK Salon, the Naranpura address, phone, email, opening hours, tagline, and a Google Maps search embed URL.

The contact route renders an introduction, contact details with `tel:` and `mailto:` links, hours, a lazy-loaded map iframe, and a form with name, phone, and message fields. `src/lib/validation.ts` defines Zod validation and React Hook Form connects it through the Zod resolver. The form validates client-side; submission logs entered values to the browser console, displays a success toast, and resets the form. There is no backend or delivery of enquiries, so it does not create an appointment. Fields have visible labels and `aria-invalid`; validation messages are shown beside fields.

## Images And Other Assets

Local imported assets in `src/assets/`:

- `salon-interior.jpg` — homepage hero image.
- `service-facial.jpg`, `service-hair-spa.jpg`, `service-styling.jpg`, and `service-waxing.jpg` — used by selected service entries.

Other service and all gallery images use remote Unsplash URLs constructed in `src/data/services.ts` and `src/data/gallery.ts`. The source does not establish that these are photographs of AK Salon. `public/` contains `favicon.ico` and `robots.txt`; no web manifest or separate touch icon was found during the source audit.

## Reusable Components

Application components include `Navbar`, `Footer`, `Reveal` (scroll fade/rise wrapper), `SectionHeading` (eyebrow/title/subtitle), `ServiceCard`, and `ReviewCard`. `src/components/ui/` contains shared shadcn/Radix-style primitives, including the button, inputs, form controls, cards, dialogs, tabs, toast, and other generated UI components. Helpers and typed data access live in `src/lib/`, `src/data/`, and `src/types/`.

## Animations And Interaction Patterns

Framer Motion provides hero entrance animation, scroll-triggered `Reveal`, section heading and card reveals, card/image hover lifts and image zoom, service tab indicator movement, mobile-nav expand/collapse, and gallery lightbox transitions. Links use TanStack Router; buttons use the shared CVA-based button component; success feedback uses Sonner. No booking backend or external booking integration is present.

## Responsive Layout

The app uses Tailwind CSS utilities and mobile-first breakpoints. The header switches from mobile menu to desktop links at `md`; the homepage hero and contact two-column layout switch at `lg`; service cards use one column by default, two at `sm`, and three at `lg`; featured homepage services use two columns at `sm` and four at `lg`; reviews use mobile horizontal scrolling, then two and three columns; gallery uses one, two, then three masonry columns. Several headings scale at `sm`. Responsive behavior is encoded in route/component utility classes rather than separate media-query files.

## Technologies And Project Architecture

The implementation uses React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS 4, Framer Motion, Lucide React, TanStack Query, Radix UI primitives, React Hook Form, Zod, Sonner, and `class-variance-authority`. Static data is kept behind accessors in `src/lib/data.ts`. The configured scripts are `npm run dev`, `npm run build`, `npm run build:dev`, `npm run preview`, `npm run lint`, and `npm run format`.

## Existing Visual System

`src/styles.css` defines Tailwind theme tokens using OKLCH. Before redesign, the page background and cards are very dark charcoal/navy, text is warm off-white, the primary accent is muted gold, and secondary/accent colors include sage/green and gold. Components rely heavily on large rounded corners, gradients, translucent surfaces, borders, and strong shadows. Fonts are Fredoka for display text and Nunito Sans for body text, loaded from Google Fonts in the root head. Layout generally uses centered `max-w-6xl` containers, `px-4` page gutters, section padding around `py-12`/`py-14`, and card gaps around `gap-5`/`gap-6`.

## UX And Accessibility Notes

- Semantic landmarks and headings, image alt text, labeled form fields, screen-reader rating text, keyboard menu controls, keyboard Escape behavior for the gallery modal, and visible shared-button focus rings are present.
- The mobile menu button exposes `aria-expanded` and a changing accessible label. Service tabs expose `role=tablist`, `role=tab`, and `aria-selected`, but do not currently connect tabs to `tabpanel` elements or expose arrow-key tab navigation.
- The gallery modal has dialog semantics and Escape/backdrop/close-button dismissal, but lacks a focus trap and focus restoration.
- The enquiry confirmation overstates what happens: form values are only logged locally and are not sent or booked.
- The `#` social destinations, sample testimonials/metrics, remote stock photos, and USD service prices need to be treated as demo data pending owner approval.
- Content and some badges make unsupported business and rating claims; these should be verified before public launch.

## Lovable Branding And Browser Tab

The root route sets the salon page title and links `/favicon.ico`. No manifest, apple-touch icon, or Open Graph image is configured in the inspected source. The favicon is a generic ICO asset and needs replacement with a salon-specific mark. Lovable-related implementation references exist in `vite.config.ts` (the Lovable Vite/TanStack preset and comments), `src/lib/lovable-error-reporting.ts`, and its import/use in `src/routes/__root.tsx`. These do not appear as a visible page logo, but the error-reporting integration and preset are code-level Lovable dependencies to review/remove or replace without disrupting the app's build/runtime setup.

## PLANNED UI/UX CHANGES

The plan keeps all existing routes, information architecture, typed data sources, form validation, service tabs, mobile navigation, toast feedback, and gallery lightbox. The redesign changes presentation and corrects interface gaps without adding booking or backend features.

1. **Light visual foundation:** Replace the dark charcoal/gold/sage tokens with a warm-white and soft-gray base, deep charcoal/navy text, muted blue as the primary action color, and restrained rose/lilac secondary accents. Preserve semantic tokens so controls and pages stay consistent. Purpose: meet the requested light, calm salon aesthetic while retaining strong text/control contrast.
2. **Typography and page rhythm:** Move to a more refined, legible display/body pairing and standardize container widths, section spacing, heading scale, and readable paragraph widths. Purpose: create clearer hierarchy and improve scanning on small screens without changing information architecture.
3. **Header and footer:** Simplify the header surface and active-link/CTA styling; keep the current mobile menu behavior. Rework footer contrast and spacing to suit the light palette while retaining salon details and routes. Remove inert social placeholders until the owner supplies actual account links.
4. **Homepage:** Give the location, headline, description, image, and primary/secondary CTAs clearer hierarchy; refine featured-service, highlights, and review sections with calmer surfaces and lighter card treatments. Remove unverified promotional claims and label testimonials as samples.
5. **Services and cards:** Refine service cards and category tabs for clearer image/title/description hierarchy, focus states, touch targets, and responsive grid spacing. Do not silently expose or relabel sample USD prices without verified salon pricing.
6. **Gallery and reviews:** Use quieter gallery framing and a less heavy lightbox while preserving image selection, dismissal, and keyboard Escape behavior. Restyle review cards/mobile presentation and identify supplied reviews as samples pending owner approval.
7. **Contact and form:** Improve contact/form layout, input contrast, focus/error states, and touch-target sizing while preserving Zod/React Hook Form validation and toast feedback. Explicitly identify the form as a non-sending demo; no delivery integration is planned without client-approved requirements.
8. **Small-screen refinement:** Review navbar, hero, grids, CTA wrapping, gallery, contact/map, and footer at 320, 375, 425, 768, 1024, and 1280+ CSS pixels. Fix actual overflow or cramped controls, maintain image aspect ratios, and honor reduced-motion preferences. Purpose: support usability at the requested viewport sizes; runtime viewport verification depends on browser tooling being available.
9. **Salon tab identity:** Replace the generic favicon with a simple AK Salon brand mark and ensure title/icon metadata is salon-branded. Remove app-level Lovable error telemetry and public-facing Lovable branding. Preserve the current Vite/TanStack build adapter because it configures required build/runtime plugins; do not replace it without a working build check.
10. **Verification and documentation:** Build and lint, exercise all five routes and key interactions, inspect console/runtime errors, check horizontal overflow and responsive rendering, then append a final implementation summary that distinguishes completed and verified work from owner-dependent data.

## FINAL IMPLEMENTATION SUMMARY

### Implemented

- Replaced the dark charcoal/gold/sage theme tokens in `src/styles.css` with a light background, white cards, charcoal text, blue primary actions, and soft rose/lilac surfaces. Changed display/body fonts to Cormorant Garamond and DM Sans.
- Restyled the shared header, footer, headings, buttons, service/review cards, and contact/map surfaces while retaining the existing route structure and mobile menu behavior.
- Refined the homepage hierarchy and responsive image aspect ratios; removed unsupported rating/client-count/wait-time and credentials/product claims from the homepage highlights. Added the Naranpura, Ahmedabad location as a prominent hero cue.
- Updated service tabs with a linked tabpanel, keyboard focus states, and larger touch targets. Kept the existing service list data and current omission of prices/durations in cards.
- Restyled gallery cards/lightbox and review cards while retaining image selection and Escape-to-close behavior. Clearly labeled review copy as sample content in homepage/reviews page copy and metadata.
- Restyled the contact form and improved inline error association with `aria-describedby` plus name/phone autocomplete. Preserved Zod/React Hook Form validation. Removed browser-console logging of submitted personal data and changed success feedback/copy to make clear that no enquiry is sent.
- Removed nonfunctional `#` social icons from the footer until real social URLs are supplied.
- Added `public/ak-salon.svg`; updated the root title, theme color, icon links, font loading, default description, and document language. Removed the app-level Lovable error reporter file and its root-route call. Removed builder promotional copy from `README.md` and updated its framework/form description.
- Wrapped application routes in Framer Motion `MotionConfig` with `reducedMotion="user"`.

### Verification Status

- Focused editor diagnostics reported no errors for the updated contact, service-tab, and root-shell files. A workspace-wide diagnostics response still showed cached Tailwind v4 suggestions referring to pre-edit class strings in the homepage, navbar, footer, and gallery; source search/readback confirms those reported legacy strings are no longer present in the current files. Since the build was skipped, a compiler-clean production bundle is not confirmed.
- Source search found no old dark/gold utility references or Lovable runtime reporter import under `src/`. Lovable package/config references remain in the Vite build adapter intentionally because it configures the existing TanStack/Vite/Nitro setup. The generated `.output` bundle may still be stale until a production build regenerates it.
- The production build and browser-based route/console/viewport checks at 320, 375, 425, 768, 1024, and 1280+ pixels were not run: the environment skipped the build/browser tool calls. Therefore, visual rendering, route interaction behavior, horizontal overflow, and favicon display remain unverified in a running browser.

### Still Requires Salon Owner Input

Confirm the phone, email, opening hours, service menu/prices and currency, salon-specific images, social URLs, and any customer reviews or business claims before publication. The contact form is still a demo-only local form, and the stock imagery remains unverified as AK Salon photography.
