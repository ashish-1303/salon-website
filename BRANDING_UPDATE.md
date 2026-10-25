# Branding Update: AK Salon

## Summary

Updated the salon branding from **Glow & Grace** to **AK Salon** and set the salon location to **1st Floor, Binali Complex, Naranpura, Ahmedabad-380013, Gujarat**. The displayed address and embedded map search use the location supplied for the client.

## Files Updated

- `src/data/salon.ts` — Changed the central `salonInfo.name` value to `AK Salon`, set the supplied address, and updated the Google Maps embed query to that address. The header, footer, contact page, and map read from this shared config.
- `src/components/Navbar.tsx` — Changed the header logo text mark from `V` to `AK`; the salon name continues to come from the central salon data.
- `src/components/Footer.tsx` — Changed the footer logo text mark from `V` to `AK`; the salon name continues to come from the central salon data.
- `src/routes/__root.tsx` — Updated the default browser title to `AK Salon — Unisex Salon`.
- `src/routes/index.tsx` — Updated the homepage title, description, and Open Graph title to use AK Salon.
- `src/routes/services.tsx` — Updated the services page title and Open Graph title to use AK Salon.
- `src/routes/gallery.tsx` — Updated the gallery page title, description, and Open Graph title to use AK Salon.
- `src/routes/reviews.tsx` — Updated the reviews page title, description, and Open Graph title to use AK Salon.
- `src/routes/contact.tsx` — Updated the contact page title, description, and Open Graph title to use AK Salon.

## Layout And Functionality

No responsive, spacing, typography, color, routing, form, or interaction changes were made. The shorter wordmark required no layout adjustment.

## Client Demo Notes

The current source contains template/sample content that should be reviewed with the salon owner before public launch:

- `src/data/salon.ts` — Verify the phone number, email address, and opening hours. The `555` phone and `verveandbalm.com` email look like template values. The map uses a search query for the supplied address; check that Google Maps resolves to the correct entrance/pin.
- `src/data/services.ts` and `src/lib/format.ts` — Service prices are displayed with `$`. Confirm the actual menu, prices, and whether they should be shown in INR; do not simply relabel the existing sample values.
- `src/data/reviews.ts` and `src/routes/index.tsx` — Reviews and the `4.9 rating`, `12k+ happy clients`, and `20 min avg wait` metrics need evidence/owner approval. The homepage also claims certified stylists and organic, cruelty-free products; verify or remove those claims.
- `src/routes/contact.tsx` — Form validation is client-side, but submission only logs the visitor's name, phone, and message in the browser console and displays a success toast. It does not deliver an enquiry or book an appointment, despite the callback wording. Do not present it as a working booking channel; before public use, connect an approved enquiry destination and avoid logging personal data in production.
- `src/components/Footer.tsx` — Instagram, Facebook, and TikTok icons currently link to `#`. Replace them with owner-provided active accounts or remove them.
- `src/data/gallery.ts` and `src/data/services.ts` — Much of the imagery is generic Unsplash stock, not verified photos of this salon or its work. Replace it with owner-approved images before presenting the gallery as the salon's own portfolio, and confirm image usage rights.
- `README.md` — The project setup description says Next.js, but the application uses TanStack Start, Vite, and React. This is an internal documentation mismatch, not a runtime issue.

For launch, request the verified contact details, hours, service menu and INR prices, approved images, social URLs, and any substantiated claims/reviews. Consider adding location-specific SEO metadata and structured local-business data once the owner confirms those facts.

## Verification

A source search found the supplied Naranpura/Ahmedabad address and no remaining Bandra, Mumbai, or Willow Lane references under `src/`. Editor diagnostics reported no errors in the workspace. A production build was not run in this session.

No old-name references are intentionally retained in application source.