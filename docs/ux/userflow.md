# NHMSA Website — User Flows

**Status:** Draft for owner review  
**Companion:** `UX-BRIEF.md`

## 1. Public visitor discovers a course
1. Visitor lands on Home in Somali or English.
2. Visitor chooses language; choice persists across navigation and return visits.
3. Visitor browses Courses or uses search/filter.
4. Visitor opens a course detail page.
5. Page presents only approved course facts, fee, location, requirements, duration, intake dates and status.
6. Visitor chooses the next action based on status:
   - Applications Open → Apply
   - Coming Soon → view expected opening information, if confirmed
   - Currently Unavailable → see unavailable message and other courses
   - Fully Booked → join waitlist if enabled
7. Visitor can return to catalogue without losing language choice.

## 2. Applicant submits an application
1. Applicant opens Apply from a course or intake.
2. System preselects the course/intake where applicable.
3. Applicant enters name, phone, email, age confirmation, course, location, education level, experience and notes.
4. Client validation shows inline errors and an error summary.
5. Server validates the payload, checks intake status/deadline/capacity, applies rate limits/bot protection, and checks likely duplicates.
6. If likely duplicate: explain the issue and provide a safe next step; do not expose another applicant’s information. Authorized staff can resolve legitimate exceptions.
7. If invalid or connection fails: preserve the draft where safe, explain that it has not been submitted unless server confirmation exists, and offer retry.
8. If accepted by the server: persist application, generate reference, add audit/event history, queue confirmation email and academy notification.
9. Show confirmation page with reference, course/intake, location, submission date and next steps.
10. If email delivery fails, keep the application, retry transient failures and alert staff if failure persists.

## 3. Applicant resumes a local draft
1. Applicant returns to the form on the same device.
2. If an unexpired draft exists (maximum seven days), show Resume draft and Discard draft.
3. Explain that drafts are device/browser-specific and may disappear if browser data is cleared.
4. Resuming fills the form locally.
5. Draft remains unsubmitted until the server confirms submission.
6. Successful submission clears the local draft.

## 4. Applicant asks about an existing application
1. Applicant opens Existing-application enquiry.
2. Applicant provides reference, contact information and message.
3. Server validates and rate-limits the enquiry.
4. Enquiry is routed to the authorized staff queue.
5. Staff verifies identity before sharing private details or correcting contact information.
6. Staff replies using verified contact information; action and relevant history are recorded.
7. Applicant receives only information they are authorized to access.

## 5. Admissions staff reviews an application
1. Staff signs in using an invited account and MFA.
2. System checks role and account status on the server.
3. Staff opens dashboard and selects a queue or searches by name/reference/phone/email.
4. Staff filters by course, intake, location, status or date range.
5. Staff opens the record and reviews submitted data and history.
6. Staff records internal timestamped notes where useful; notes are never visible to the applicant.
7. Staff selects one action:
   - Under Review
   - Request More Information
   - Accept
   - Reject
8. System validates role, records actor/time/reason where applicable, updates status and queues the appropriate email.
9. Email result is tracked; failure does not erase the decision and is surfaced for retry/follow-up.
10. If reviewer is unavailable/deactivated, the record returns to the shared queue, is flagged for reassignment, and Owner/Admin is notified.

## 6. Request more information or correction
1. Authorized staff selects Request More Information.
2. Staff enters a clear request and deadline if policy supports one.
3. System records the request and sends an email.
4. Applicant replies through the defined secure enquiry channel; do not assume an unauthenticated email reply can safely overwrite application data.
5. Staff verifies identity, reviews the response and updates the record.
6. Request, response and staff action remain in the history.

## 7. Intake closes or fills
1. Intake reaches its configured deadline or capacity.
2. System changes its public status according to the configured policy.
3. New applications are blocked server-side.
4. Public page explains closure and offers waitlist where enabled.
5. Owner/Admin may extend/reopen only with a reason; system records actor, time and reason.
6. A cancelled intake stops new applications, flags affected applicants and gives staff a task to notify them and offer alternatives. Records are not silently deleted or transferred.

## 8. Waitlist journey
1. Visitor opens a Fully Booked course/intake.
2. If waitlist is enabled, visitor submits name, email, phone, course and location.
3. System confirms that joining is not enrollment and sends confirmation email.
4. System records entry time and eligibility/order.
5. When a place opens, staff contacts the earliest eligible entry first. Any exception requires a recorded reason.
6. Contacted applicant receives a 48-hour response window.
7. If accepted: record response, notify staff, continue through normal admissions/payment process.
8. If declined or no response within policy window: record outcome and close entry according to approved policy; staff proceeds to the next eligible entry.
9. Do not automatically enroll or charge anyone.

## 9. Accepted applicant and external payment
1. Staff accepts the applicant.
2. System sends acceptance email with confirmed fee, verified external payment instructions and next steps.
3. Applicant pays outside the website using an academy-approved channel.
4. Staff records method, USD amount, date, reference and optional secure evidence.
5. Record begins Pending.
6. An authorized second staff member verifies or rejects it; the person who recorded it cannot verify their own entry.
7. Verification/rejection requires an audit record; rejection includes a reason and triggers staff follow-up.
8. Enrollment is updated only through the approved enrollment workflow—not merely because a payment record exists.
9. Refunds are processed externally; staff may record the details without transferring money through the website.

## 10. Owner/Admin publishes content
1. Owner/Admin signs in with MFA.
2. Owner/Admin creates or edits a draft course, intake or homepage content.
3. System validates required fields and flags missing Somali/English translation.
4. Preview displays the draft without making it public.
5. Owner/Admin publishes.
6. New version becomes public; previous published version remains available in version history.
7. System records actor/time and supports authorized, audited restoration.
8. No unverified stats, testimonials, partners, contact details or accreditation claims can be published as facts.

## 11. Owner/Admin manages staff access
1. Owner/Admin invites a staff member and assigns Owner/Admin or Admissions Staff role.
2. Staff activates account and configures MFA.
3. Every protected action is authorized server-side.
4. If staff leaves or access must be revoked, Owner/Admin deactivates account and revokes sessions/access promptly.
5. Security-sensitive events are logged; high-risk events alert Owner/Admin.
6. Deactivated reviewers’ assigned applications are flagged and returned to the shared queue.

## 12. Export operational data
1. Authorized staff applies filters to the application list.
2. Staff chooses CSV export.
3. System confirms the export may contain personal data.
4. Server checks permission and generates only the permitted filtered fields.
5. Export action is audit-logged with actor, time and filter context.
6. Unauthorized users cannot export by calling an endpoint directly.

## 13. Failure and recovery states
- **Network failure before server confirmation:** keep recoverable input where safe; clearly say submission is not confirmed; allow retry.
- **Email provider unavailable:** persist application/decision, queue retry, show staff delivery status and alert on persistent failure.
- **Unauthorized action:** block on server, show plain-language message, record security event as appropriate.
- **Unexpected server error:** show a safe message and support reference; do not expose stack traces/secrets.
- **Stale or full intake:** reject server-side and show current availability plus waitlist/other-course route.
- **Missing translation/content:** flag in admin and prevent empty/broken public sections from publishing.
