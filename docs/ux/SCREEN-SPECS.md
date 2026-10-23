# NHMSA Website — Screen Specifications

**Status:** Draft for owner review  
**Reference principle:** Adapt useful navigation and interaction patterns from the reference course website; do not copy protected text, source code or imagery.  
**Companion documents:** `UX-BRIEF.md`, `userflow.md`, `DESIGN-SYSTEM.md`, `COMPONENTS.md`

## 1. Global requirements
- Somali and English are available from launch, with persistent selection.
- Poppins headings and Inter body/navigation/form/admin text.
- Mobile, tablet and desktop layouts are supported.
- WCAG 2.2 AA is the accessibility target.
- Use real data only. Do not fabricate academy facts, pricing, contacts, testimonials, partners, accreditation, stats, course details or dates.
- Every data-backed screen defines loading, empty, error and success states.
- Backend/database authorization is mandatory; hiding a button is not security.
- Public forms do not require student accounts.
- No online payment processing in v1.

## 2. Home page (`/` or localized equivalent)
**Purpose:** Explain the academy and route visitors to training courses or application.  
**Audience:** prospective students, companies and other visitors.

### Content order
1. Header with logo, navigation, language switcher and Apply CTA.
2. Hero with concise approved value proposition, primary Browse Courses/Apply CTA and approved licensed image.
3. Credibility/benefits section using only verified facts.
4. Key statistics only if confirmed.
5. About the academy.
6. Featured course cards.
7. Training approach or facilities information, only if verified.
8. Partners, testimonials and graduate stories only when approved and authentic.
9. Final CTA.
10. Footer with confirmed contact channels and legal/privacy links.

### Behavior
- Course cards link to details.
- Primary CTA goes to catalogue or application based on approved content.
- Language switcher updates localized content and persists.
- Hide optional sections if verified content is unavailable; do not render fake placeholders publicly.

### States and acceptance
- Loading: avoid a blank screen; show stable layout.
- Error: if dynamic content fails, show a safe message and working route to Courses where possible.
- Empty: no empty course grid; explain when courses are not published and provide Contact route if confirmed.
- Acceptance: all CTAs work; content is bilingual; no unverified claims; responsive and accessible.

## 3. Course catalogue (`/courses`)
**Purpose:** Help visitors compare training options and find an available intake.

### Layout
- Page heading and short approved introduction.
- Search field.
- Filters: category, availability and location.
- Results count and clear-filters action.
- Responsive course-card grid.
- Pagination or accessible load-more behavior if needed.

### Initial categories
- Excavator Operator
- Bulldozer & Grader Operator
- Wheel Loader & Forklift Operator
- Mobile & Tower Crane Operator
- Heavy Truck & Trailer Driving
- Plumbing & Welding
- Heavy Equipment Mechanics

### Behavior
- Search and filters combine.
- Clear filters restores the catalogue.
- Cards show approved title, summary, confirmed fee/duration/location where available, status and action.
- Availability is current server-backed data, not inferred from stale client state.

### States and acceptance
- Loading skeletons preserve layout.
- Empty results explain that no courses match and offer clear-filters.
- Load error explains and offers retry.
- No published courses: show an honest empty state.
- Keyboard and screen-reader users can search, filter and inspect results.

## 4. Course detail (`/courses/:slug`)
**Purpose:** Provide the facts needed to decide whether to apply.

### Content
- Course title/category/status.
- Approved summary and course description.
- Duration, fee in USD, location, entry requirements, certification information if confirmed.
- Intake dates, schedule, deadline and capacity/status where appropriate.
- What the course covers and next steps, only when supplied and approved.
- Related courses.
- Primary CTA determined by intake status.

### CTA rules
- Applications Open: Apply.
- Coming Soon: show confirmed opening information, if available; otherwise no invented date.
- Currently Unavailable: explain and link to other courses/contact if confirmed.
- Fully Booked: Join Waitlist only when enabled.

### Acceptance
- Course facts are editorially verified.
- Server blocks submission if intake closes or fills while page is open.
- Missing required public content prevents publication rather than showing blank sections.

## 5. Application form (`/apply` or course-specific route)
**Purpose:** Submit a valid application without requiring an account.

### Fields
- Full name (required)
- Phone number (required)
- Email address (required)
- Age confirmation (required; eligibility policy must be confirmed)
- Course (required)
- Preferred location (required when multiple locations exist)
- Education level (as defined by academy)
- Relevant experience
- Additional notes (optional)

No uploads in v1.

### Layout and behavior
- Show selected course/intake at top when entered from a course page.
- Explain why information is requested and link to privacy notice.
- Persistent field labels, clear required/optional state and appropriate mobile keyboard.
- Inline validation plus summary on submit.
- Server validates all values, current intake status, deadline, capacity and duplicate patterns.
- Submit action shows progress and prevents accidental double-clicks.
- Device-local draft up to seven days is optional; provide Resume/Discard and warn it is not submitted.

