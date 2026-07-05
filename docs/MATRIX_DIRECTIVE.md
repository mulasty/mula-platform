# Matrix Directive — Mula Platform Operating Rules

## Core Rules

### 1. Verify Build After Every Task
After any code change, run `npx turbo build` to confirm all 8 apps compile successfully with zero TypeScript errors. A broken build is a blocker — fix it before proceeding to the next task.

### 2. Commit + Push + Deploy After Every Sprint
At the end of each sprint, all changes must be committed with a meaningful message, pushed to the remote repository, and deployed to production via Vercel. No sprint is complete until changes are live.

### 3. Log Every Decision
Every architectural choice, tradeoff, or strategic decision must be recorded in `decisions/decisions_log.md` with the following format:

```
## YYYY-MM-DD: Decision Title
- **Context**: What prompted this decision
- **Options considered**: Alternatives evaluated
- **Decision**: What was chosen and why
- **Consequences**: What this enables or prevents
```

### 4. Consult North Star Before Every Major Change
Before introducing a new dependency, starting a new app, or making a significant architectural change, review `docs/NORTH_STAR.md` and confirm alignment with:
- Ecosystem over Silos (does it integrate with existing components?)
- Premium Quality Always (does it meet enterprise-grade standards?)
- Polish Market, Global Standards (is the tech choice world-class?)

### 5. Update Technical Debt Every Sprint
At sprint close, review `docs/TECHNICAL_DEBT_REGISTER.md`:
- Close items that have been resolved
- Add new items discovered during the sprint
- Re-prioritize based on current project needs
- Assign resolved items to the sprint in which they were completed

### 6. Product Health Dashboard Is Living
Update `docs/PRODUCT_HEALTH_DASHBOARD.md` whenever a metric changes — new app deployed, build status shifts, SSL certificate activated, or Lighthouse score improves. The dashboard must reflect reality at all times.

### 7. QA Gate Before Deploy
No deployment proceeds without passing the full QA Acceptance checklist in `docs/QA_ACCEPTANCE.md`. Treat pre-deployment and post-deployment checklists as mandatory gates, not aspirational goals.
