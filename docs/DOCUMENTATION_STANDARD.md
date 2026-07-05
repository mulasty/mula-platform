# Mula Platform — Documentation-Driven Development Standard

**Version:** 1.0.0
**Last updated:** 2026-07-05
**Applies to:** All apps, packages, and infrastructure under `mula-platform/`

---

## 1. Core Principle

Every piece of work — component, utility, route, configuration, or architectural decision — MUST be documented as it is built. Documentation is not an afterthought; it is part of the definition of done.

---

## 2. Component Documentation (JSDoc)

### 2.1 Required JSDoc for All Components

Every React component exported from `apps/*/src/components/` and `packages/ui/src/components/` must carry a JSDoc block immediately above the export statement containing:

```typescript
/**
 * [Component Name] — [one-line summary of what it renders]
 *
 * @description [2-3 sentence explanation of purpose, behavior, and context within the page/section]
 * @example
 * <ComponentName prop1="value" prop2={someValue} />
 */
```

### 2.2 Required JSDoc for All Utility Functions

Every exported function in `src/lib/utils.ts` or equivalent must carry:

```typescript
/**
 * [FunctionName] — [one-line summary]
 *
 * @param {[Type]} paramName — [description]
 * @returns {[Type]} [description of return value]
 * @example
 * const result = functionName(arg1, arg2)
 */
```

### 2.3 Required JSDoc for All Types/Interfaces

Every exported interface or type alias in `src/lib/types.ts` must carry:

```typescript
/**
 * [InterfaceName] — [purpose]
 *
 * Represents [domain entity] used in [context: data layer / component props / API response].
 */
export interface InterfaceName { ... }
```

### 2.4 Required JSDoc for Data Exports

Every exported constant in `src/lib/data.ts` must carry:

```typescript
/**
 * [CONSTANT_NAME] — [what this dataset feeds]
 *
 * Used by: [list of consuming components/sections]
 * Source: [data source or "static"]
 * Update cadence: [on content change / per sprint / rarely]
 */
```

---

## 3. Section Documentation

### 3.1 Page-Level Sections

Every `<section>` rendered on a page must be documented in the consuming component's JSDoc with:

- **Section ID** (must match anchor `id` attribute)
- **Purpose** (what business message this section delivers)
- **Data dependency** (which export from `data.ts` feeds it)
- **Animation strategy** (Framer Motion variants, scroll triggers, etc.)
- **Responsive behavior** (how it collapses on mobile/tablet)

### 3.2 Section Registry

Each app must maintain a section registry comment in its `page.tsx`, listing every section in render order:

```typescript
/**
 * Page Structure (render order):
 * 1. #hero       — HeroSection       (data: COMPANY)
 * 2. #about      — AboutSection      (data: COMPANY)
 * 3. #pillars    — PillarsGrid       (data: PILLARS)
 * ...
 */
```

---

## 4. README Maintenance

### 4.1 Update Cadence

`README.md` at the monorepo root MUST be updated after every sprint. The update should reflect:

- New apps or packages added
- New shared components added to `@mula/ui`
- Infrastructure changes (new domains, DNS, CI/CD)
- New dependencies added at the root level
- Any breaking changes to the development workflow

### 4.2 README Content Requirements

The root `README.md` must always contain:

1. One-line project description (Polish + English acceptable)
2. Architecture diagram (ASCII tree of monorepo structure)
3. Tech stack table with versions
4. Hosting table (domain → port → status)
5. Shared UI component inventory (list of `@mula/ui` components)
6. Development quick-start commands
7. Deployment commands

### 4.3 App-Level READMEs

Each app under `apps/*` may optionally have its own `README.md`. If present, it must cover:

- App purpose and domain
- Route map (all routes/pages)
- Data dependencies
- Any app-specific configuration (environment variables, API endpoints)

---

## 5. Decision Logging

### 5.1 What Gets Logged

Every architectural, technology, or process decision that affects more than one app must be recorded in `decisions/decisions_log.md`. Entries must include:

| Field | Description |
|---|---|
| **Date** | ISO 8601 format (YYYY-MM-DD) |
| **Decision** | One-line summary of what was chosen |
| **Rationale** | Why this choice over alternatives (1-3 sentences) |
| **Alternatives Considered** | What else was evaluated and why it was rejected |
| **Scope** | Which apps/packages are affected |
| **Reversible?** | Yes/No with brief note on cost of reversal |

### 5.2 When to Log

- During sprint planning (before implementation)
- During implementation (if a new decision emerges)
- At sprint review (retrospective decisions)
- When an external constraint forces a change (platform deprecation, pricing change, compliance requirement)

---

## 6. Sprint Documentation

### 6.1 Sprint Reports

Every sprint must produce a report in `docs/SPRINT_XX_REPORT.md` containing:

1. Sprint goal (one sentence)
2. Completed tasks (checklist style)
3. Technical metrics (build time, bundle size, Lighthouse scores)
4. Blockers and issues (with resolution status)
5. Retrospective (what went well / what could improve)
6. Action items for next sprint
7. Sign-off (sprint owner, review date, status)

### 6.2 Project Status

`docs/PROJECT_STATUS.md` must be updated at the end of every sprint. It must contain:

- Current sprint number and branch
- What works (deployed apps, working features)
- What's missing (planned but not yet implemented)
- Known risks with severity and mitigation
- Next sprint priorities (ranked list)

---

## 7. Architecture Documentation

`docs/ARCHITECTURE.md` is the single source of truth for system design. It must be updated whenever:

- A new app or package is added to the monorepo
- The build pipeline changes
- DNS/hosting configuration changes
- The data flow pattern changes (e.g., CMS integration replaces static data)
- A new shared component is added to `@mula/ui`
- A new external dependency is introduced at the monorepo level

---

## 8. Playbook Documentation

`playbooks/` contains operational guides that are not architecture or sprint-specific:

- **COPYWRITING_GUIDE.md** — Brand voice, tone, headline/CTA formulas, banned words
- **ANALYTICS_PLAN.md** — Measurement strategy, events, KPIs, dashboard structure
- **SEO_PLAYBOOK.md** — (planned) SEO checklist, keyword strategy, structured data patterns
- **DEPLOYMENT_PLAYBOOK.md** — (planned) Step-by-step deployment procedures

Playbooks are living documents — updated as brand strategy and operational practices evolve.

---

## 9. Enforcement

### 9.1 Code Review Checklist

Every pull request must verify:

- [ ] New components have JSDoc comments
- [ ] New utility functions have JSDoc comments
- [ ] New types/interfaces have JSDoc comments
- [ ] New sections are listed in the section registry comment in `page.tsx`
- [ ] `decisions/decisions_log.md` updated if applicable
- [ ] `README.md` updated if structural changes
- [ ] `ARCHITECTURE.md` updated if infrastructure changes

### 9.2 Sprint Gate

A sprint is not complete until all documentation checkpoints in this standard are met for the work delivered in that sprint. The sprint report itself counts as a documentation checkpoint.
