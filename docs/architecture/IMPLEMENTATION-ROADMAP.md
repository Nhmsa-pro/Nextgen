# NHMSA Implementation Roadmap

## Phase 1: Foundation and architecture readiness

Objective: establish a stable, reviewable technical foundation.

Deliverables:
- local project configuration
- app shell and route structure
- environment-variable placeholders
- basic architecture documentation
- test and build baseline

Acceptance criteria:
- TypeScript compiles.
- Tailwind is configured and functional.
- Application entry renders successfully.
- The repo does not contain fabrications or production secrets.

## Phase 2: Public website shell

Objective: create the bilingual website structure and content placeholders.

Includes:
- home page skeleton
- courses list and detail placeholders
- about, contact and careers routes
- localized content strategy
- accessible and responsive base styles

Acceptance criteria:
- routes are present and consistent with the UX docs
- placeholder content is clearly marked
- responsive layout works across core breakpoints

## Phase 3: Admissions workflows

Objective: build the submission and review stack.

Includes:
- application form UI and validation
- server-side validation and duplicate checks
- confirmation workflows
- admissions queue and review interfaces

Acceptance criteria:
- server-side rules protect the workflow
- statuses are recorded and auditable
- duplicate or invalid submissions are handled safely

## Phase 4: Payment, waitlist and content management

Objective: implement operational flows for finance, waitlists and content publishing.

Includes:
- payment record entry and verification
- waitlist entry tracking and response windows
- content management with versioning
- audit logging for operational actions

Acceptance criteria:
- payment recording and verification remain separate duties
- waitlist ordering and response policies are enforceable
- version history is maintained

## Phase 5: Security and release hardening

Objective: validate security, reliability and deployment readiness.

Includes:
- RLS review and policy validation
- MFA testing
- email delivery and retry validation
- accessibility testing and QA
- staged deployment and rollback verification

Acceptance criteria:
- security review is signed off
- all critical flows are tested
- production approval is documented

## Security gates

No milestone may proceed without:
- role and permission checks documented
- environment separation confirmed
- no secret leakage to client code
- no fabricated facts in public pages
- owner approval for production-specific changes

## Dependencies

- Academy fact validation
- logo and brand detail review
- verified domain and email provider setup
- live Supabase access and policy review
- release and rollback procedures before production launch
