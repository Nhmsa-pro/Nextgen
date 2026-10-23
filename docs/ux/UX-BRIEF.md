# NHMSA Website — UX Brief

**Project:** NEXTGEN Heavy Machinery & Skills Academy (NHMSA Somalia)  
**Status:** Draft for owner review  
**Scope:** Public website and essential admissions/admin workflows  
**Languages:** Somali and English  
**Implementation status:** Requirements only; no application source code or database changes are included in this document.

## 1. Product purpose
Help prospective students discover practical training, understand course requirements and fees, and submit an application. Give authorized academy staff a dependable way to manage courses, intakes, applications, admissions decisions, waitlists, and manually recorded payment verification.

## 2. Primary users
- **Prospective student:** explores courses and applies without creating an account.
- **Company or employer:** learns about the academy and available training; contacts the academy through confirmed public contact channels.
- **Admissions Staff:** reviews applications, requests information, records decisions, manages waitlists and permitted payment records.
- **Owner/Admin:** manages staff access, roles, courses, intakes, published content, security-sensitive settings, and audit/recovery controls.

## 3. Product principles
1. Mobile-first, lightweight, and usable on slower connections.
2. Clear next steps and plain-language feedback.
3. Somali and English are first-class experiences; preserve the selected language across navigation and return visits.
4. No fabricated academy facts, testimonials, partners, accreditation, statistics, contact details, course prices, or locations.
5. No student accounts in v1.
6. No online payment processing or money transfer in v1.
7. The UI must never present sample/demo content as real production data.
8. Enforce authorization on the server/database as well as in the interface.
9. Preserve user-entered form data when safe and explain clearly when an application has—or has not—been submitted.
10. No silent deletion or unlogged high-impact administrative changes.

## 4. Public information architecture
- Home
- Courses
  - Course catalogue
  - Course detail
  - Intake/application availability
- About the Academy
- Careers (basic information only; not a job portal)
- Contact
- Apply
- Application confirmation
- Existing-application enquiry
- Privacy notice and other approved legal/policy pages
- Language selector: Somali / English

## 5. Course catalogue
Initial categories:
1. Excavator Operator
2. Bulldozer & Grader Operator
3. Wheel Loader & Forklift Operator
4. Mobile & Tower Crane Operator
5. Heavy Truck & Trailer Driving
6. Plumbing & Welding
7. Heavy Equipment Mechanics

Catalogue supports search and filters for course name, category, availability, and location. Course pages should show confirmed course description, duration, requirements, certification information (if confirmed), fee in USD, training location, intake dates/deadlines, availability, and application CTA. Unconfirmed values must be clearly marked as editorial placeholders and must not be published as facts.

Intake statuses:
- **Applications Open:** application is available.
- **Coming Soon:** intake is announced but not open.
- **Currently Unavailable:** not accepting applications.
- **Fully Booked:** capacity reached; application is closed and a waitlist may be offered.

Capacity and status are staff-managed. A full intake must not accept new applications unless an authorized staff member deliberately reopens it.

## 6. Application experience
No student account is required. The initial application form collects:
- Full name
- Phone number
- Email address
- Age confirmation
- Course
- Preferred location
- Education level
- Relevant experience
- Additional notes

No uploads in the initial application form. Validate on client and server. Show inline feedback and an error summary; preserve entered information where safe. Use server-side duplicate detection, rate limits, a honeypot and appropriate bot protection. Add CAPTCHA only if evidence shows it is needed.

On successful server acceptance, create a secure application record and reference, show a confirmation page, send a confirmation email in the selected language where available, notify the academy, and make the record visible to authorized staff. A reference number is not a password and must not independently reveal private application details.

The confirmation page should show reference, course, intake, location, submission date, next steps, and a link back to courses. It must not claim submission succeeded until the server confirms it.

## 7. Admissions and applicant communications
Application statuses:
- Under Review
- Accepted
- Rejected
- Request More Information

Staff can request corrections or additional information and record the request in the application history. A rejection email includes the decision, an approved explanation where applicable, and verified contact details. Applicant contact-detail corrections require identity verification by authorized staff and an audit record.

Applicants can send an enquiry using their reference and contact information. Staff must verify identity before disclosing private information. Status updates are sent by email; record delivery success/failure and retry failures. If email fails, do not lose the application; alert staff if the failure persists.

A local draft may be retained on the device for up to seven days, with clear resume/discard controls and a warning that clearing browser data may remove it. A local draft is not a submitted application.

Age restrictions are configurable per course/intake once the academy confirms policy. Deadlines close at the configured local time. Authorized Owner/Admin can extend or reopen an intake with a reason and audit record. Missed payment deadlines flag the record and notify staff; no automatic withdrawal.