### States
- Invalid: focus error summary and associate each message with field.
- Duplicate suspected: safe explanation without exposing another person's record.
- Network failure: preserve input where safe; clearly say submission is not confirmed; offer retry.
- Server accepted: navigate to confirmation with reference.
- Intake unavailable: block submission and explain current state; offer waitlist if enabled.

### Acceptance
- Submission is only reported as successful after server confirmation.
- No sensitive details are placed in a public URL.
- Rate limits and bot protection are server-side.

## 6. Application confirmation (`/application/confirmation`)
**Purpose:** Confirm server-accepted submission and explain next steps.

### Content
- Clear application received heading.
- Reference number.
- Course and intake.
- Location.
- Submission date.
- Review/next-step expectations approved by academy.
- Confirmation email status wording only if accurate.
- Return to Courses link.

### Security and acceptance
- Do not expose a private application record merely from a guessable reference.
- Confirmation route should not contain unnecessary personal data.
- Refresh behavior must not create another application.
- If the server has not confirmed persistence, show a recovery/error screen instead of a success state.

## 7. Waitlist form (`/courses/:slug/waitlist`)
**Purpose:** Record interest when an intake is full and waitlist is enabled.

### Fields
Name, email, phone, course and location.

### Content/behavior
- State clearly that waitlist entry is not enrollment and does not guarantee a place.
- Confirm submission and send email.
- Use server-side duplicate/rate-limit protection.
- Store entry time and eligibility/order.
- Staff offers a place to earliest eligible entry first; exceptions require a reason. Applicant has 48 hours to respond under the agreed policy.

### States
- Waitlist disabled: do not show a dead CTA; explain intake is full and show other courses.
- Success: confirmation of waitlist entry.
- Error: preserve safe input and allow retry.

## 8. Existing-application enquiry (`/application-enquiry`)
**Purpose:** Let applicants contact the academy about an existing application without creating an account.

### Fields
Reference, contact information, message.

### Behavior
- Validate and rate-limit.
- Route to authorized staff queue.
- Tell applicants not to submit passwords or unnecessary sensitive information.
- Staff verifies identity before revealing application status or changing contact information.
- Record enquiry and response in the appropriate history.

## 9. Contact (`/contact`)
**Purpose:** Provide approved contact channels and accept general enquiries.

### Content
- Verified phone, email, WhatsApp and address, only if provided by academy.
- Contact form: name, email, subject, message.
- Expected response guidance only if approved.
- Basic location/map embed only when a real location is confirmed.

### Behavior and states
- Server-side validation and spam protection.
- Clear success confirmation and safe retry.
- If contacts are not confirmed, keep the page unpublished or show only approved channels; never invent a number/address.

## 10. About (`/about`)
**Purpose:** Explain the academy's mission, approach and verified background.

### Content
- Approved mission/overview.
- Training approach and facilities only when confirmed.
- Leadership/team only with approved names and consent.
- Partner/accreditation claims only after verification.
- CTA to Courses.

### Acceptance
No invented founding date, scale, accreditation, equipment, facilities or partnership.

## 11. Careers (`/careers`)
**Purpose:** Basic information about careers or employment opportunities at the academy.

### Scope
- Short approved introduction.
- Current opportunity/contact information only if confirmed.
- No full applicant/job portal in v1.

### Empty state
If there are no current openings, state that clearly and provide an approved contact route if available.

## 12. Admin sign-in and account security (`/admin/login`)
**Audience:** invited staff only.

### Behavior
- No public self-registration.
- Secure sign-in and MFA required for Owner/Admin and Admissions Staff.
- Rate-limit repeated failures and log security events.
- Generic safe errors that do not reveal whether a particular account exists.
- Recovery only through Owner/Admin-approved secure process.

### Acceptance
Account status and role are checked server-side. Deactivated staff cannot access protected data even with an old session.

## 13. Admin dashboard (`/admin`)
**Purpose:** Surface actionable admissions operations.

### Metrics
- New applications.
- Awaiting review.
- Accepted awaiting payment verification.
- Enrolled students.
- Waitlist entries.

### Behavior
- Metrics come from real database records.
- Each metric links to a permission-appropriate filtered list.
- No demo values.
- Show loading, empty, partial failure and retry states.
- Navigation/actions are role-aware.

## 14. Applications list (`/admin/applications`)
**Purpose:** Find and triage applications efficiently.

### Controls
- Search by name, reference, phone or email.
- Filters: course, intake, location, status and date range.
- Sort and paginate.
- CSV export for authorized staff only.

### List fields
Reference, applicant name, course/intake, location, status, submission date and assigned reviewer when relevant.

### Behavior
- Server-side permission and query validation.
- Mobile-friendly stacked view or deliberate horizontal scrolling with clear cues.
- Export warns about personal data and is audit-logged.
- Empty state explains how to change filters or what action to take.

## 15. Application detail (`/admin/applications/:id`)
**Purpose:** Review and manage one application.

