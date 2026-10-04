# Branding Update: AK Salon

## Summary

Updated the salon branding from **Glow & Grace** to **AK Salon**. The work is limited to the salon name and related brand marks and SEO metadata; service information, business details, layout, colors, and interactions were not intentionally changed.

## Files Updated

- `src/data/salon.ts` — Changed the central `salonInfo.name` value to `AK Salon`. The header, footer, and other consumers of this shared salon data now display the new name.
- `src/components/Navbar.tsx` — Changed the header logo text mark from `V` to `AK`; the salon name continues to come from the central salon data.
- `src/components/Footer.tsx` — Changed the footer logo text mark from `V` to `AK`; the salon name continues to come from the central salon data.
- `src/routes/__root.tsx` — Updated the default browser title to `AK Salon — Unisex Salon`.
- `src/routes/index.tsx` — Updated the homepage title, description, and Open Graph title to use AK Salon.
- `src/routes/services.tsx` — Updated the services page title and Open Graph title to use AK Salon.
- `src/routes/gallery.tsx` — Updated the gallery page title, description, and Open Graph title to use AK Salon.
- `src/routes/reviews.tsx` — Updated the reviews page title, description, and Open Graph title to use AK Salon.
- `src/routes/contact.tsx` — Updated the contact page title, description, and Open Graph title to use AK Salon.

## Layout And Functionality

No responsive, spacing, typography, color, routing, form, or interaction changes were made as part of this branding update. The shorter wordmark required no layout adjustment.

## Verification

A source search for `AK Salon`, `Glow & Grace`, and `Glow and Grace` found the updated brand strings in the files above and no old-name matches under `src/`. The project folder did not expose a Git repository during this documentation pass, so a Git-based changed-file comparison was unavailable.

No old-name references are intentionally retained in application source.