# NHMSA Website — Component Inventory and Behavior

**Status:** Draft for owner review  
**Purpose:** Define reusable UI behavior before implementation. This file is a specification, not source code.

## 1. Shared component rules
- Use consistent design tokens from `DESIGN-SYSTEM.md`.
- Components must support Somali and English.
- Provide semantic HTML, keyboard support, accessible names and visible focus.
- Every async component must define loading, empty, error and success behavior where relevant.
- Hide unavailable actions in the UI where appropriate, but enforce authorization on the server.
- Never render fake/demo data as real production records.
- Avoid embedding business rules only in presentation components.

## 2. Public site components

### `SiteHeader`
**Contains:** logo, primary navigation, language selector, Apply CTA, mobile menu.  
**Behavior:** current route is identifiable; language choice persists; mobile menu exposes expanded state and is keyboard operable.  
**States:** default, mobile menu open, scrolled/sticky if used.  
**Accessibility:** descriptive logo link, semantic navigation, Escape closes menu, focus remains predictable.

### `LanguageSwitcher`
**Options:** Somali, English.  
**Behavior:** changes localized route/content, persists preference across navigation and return visits, falls back safely if a translation is missing.  
**Accessibility:** visible label or accessible name; selected language announced.

### `PrimaryCTA` / `SecondaryButton` / `TextLink`
**Behavior:** clear label, loading/disabled state when relevant, no nested interactive elements.  
**Rule:** labels describe the action; destructive actions use a separate explicit variant and confirmation flow.

### `HeroSection`
**Content:** approved heading, short description, primary CTA, optional secondary CTA, licensed/approved image.  
**Behavior:** responsive crop and layout; image does not obscure text or imply unverified facilities/equipment.

### `CourseSearchAndFilters`
**Filters:** query, category, availability, location.  
**Behavior:** filters can be combined and cleared; results update with clear count/empty state; filter state is usable on mobile.  
**Failure:** explain if results cannot load and offer retry; do not silently show stale results as current.

### `CourseCard`
**Displays:** course name, approved short description, category, confirmed fee/location/duration where available, intake status and action.  
**Behavior:** whole card is not a giant ambiguous click target if it contains multiple actions; status uses text plus optional icon/color.  
**Actions:** View course; Apply or Join waitlist according to availability.  
**Empty/unconfirmed facts:** omit or mark unpublished editorial fields; never invent values.

### `CourseDetailHeader`
**Displays:** title, category, status, concise approved summary and primary action.  
**Behavior:** CTA follows current server-controlled intake state. If an intake closes while a visitor is viewing the page, submission is still blocked server-side and a clear message is shown.

### `CourseFactList`
**Fields:** duration, fee in USD, location, entry requirements, certification (only if confirmed), schedule and intake dates.  
**Behavior:** render only approved facts; label missing content for editors rather than publishing fake values.

### `AvailabilityBadge`
**Values:** Applications Open, Coming Soon, Currently Unavailable, Fully Booked.  
**Behavior:** same text everywhere; never rely on color alone. Do not infer availability from a stale client cache.

### `TestimonialCard` / `PartnerLogo` / `StatBlock`
**Behavior:** only render approved and verified content with appropriate consent/rights. Hide empty or unverified sections; never fabricate testimonials, logos or statistics.

### `ContactChannels`
**Channels:** phone, email, WhatsApp, address, contact form, only when confirmed by academy.  
**Behavior:** use correct link schemes and accessible labels; do not invent contact details.

### `ContactForm`
**Fields:** name, email, subject, message.  
**Behavior:** client/server validation, rate limiting, success confirmation and safe failure recovery; send notification to a configured verified academy destination.  
**Security:** protect against spam and injection; do not expose recipient secrets.

### `ApplicationForm`
**Fields:** full name, phone, email, age confirmation, course, location, education level, relevant experience, notes. No file uploads in v1.  
**Behavior:** validate on client and server; show inline errors plus summary; preserve safe input; prevent accidental duplicate submits; enforce current intake state and deadline server-side.  
**Draft:** optional device-local draft up to seven days, explicit resume/discard, clear warning that it is not submitted.  
**Success:** only after server confirms persistence, show application reference and next steps.  
**Failure:** explain whether submission is confirmed; allow safe retry and use server duplicate protection.

### `FormField` / `FieldError` / `ErrorSummary`
**Behavior:** persistent label, required/optional indicator, helper text, input-associated error, summary links to invalid fields.  
**Accessibility:** `aria-describedby`/equivalent associations; focus summary after failed submit where appropriate.

### `ApplicationConfirmation`
**Displays:** reference, course, intake, location, submission date, next steps and return-to-courses link.  
**Rule:** reference is not an authentication credential; never expose private application details through a guessable reference URL.

### `ExistingApplicationEnquiryForm`
**Fields:** reference, contact information, message.  
**Behavior:** rate-limited and securely routed to staff; staff verifies identity before disclosing or changing private information.

### `WaitlistForm`
**Fields:** name, email, phone, course, location.  
**Behavior:** confirm waitlist status, state that it is not enrollment, send confirmation email, prevent abuse and record timestamp/eligibility. Apply approved 48-hour response policy when a place is offered.

### `SiteFooter`
**Content:** approved contact details, navigation, language links, privacy/legal links and verified social channels if supplied.  
**Behavior:** no placeholder contact details are publicly published.

