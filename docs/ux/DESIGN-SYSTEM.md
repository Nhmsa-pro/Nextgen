# NHMSA Website — Design System

**Status:** Draft for owner review  
**Design intent:** Professional, practical, trustworthy training academy; mobile-first and bilingual.  
**Brand note:** Use the supplied academy logo as the source of truth. Exact logo color values must be sampled from the original asset before final token values are approved. Do not invent a brand palette and call it official.

## 1. Design principles
- **Clarity first:** course, fee, location, requirements, dates and application status should be easy to scan.
- **Trust through evidence:** use real, approved facts and authentic/appropriately licensed imagery.
- **Practical professionalism:** confident, clean layouts rather than decorative effects.
- **Mobile-first:** forms and course actions must work comfortably on small screens and slower connections.
- **Bilingual parity:** Somali and English have equal content quality and functional support.
- **Accessible by default:** target WCAG 2.2 AA.
- **Consistent behavior:** repeated actions, status labels, form errors and navigation should behave the same throughout the site.

## 2. Typography
- **Headings:** Poppins.
- **Body, navigation, forms and admin labels:** Inter.
- Use a restrained hierarchy. Avoid using many weights or sizes on one screen.
- Suggested scale (to validate in visual review):
  - Display/hero: 40–56 px desktop; 32–40 px mobile.
  - H1: 36–44 px desktop; 30–34 px mobile.
  - H2: 28–32 px desktop; 24–28 px mobile.
  - H3: 22–24 px.
  - Body large: 18 px.
  - Body: 16 px.
  - Supporting text: 14 px; do not use small text for essential instructions.
  - Label/caption: generally 14 px minimum.
- Line-height: approximately 1.1–1.25 for headings and 1.45–1.65 for body copy.
- Use sentence case for labels and buttons. Avoid long all-caps text.

## 3. Color tokens
Final brand values must be sampled from the logo and reviewed against contrast requirements. Until then, use semantic token names rather than pretending hex values are approved:
- `color.brand.primary`
- `color.brand.secondary`
- `color.brand.accent`
- `color.text.primary`
- `color.text.secondary`
- `color.surface.page`
- `color.surface.card`
- `color.border.default`
- `color.action.primary`
- `color.action.primary.hover`
- `color.focus.ring`
- `color.status.success`
- `color.status.warning`
- `color.status.danger`
- `color.status.info`

Requirements:
- Body text and interactive controls meet WCAG 2.2 AA contrast.
- Do not rely on color alone to communicate status.
- Use status icon/text alongside color.
- Disabled controls remain legible.
- Focus indicators are clearly visible against adjacent surfaces.

## 4. Spacing, sizing and shape
Use a consistent 4 px base scale. Suggested tokens:
- `space.1` = 4 px
- `space.2` = 8 px
- `space.3` = 12 px
- `space.4` = 16 px
- `space.5` = 20 px
- `space.6` = 24 px
- `space.8` = 32 px
- `space.10` = 40 px
- `space.12` = 48 px
- `space.16` = 64 px
- `space.20` = 80 px

Use a readable content width, consistent section spacing, and a small set of radii:
- `radius.sm`: 4–6 px
- `radius.md`: 8–12 px
- `radius.lg`: 16 px
- `radius.pill`: for badges or selected compact controls only

Shadows should be subtle and reserved for meaningful elevation such as menus or dialogs. Do not use shadow as the only way to communicate grouping.

## 5. Layout and breakpoints
Use content-first responsive layouts and avoid fixed-width pages. Proposed breakpoints (implementation may adapt to framework conventions):
- Small: under 640 px
- Medium: 640–1023 px
- Large: 1024–1279 px
- Wide: 1280 px and above

Rules:
- Public pages: single column on small screens; expand to two/three-column grids only when content supports it.
- Course cards should have consistent information order and action placement.
- Admin tables must have a mobile strategy (responsive columns, stacked record view or deliberate horizontal scrolling with cues).
- Keep primary form actions visible and reachable without awkward scrolling.
- Ensure sticky navigation does not obscure focus targets or anchored content.

## 6. Navigation
Public navigation includes Home, Courses, About, Careers, Contact and a prominent Apply action. Language selection is visible and keyboard accessible. On mobile, use a clear menu with accessible expanded/collapsed state. Preserve the selected language across routes and visits.

Admin navigation is separate from public navigation. Show only actions the current role may access, while still enforcing all permissions server-side. Identify the current section and provide clear page titles and breadcrumbs where helpful.

