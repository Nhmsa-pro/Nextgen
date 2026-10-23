# NHMSA Environments and Deployment

## Overview

This document defines the operating model for a safe and reviewable deployment of the NHMSA project. It establishes a structure for local development, staged validation, and production deployment without making irreversible infrastructure decisions without approval.

## Environments

### Local development

Purpose:
- build and validate the application locally
- validate form and UI behavior without exposing live data

Requirements:
- local `.env.local` values only
- local-only example data or system placeholder content
- independent mock email or no-op email provider when needed

### Preview / staging

Purpose:
- validate changes before production release
- test migrations, permissions, and workflows on non-production data

Requirements:
- separate Supabase project or separate schema environment
- restricted access to staff-only routes
- no production applicant data
- controlled email testing

### Production

Purpose:
- public website and live admissions processing

Requirements:
- approved environment variables only
- verified credentials and provider configuration
- production-ready backups and restore procedure
- explicit owner approval before each release

## Environment variables

Required categories:
- app base URL
- Supabase public and service configuration
- email provider API keys
- feature flags and environment indicators

Sensitive values must not be committed to the repo.

## Deployment model

### Hosting

- Proposed hosting: Vercel for the Next.js app
- Proposed backend data services: Supabase

### Release process

1. Validate changes locally.
2. Deploy to preview/staging.
3. Run smoke tests against the staging environment.
4. Verify database migration, auth, and email handling.
5. Confirm owner approval.
6. Deploy to production.

## Backup and restore

- Backup the database regularly and store recovery information separately.
- Validate restore procedures before launch.
- Test rollback procedures for application and database migrations.

## Migration promotion procedure

- Apply migration changes to a staging environment first.
- Confirm authorization and permission behavior.
- Validate data integrity and application flows.
- Promote only after sign-off.

## Rollback procedure

- Keep the previous production build and config available.
- Document how to roll back both application code and database changes when needed.
- Maintain a clear escalation path for production incidents.

## Security expectations

- Production secrets remain out of source control.
- Preview and staging applications must be protected from public access as needed.
- Protected routes and admin views must require verified staff access.
- Email providers and data sources must be approved before use in production.