## 8. Waitlist
Waitlist fields: name, email, phone, course, location. Joining is not enrollment. Send a confirmation email and allow staff to contact the applicant when a place opens. Use earliest eligible entry first; staff exceptions require a recorded reason. Give the contacted applicant a 48-hour response window. Record acceptance/decline and continue through normal admissions/payment steps for accepted candidates.

## 9. Payment records — external/manual only
Payments happen outside the website in v1. Accepted applicants receive the fee and verified external payment instructions by email. Staff can record method, amount in USD, date, payment reference, optional securely stored evidence, and verification status:
- Pending
- Verified
- Rejected / Needs Review

Only authorized staff can verify or reject. The person who records a payment cannot verify their own entry. Decisions require a reason where rejected and are audit-logged. Rejected records can be corrected by creating a new record while preserving history. Refunds processed externally may be recorded with amount, date, reason, reference, and status; the system does not transfer money. A payment record alone does not automatically confirm enrollment.

## 10. Administration and permissions
Roles:
- **Owner/Admin:** full management, staff invitations/deactivation, role assignment, content publishing, security settings, and sensitive configuration.
- **Admissions Staff:** permitted application review, admissions decisions, waitlists, enrolment tasks, and allowed payment record actions; no security settings or staff-account administration.

Staff accounts are invite-only. Require MFA for both roles. When staff leave, Owner/Admin deactivates the account and revokes access promptly. Record security events, rate-limit repeated failed sign-ins, alert Owner/Admin to high-risk events, and audit important/destructive actions.

Application search: name, reference, phone, email. Filters: course, intake, location, status, date range. Include sorting and pagination. Authorized staff may export filtered CSV records; log exports and warn about personal data. Dashboard metrics: new applications, awaiting review, accepted awaiting payment verification, enrolled students, and waitlist entries. All figures must come from real data and link to permission-appropriate records.

## 11. Content management and media
Homepage sections: hero/primary CTA, verified credibility information, benefits, approved stats, about, course cards, training information, partners, reviews/graduate stories, final CTA, footer. Any statistic, testimonial, partner, accreditation or graduate claim must be confirmed before publication.

Homepage and course content support draft, preview and publish. Course edits remain drafts until Owner/Admin publishes; keep the previous published version live until then. Version history records who changed content and when; restoration is authorized and logged. Missing translations are flagged; public pages must not expose broken or empty content.

Media library supports approved images, previews, optimized files, and Somali/English alt text. Validate uploads. Use properly licensed professional heavy-machinery stock images initially; replace with authentic academy images when available.

## 12. Design, accessibility, performance
- Poppins for headings; Inter for body text, navigation, forms and admin labels.
- Responsive mobile, tablet and desktop layouts are equal priorities.
- WCAG 2.2 AA target: semantic structure, keyboard support, visible focus, sufficient contrast, accessible labels, error associations, and meaningful alt text.
- Optimize and lazy-load appropriate images; avoid unnecessary heavy motion or scripts.
- Keep forms short, clear, and resilient on slow mobile connections.
- Both launch languages are LTR; keep layout architecture ready for future RTL without claiming RTL is in launch scope.

## 13. Privacy, reliability and operations
Collect only necessary information. Essential cookies are default; obtain consent for non-essential analytics/marketing where required. Do not send personal information to analytics tools. Define retention and deletion rules with the academy and applicable legal advice. Provide authorized archival/deletion with audit history.

Use managed database backups, document restore steps, test restores periodically, and verify backup retention against the chosen provider plan. Keep staging separate from production. Test critical workflows before release. Errors should explain what happened, what the user can do, and whether data was saved; never expose secrets or internal diagnostics.

## 14. SEO and analytics
Provide localized metadata, canonical URLs, sitemap, and appropriate structured data. Only published pages should be indexable. Track privacy-conscious funnel events: course views, application starts, successful submissions, and conversion; operations metrics include application volume, review time, acceptance, payment verification and enrollment completion. Do not include personal data in event payloads.

## 15. Launch requirements
Before launch:
- Confirm all course facts, prices, dates, locations, age policies, contacts, payment instructions, and legal/privacy content.
- Complete Somali and English content and review both languages.
- Verify email sender/domain and delivery.
- Test permissions and MFA.
- Test application, duplicate handling, email failure, recovery, waitlist, payment verification, and audit history end to end.
- Confirm backups and a tested restore path.
- Review accessibility, responsive behavior and slow-connection performance.
- Approve production deployment and recovery plan.
- Obtain explicit Owner approval.

## 16. Governance and scope control
These documents define intended behavior, not proof of implementation. Do not create or modify database schemas, wire real payment processing, deploy, commit, or push until the owner approves the UX documents and separately authorizes implementation. Unknown facts stay marked as unresolved; do not invent them.
