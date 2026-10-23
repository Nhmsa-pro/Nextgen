# NHMSA Data Model

## Overview

This document captures the logical domain model required by the project and the UX specification. It is a design document, not a claim that a database has already been implemented.

## Domain entities

### Course

Represents a training offer available to the public.

Fields (logical):
- id
- slug
- title_en
- title_so
- summary_en
- summary_so
- description_en
- description_so
- category
- duration
- fee_usd
- location
- status
- published_at
- created_by
- updated_by

Constraints:
- Only published course records should appear in the public catalogue.
- Public-facing fields must be approved before publication.
- Price and entry requirements must be explicitly verified and not guessed.

### Intake

Represents an intake window for a course.

Fields:
- id
- course_id
- start_date
- application_deadline
- location
- capacity
- status
- waitlist_enabled
- created_at

Constraints:
- Public status must be server-backed.
- New applications must be blocked when the intake closes or fills.

### Applicant / Application

Represents a submitted application record.

Fields:
- id
- reference
- course_id
- intake_id
- applicant_name
- phone
- email
- age_confirmed
- education_level
- experience_summary
- notes
- status
- submitted_at
- created_by

Constraints:
- Reference values are unique and not credentials.
- Duplicate checks are server-side.
- Application data remains protected and access-controlled.

### Application History

Tracks operational events related to an application.

Fields:
- id
- application_id
- actor_id
- action
- reason
- note
- created_at

### Staff Profile

Represents authenticated staff users.

Fields:
- id
- email
- display_name
- role
- status
- mfa_enabled
- invited_at
- deactivated_at

Constraints:
- Invite-only access only.
- Role is enforced server-side.

### Reviewer Assignment

Tracks which staff member owns or reviews a record.

Fields:
- id
- application_id
- reviewer_id
- assigned_by
- assigned_at
- removed_at

### Payment Record

Tracks outside-website payments.

Fields:
- id
- application_id
- recorded_by
- method
- amount_usd
- payment_date
- external_reference
- status
- evidence_url
- verification_reason
- created_at

Constraints:
- Recording and verification are separate permissions.
- The recorder may not verify their own submission.

### Payment History

Tracks verification and rejection history.

Fields:
- id
- payment_id
- actor_id
- action
- reason
- created_at

### Waitlist Entry

Tracks waitlist interest when an intake is full.

Fields:
- id
- intake_id
- applicant_name
- email
- phone
- order_position
- status
- entry_time
- response_deadline
- outcome

Constraints:
- Not enrollment.
- Order depends on eligibility and policy.

### Email Event

Tracks transaction email lifecycle.

Fields:
- id
- application_id
- template_key
- recipient
- status
- provider_message_id
- attempts
- last_error
- created_at

### Content Version

Stores published and draft content versions.

Fields:
- id
- content_type
- locale
- draft_json
- published_json
- published_at
- version_number
- created_by

### Media Asset

Stores approved uploads and associated metadata.

Fields:
- id
- file_name
- storage_path
- alt_text_en
- alt_text_so
- mime_type
- uploaded_by
- created_at

### Audit Log

Contains critical record-keeping for sensitive actions.

Fields:
- id
- actor_id
- action
- entity_type
- entity_id
- reason
- metadata_json
- created_at

## Relationships

- Course has many Intakes
- Intake belongs to a Course
- Course has many Applications
- Application belongs to a Course and Intake
- Application has many ApplicationHistory rows
- Application has many PaymentRecord rows
- Intake has many WaitlistEntry rows
- Staff Profile has many Assignment and Audit records
- Content Version is linked to content domains and locale

## Status transitions

### Application status
- Draft (local only, if implemented client-side)
- Submitted
- Under Review
- Request More Information
- Accepted
- Rejected
- Enrolled

### Intake status
- Draft
- Published
- Open
- Closed
- Full
- Cancelled

### Payment status
- Pending
- Verified
- Rejected / Needs Review

### Waitlist status
- Active
- Contacted
- Accepted
- Declined
- Expired
- Closed

## Logical vs implemented schema

This document defines the logical model the product requires. It does not imply that all tables already exist or are implemented in the repository. Before production implementation, the live Supabase project and any existing migrations must be checked and aligned with this logical model.