## 3. Admin shell and data components

### `AdminLayout`
**Contains:** role-aware navigation, page title, account menu, session/security status where appropriate.  
**Behavior:** show only permitted navigation items; server remains authoritative for permissions. Separate from public navigation.

### `AdminDashboardMetric`
**Metrics:** new applications, awaiting review, accepted awaiting payment verification, enrolled students, waitlist entries.  
**Behavior:** source from real records, show time/filter context if applicable, link to a permitted filtered list, show loading/empty/error states. Never use hardcoded demo numbers.

### `ApplicationTable` / `ApplicationRecordCard`
**Fields:** reference, applicant name, course/intake, location, status, submitted date, assigned reviewer where applicable.  
**Behavior:** sorting, pagination, filters and mobile presentation; row actions depend on role and record state. Personal information is shown only to authorized users.

### `ApplicationFilters`
**Filters:** course, intake, location, status, date range; search by name/reference/phone/email.  
**Behavior:** filters can be cleared, persist only where useful, and are reflected in export context. Server applies access checks and filtering.

### `ApplicationDetail`
**Sections:** applicant details, course/intake, current status, timeline/history, internal notes, permitted actions, email delivery state.  
**Behavior:** internal notes are never applicant-visible; actions require permission and record actor/time. Do not silently overwrite history.

### `StatusSelector`
**Values:** Under Review, Accepted, Rejected, Request More Information.  
**Behavior:** show confirmation for consequential transitions, require rejection explanation where policy requires it, trigger email workflow, record audit history. Validate transition and role server-side.

### `InternalNotes`
**Behavior:** timestamped and actor-attributed; authorized staff can add notes; do not permit silent edit/delete. If correction is required, append a corrective note according to policy.

### `AssignmentControl`
**Behavior:** authorized users assign reviewer; if reviewer is deactivated/unavailable, flag for reassignment, return record to shared queue and notify Owner/Admin.

### `PaymentRecordForm`
**Fields:** method, amount USD, date, reference, optional evidence, verification state.  
**Behavior:** create Pending record; do not allow recorder to verify their own record; only authorized verifier can verify/reject; record reason and audit event. Rejected corrections preserve original history.

### `PaymentVerificationPanel`
**Displays:** recorded payment details, reference/evidence, recorder, current status, permitted verification actions.  
**Behavior:** separate record and verify permissions; clear rejection reason; never imply an online transaction happened. External refunds may be recorded only, not executed.

### `WaitlistQueue`
**Displays:** course/intake, entry timestamp, eligibility/order, contact attempts and outcome.  
**Behavior:** earliest eligible first; staff exceptions require reason; track 48-hour response window; no automatic enrollment or payment.

### `CSVExportAction`
**Behavior:** available only to authorized staff; warns about personal data; exports only filtered/permitted fields; server enforces permission; audit actor/time/filter context.  
**Failure:** explain failure and allow retry without changing records.

### `AuditTimeline`
**Displays:** relevant actor, action, timestamp, reason and outcome.  
**Behavior:** append-only semantics for important changes; sensitive details restricted by role; do not expose security internals to public users.

### `EmptyState`
**Content:** concise explanation plus a useful next action when one exists.  
**Rule:** never populate with fake records to make the UI appear active.

### `LoadingState` / `ErrorState` / `SuccessFeedback`
**Loading:** stable skeleton/progress and prevent duplicate action where necessary.  
**Error:** plain language, next step, safe retry and support reference if appropriate; no stack traces/secrets.  
**Success:** confirm the action and next step; do not use transient toast as the only evidence for critical operations.

### `ConfirmActionDialog`
**Use for:** delete/archive, reject, cancel intake, publish, restore version, revoke access, or other consequential changes.  
**Behavior:** explicit action name, consequence, cancel option, keyboard/focus management, and audit reason where required. Do not use confirmation dialogs for every harmless action.

### `ContentEditor`
**Content:** course, intake and homepage content in Somali and English.  
**Behavior:** draft/preview/publish; flag missing translation; validate required fields; keep current published version live until publication; maintain version history and audited restoration.

### `MediaLibrary`
**Behavior:** approved uploads only; validate file type/size, optimize images, show preview and localized alt text; restrict access and prevent unsafe file serving.

### `StaffAccessManager`
**Access:** Owner/Admin only.  
**Behavior:** invite staff, assign roles, deactivate account, revoke access, manage recovery. Require MFA for both roles and audit sensitive changes.

## 4. Email templates and notifications
Localized templates should exist for:
- Application received
- Request more information
- Accepted
- Rejected
- Waitlist confirmation
- Waitlist place offered
- Waitlist outcome
- Payment instructions after acceptance
- Staff application notification
- Contact form notification
- Delivery failure/escalation for staff

Emails use a verified academy sender/domain and verified contact details. Delivery status is tracked. A failed email never erases the underlying record.

## 5. Component acceptance criteria
A component is ready for implementation review when:
- Somali and English states are defined.
- Keyboard and screen-reader behavior is specified.
- Loading, empty, error and success states are defined where relevant.
- Permission boundaries are clear.
- Responsive behavior is described.
- Data is clearly identified as confirmed, optional or unresolved.
- No fake content or client-only security rule is required.
- Critical behavior has a testable acceptance criterion.
