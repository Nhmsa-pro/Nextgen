# NHMSA System Architecture

## Purpose

This document describes the architecture for the NEXTGEN Heavy Machinery & Skills Academy (NHMSA Somalia) website and administrative system. It intentionally reflects the project requirements documented in `docs/ux/` and the implementation constraints from the Phase 3 planning material.

## Scope

The architecture covers the public website, admissions workflows, staff administration, content management, payments, waitlists, and operational reporting. It also documents the system responsibilities and deployment assumptions that will be refined during implementation.

## Core principles

- Bilingual public and administrative experiences in English and Somali.
- Public pages rely on approved, verified facts only.
- Authorization is enforced on the server and in the database; UI hiding is never security.
- Applicant forms are resilient to failure and safe to retry.
- All consequential administrative actions are logged and reviewable.
- Production data remains isolated from local and preview environments.

## System components

### 1. Public web application

The public web application is the browsing and application entry layer for prospects, companies, and general visitors.

Responsibilities:
- Home, About, Courses, Contact, Careers and legal pages
- Localized routing using a `[locale]` segment
- Search and filters over published course data
- Application submission and confirmation flows
- Waitlist entry flows when an intake is full
- Safe error and empty states

### 2. Administrative workspace

The admin workspace supports owner, admissions and operational staff workflows.

Responsibilities:
- Dashboard metrics and queue views
- Application intake review and assignment
- Admission decisions and communication workflows
- Payment recording and verification
- Waitlist coordination and escalation
- Bilingual content publishing controls
- Staff access management
- Audit and operational reporting

### 3. API and server workflows

Server-side logic manages validated business rules, data integrity checks, environment-specific behavior, and secure access enforcement.

Responsibilities:
- Form validation and duplicate prevention
- Role checks and permission enforcement
- Server-side status transitions
- Email event records and retries
- Secure file handling for approved evidence and media
- Audit creation and data-version protections

### 4. Persistence layer

Supabase PostgreSQL provides the persistence layer for structured records and relational rules.

Planned responsibilities:
- Courses and intakes
- Applications and application history
- Staff profiles and assignments
- Payment records and verification decisions
- Waitlist entries and response tracking
- Email event records and retry status
- Page and content version history
- Audit log data

### 5. Authentication and authorization layer

Supabase Auth is the proposed authentication provider for staff accounts. Server-side and database-side authorization must remain authoritative.

### 6. Storage and media layer

Supabase Storage handles restricted media and evidence files only when officially approved.

### 7. Notification layer

Transactional email will be integrated with a provider approved by the academy, with one-time failures tracked and retried without losing the underlying record.

### 8. Deployment environment

The project should support at least:
- local development
- preview/staging
- production

Each environment should have isolated credentials and independent verification and rollback procedures.

## Data flow

1. Public users browse localized public pages.
2. When an applicant submits data, the web app validates and forwards it to server logic.
3. Server rules verify status, duplicates, permissions, and policy constraints.
4. Database records are written only after validation.
5. The system emits email and audit events as appropriate.
6. Staff review, decision, payment verification, and waitlist workflows interact with the same canonical records.

## Security boundaries

- Public pages must never expose staff-only identifiers or internal statuses.
- Service-role and admin secrets remain server-side only.
- Storage and tables are restricted by database policies.
- Sensitive operations are logged with actor, time, reason, and target.
- Payment recording and payment verification remain separate actions.

## Hosting and deployment model

- Vercel is the proposed hosting platform for the Next.js app.
- Supabase provides the database, auth and storage backend.
- Environment variables differ by environment and must be managed through a secure secret mechanism.
- Deployment approvals require owner sign-off before production release.

## Current implementation status

This repository is not yet connected to a live Supabase project or a full Next.js implementation. The architecture documents and app shell in this repository are intended to establish a safe local foundation before production-specific decisions are locked in.