### Sections
- Applicant details.
- Course/intake and submission data.
- Current status.
- Timestamped history and email delivery status.
- Internal notes.
- Reviewer assignment where permitted.
- Status/action panel.

### Actions
Under Review, Request More Information, Accept, Reject, plus approved correction/assignment actions.

### Rules
- Enforce permissions on the server.
- Rejection reason captured according to policy.
- Internal notes are never applicant-visible and cannot be silently edited/deleted.
- Contact changes require identity verification and audit trail.
- Every consequential action records actor/time and reason where appropriate.
- Email failure does not roll back the decision; it triggers retry/follow-up.

## 16. Waitlist management (`/admin/waitlist`)
**Purpose:** Track entries and offer places consistently.

### Content
Course/intake, entry time, eligibility/order, contact attempts, response deadline and outcome.

### Behavior
- Earliest eligible first.
- Any order exception requires a recorded reason.
- 48-hour response window is tracked.
- Accepted waitlist applicants enter the normal admissions process; no automatic enrollment or payment.
- If contact fails, record attempts and follow approved policy.

## 17. Payment records and verification (`/admin/payments`)
**Purpose:** Track externally made payments and control verification.

### Record fields
Method, USD amount, date, payment reference, optional securely stored evidence, recorder and status.

### Statuses
Pending, Verified, Rejected / Needs Review.

### Behavior
- Recording and verifying are separate permissions/actions.
- The recorder cannot verify their own entry.
- Rejection requires a reason and preserves history.
- External refunds may be recorded but not executed by the website.
- Enrollment is not automatically confirmed from the existence of a payment record.

### Acceptance
No online checkout or payment transfer in v1. Dashboard totals reflect only staff-recorded data and are clearly labelled accordingly.

## 18. Course and intake management (`/admin/courses`)
**Audience:** authorized content managers; exact role permissions to be enforced server-side.

### Behavior
- Create/edit course and intake drafts.
- Maintain Somali and English versions.
- Configure dates, deadline, location, fee in USD, capacity and status.
- Preview before publish.
- Draft edits do not replace the current public version.
- Publish/restore actions are audited.
- Closing, filling or cancelling intake blocks new applications server-side and flags affected applicants.
- Cancellation does not delete records or silently transfer applicants.

## 19. Homepage/content management (`/admin/content`)
**Purpose:** Maintain localized homepage and approved public content.

### Behavior
- Draft, preview and publish.
- Missing translations flagged.
- Require review of claims, stats, testimonials, partners and contact details.
- Version history shows who changed content and when.
- Restore requires permission and is audited.
- Prevent publishing blank/broken public sections.

## 20. Staff management (`/admin/staff`)
**Owner/Admin only.**

### Behavior
- Invite-only staff accounts.
- Assign one of two roles: Owner/Admin or Admissions Staff.
- Require MFA.
- Deactivate staff and revoke access promptly.
- Flag records assigned to deactivated reviewers for reassignment.
- Log role changes, invitations, deactivation and recovery actions.
- Admissions Staff cannot manage staff accounts or security settings.

## 21. Media library (`/admin/media`)
**Purpose:** Maintain approved images and localized alt text.

### Behavior
- Upload validation and file-size/type limits.
- Preview image and store Somali/English alt text.
- Optimize media for mobile.
- Restrict access and safe file serving.
- Use licensed imagery; no image should imply unverified facilities or credentials.

## 22. Audit/security events (`/admin/audit`)
**Access:** Owner/Admin and specifically authorized roles only.

### Content
Actor, event, timestamp, target record, reason and outcome, with sensitive details restricted.

### Behavior
- Important actions are auditable and history is not silently altered.
- High-risk events notify Owner/Admin.
- Do not expose credentials, secrets or unnecessary personal data.
- Access and export actions are themselves logged as appropriate.

## 23. Privacy and legal pages
**Purpose:** Explain data use and policy in Somali and English.

### Requirements
- Academy-approved privacy notice, retention approach and contact details.
- Essential cookies default.
- Consent for non-essential analytics/marketing where required.
- No personal information sent to analytics.
- Do not publish legal claims until reviewed by the academy and suitable legal adviser.

## 24. Release acceptance checklist
- [ ] All public pages and essential admin workflows are implemented against approved specs.
- [ ] Somali and English content and email templates reviewed.
- [ ] Course facts, prices, dates, locations, contacts and policies verified.
- [ ] Forms tested for invalid, duplicate, success, network failure and server error.
- [ ] Email delivery/retry and staff notifications tested.
- [ ] Role boundaries tested at API/database level.
- [ ] MFA and deactivation/revocation tested.
- [ ] Waitlist ordering and 48-hour response policy tested.
- [ ] Payment recorder/verifier separation tested.
- [ ] Audit history, CSV export and privacy controls tested.
- [ ] Backup restore tested and deployment recovery plan approved.
- [ ] Accessibility and responsive behavior checked.
- [ ] Owner explicitly approves production launch.