Both launch languages use LTR layouts. Avoid hard-coding directional assumptions into reusable components so future RTL support is possible; RTL is not part of launch scope unless separately approved.

## 7. Buttons and links
- Primary button: one clear main action per region, such as Apply.
- Secondary button: lower-priority action.
- Tertiary/text link: navigation or low-emphasis action.
- Destructive button: explicit label and confirmation for consequential changes.
- Loading state: show progress and prevent accidental duplicate submission.
- Disabled state: explain the condition where useful; never use disabled styling for an action that should be available.
- Links must look and behave like links, have descriptive labels, and show focus state.
- Touch targets should meet WCAG 2.2 AA target-size requirements or the applicable spacing exception.

## 8. Forms
- Every field has a persistent visible label; placeholders are examples, not substitutes for labels.
- Mark required fields clearly and explain optional fields.
- Use appropriate input types and autocomplete.
- Validate on blur/submit without repeatedly interrupting users.
- Display inline error text associated with the field and an error summary for submit failures.
- Do not erase entered data on validation/server failure when safe.
- Use clear consent/privacy copy where needed; do not preselect nonessential consent.
- Confirmation must distinguish “draft saved” from “application submitted.”
- Keep application forms broken into logical groups only when this reduces cognitive load.

## 9. Status patterns
Statuses always include text; color/icon is supplementary:
- Applications Open
- Coming Soon
- Currently Unavailable
- Fully Booked
- Under Review
- Accepted
- Rejected
- Request More Information
- Pending
- Verified
- Rejected / Needs Review

Use the same status wording in public pages, admin tables, detail pages, emails and filters. Do not use ambiguous terms like “Done” where a precise state exists.

## 10. Cards, tables and feedback
- Course card: title, short approved summary, category, confirmed location/fee/duration where available, intake status and clear action.
- Admin record row/card: reference, applicant, course/intake, status, submitted date, assigned reviewer if applicable, and permitted actions.
- Empty state: explain why there are no records and the next useful action. Never insert fake records to make a screen look populated.
- Success state: say what was saved/submitted and what happens next.
- Error state: plain language, next step, retry if safe, and support reference when useful.
- Loading state: stable skeletons or progress indication; avoid layout shifts.
- Dialogs: use for focused decisions; include clear title, consequence, cancel path and keyboard management.
- Toasts: transient low-risk confirmations only; do not use them as the sole presentation of critical errors.

## 11. Imagery and content
Use professional heavy-machinery imagery with appropriate licensing until approved academy photography is available. Avoid images that imply equipment, facilities, instructors, partnerships or accreditations the academy does not actually have. Use descriptive alt text in Somali and English; decorative images use empty alt text where appropriate. Optimize image dimensions and formats.

Do not publish unverified testimonials, partner logos, graduate stories, statistics, claims of accreditation, contact details, course facts or prices.

## 12. Accessibility
Target WCAG 2.2 AA:
- Semantic landmarks and heading hierarchy.
- Keyboard-operable navigation, dialogs, filters and controls.
- Visible focus and logical focus order.
- Accessible names, roles, states and error associations.
- Sufficient text and non-text contrast.
- Captions/transcripts for meaningful media.
- Reduced-motion preference respected.
- No status communicated by color alone.
- Test zoom/reflow and mobile screen-reader behavior.
- Somali and English content reviewed for readability and correct language metadata.

## 13. Motion
Use motion only to clarify state or hierarchy. Keep transitions short and subtle; avoid parallax, autoplay motion and heavy animation that harms performance. Respect reduced-motion settings. Form submission and loading feedback must not rely only on animation.

## 14. Localization
- Use a persistent, visible Somali/English selector.
- Localize navigation, validation, emails, status labels, empty/error/success states and metadata.
- Keep content structurally equivalent in both languages.
- Flag missing translations in admin and prevent blank localized sections from publishing.
- Format dates and numbers consistently for the chosen language while fees remain explicitly denominated in USD.
- Both launch languages are LTR; future RTL support should not require rewriting every component.

## 15. Design QA checklist
- Logo colors sampled and contrast checked.
- Typography loads reliably with fallback fonts.
- All key screens checked at mobile, tablet and desktop widths.
- Keyboard-only navigation and visible focus verified.
- Somali and English content reviewed.
- Forms tested for invalid, loading, success, duplicate and network-failure states.
- Statuses remain understandable without color.
- No fake production content.
- Images are licensed, optimized and accessible.
- Slow mobile connection remains usable.
