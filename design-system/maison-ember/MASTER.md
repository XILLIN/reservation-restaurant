# Maison Ember — Design system

## Direction

Contemporary Bangkok dining with an editorial, intimate, live-fire character. Large atmospheric photography, restrained typography, generous negative space, fine rules, and purposeful asymmetry. Treat the booking flow as a calm progressive form with a persistent, editable summary. The broad UI/UX Pro Max preset suggested a vibrant block style; it is intentionally not used because it conflicts with the requested premium hospitality mood.

## Tokens

- Canvas: `#F5F1E9` warm limestone; alternate surface `#EAE3D7`; paper `#FBF9F4`.
- Ink: `#24221F`; secondary ink `#625E55`; quiet ink `#817A6E`.
- Ember: `#8D3928` for primary action and small accents; deep ember `#68291F` for hover.
- Olive: `#596047` for subtle seasonal status.
- Hairline: `#D8D0C3`; dark hairline `#49443D`.
- Display: Playfair Display, normal weight with selective italic; UI/body: Karla, 400–600. Use uppercase tracked micro-labels sparingly.
- 4/8 spacing rhythm; page gutters 24px mobile, 48px tablet, 72px desktop; max content width 1440px.
- Section spacing 88–144px desktop, 64–88px mobile. 1px rules define structure instead of nested cards.
- Corners: 2–6px for controls; imagery and editorial blocks remain square. Shadows only for overlays and floating booking controls.
- Motion: 180–240ms ease-out for control feedback and drawer; no scroll-jacking; honor reduced motion.

## Interaction and accessibility

- One clear primary CTA per view; use text labels for status and icons as decoration only.
- Booking steps progressively reveal date, time, seating, and guest details. Keep a visible step indicator and editable summary.
- All fields have persistent labels, keyboard operation, visible focus, inline errors, and retained values. Targets are at least 44px tall.
- Availability states use explicit words as well as styling. Past dates and large parties are handled before guest details.
- Mobile nav is a labelled disclosure; sticky booking actions respect safe areas and do not cover focused controls.
- Contrast meets WCAG AA; meaningful images have useful alt text; reduced-motion disables reveal transitions.

## Responsive behavior

Use intentional single-column layouts below 768px, two-column editorial layouts from tablet, and wider asymmetry on desktop. Booking controls stack on small screens. Keep body text at least 16px and menu text comfortably readable. Images retain stable aspect ratios and use object-position per composition.
