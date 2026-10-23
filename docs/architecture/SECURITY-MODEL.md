# NHMSA Security Model

## Objective

Protect applicant data, staff workflows, financial records, and content management while maintaining a usable bilingual web experience.

## Core design principles

- Enforce the real authorization boundary on the server and in Supabase RLS.
- Treat the UI as presentation only.
- Isolate secret information from browser bundles.
- Preserve an immutable audit trail for sensitive actions.
- Separate duties between payment recording and payment verification.

## Roles and responsibilities

### Owner/Admin

- Full administrative access
- Invites and deactivates staff
- Assigns roles and security policy
- Publishes course and homepage content
- Oversees audit and security events
- Approves operational configuration and production readiness

### Admissions Staff

- Reviews applications and assignments
- Records admissions status and communication outcomes
- Records and verifies payments within role-appropriate policy
- Acts on waitlist records and operational coordination

## Authorization model

Use a clear permission model:

- Public website: anonymous read access only
- Admin pages: authenticated staff-only
- Record-level access: enforced by server logic and RLS policies
- Payment actions: separate permission checks for recording and verifying
- Sensitive records: restricted to role-appropriate viewers

## Server-side enforcement

Authorization controls must be implemented in the server and database layers, not only as hidden UI actions. This includes:

- route guards for protected admin pages
- server action validation
- resource ownership checks
- verification of staff status and role
- duplicate prevention and rate limiting

## Supabase RLS requirements

The project should explicitly define RLS policies for:
- applications
- payment records
- waitlist entries
- staff records
- content versions
- audit logs
- storage objects

Policies should enforce:
- role-specific access
- safe record filtering
- immutable or append-only history behavior
- no anonymous access to sensitive tables

## Multi-factor authentication

- MFA is required for Owner/Admin and Admissions Staff.
- Session validation must confirm active account status.
- Deactivated staff must not retain access through stale sessions.

## Secret handling

- Service-role keys and other sensitive credentials stay server-side only.
- Browser code must use only anonymous-safe configuration.
- Environment variables must be isolated by environment.

## Data protection requirements

- Public reference numbers must not reveal private applicant records.
- Sensitive applicant data must not appear in public URLs or error messages.
- CSV export must be permission-checked and audit-logged.
- Restricted media must only be downloadable by authorized staff.

## Audit and traceability

Sensitive actions must create a record with:
- actor
- timestamp
- target record
- action
- reason
- outcome

Examples:
- application status changes
- reviewer assignment and reassignment
- payment verification or rejection
- content publication or restoration
- staff role changes and deactivation

## Payment controls

The system must distinguish the following roles and actions:
- record payment
- verify payment
- reject payment
- audit payment decisions

The person recording a payment cannot be the same person verifying it.

## Risk considerations

- If a live Supabase project is unavailable, do not assume RLS or auth are configured.
- Do not expose stack traces or security details in public error messages.
- Do not rely on client-side permission checks for protected records.
