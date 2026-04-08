# CLAUDE.md — Impulse English Academy Website

---

## Project Overview

This is the **Impulse English Academy** website project — a React + TypeScript + Vite site deployed on Vercel. All visible content is written in **Peninsular Spanish (Spain)**.

The project contains:
- A full website codebase (React/TS/Vite) in `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`
- A dedicated SEO optimisation system in `March-Impulse-Web-.../seo-system/`
- Root-level Claude Code tooling (agents, commands, skills) in `.claude/`

---

## Project Structure

```
/                                       ← Project root (this file lives here)
├── CLAUDE.md                           ← This file — central documentation hub
├── .claude/                            ← Claude Code tooling (agents, commands, skills)
│   ├── agents/                         ← 6 development agents
│   ├── commands/                       ← Slash commands (ultra-think)
│   ├── skills/                         ← 4 development skills
│   └── TEMPLATE-README.md             ← Reproducibility guide for this tooling setup
│
├── March-Impulse-Web-.../              ← Website codebase
│   ├── src/                            ← Source code (React components, pages)
│   ├── components/                     ← Shared UI components
│   ├── pages/                          ← Page components
│   ├── data/                           ← Site data files
│   ├── assets/                         ← Static assets (images, fonts)
│   ├── public/                         ← Public static files
│   ├── seo-system/                     ← SEO optimisation engine (has its own CLAUDE.md)
│   │   └── files/CLAUDE.md            ← SEO system documentation — DO NOT DUPLICATE HERE
│   ├── .claude/                        ← Nested project tooling (settings, frontend-design skill)
│   ├── package.json                    ← Dependencies
│   ├── vite.config.ts                  ← Vite configuration
│   ├── tailwind.config.ts             ← Tailwind CSS configuration
│   ├── tsconfig.json                   ← TypeScript configuration
│   └── vercel.json                     ← Vercel deployment configuration
```

---

## Available Agents

| Agent | File | When to Use |
|-------|------|-------------|
| **Architect Review** | `.claude/agents/architect-review.md` | Review code for architectural consistency, SOLID principles, service boundaries, and design patterns |
| **Debugger** | `.claude/agents/debugger.md` | Diagnose bugs, analyze error logs/stack traces, identify root causes, fix memory leaks and race conditions |
| **AI Engineer** | `.claude/agents/ai-engineer.md` | Design AI systems, model selection, training pipelines, inference optimisation, and production deployment |
| **DevOps Troubleshooter** | `.claude/agents/devops-troubleshooter.md` | Production incident response, log analysis, deployment failures, container debugging, monitoring setup |
| **Architecture Modernizer** | `.claude/agents/architecture-modernizer.md` | Monolith decomposition, microservices design, event-driven architecture, API gateway patterns |
| **Unused Code Cleaner** | `.claude/agents/unused-code-cleaner.md` | Detect and safely remove dead code (unused imports, functions, classes) across multiple languages |

---

## Available Commands

| Command | File | How to Use |
|---------|------|------------|
| **Ultra Think** | `.claude/commands/ultra-think.md` | `/ultra-think [problem]` — Deep multi-dimensional analysis with structured recommendations |

---

## Available Skills

| Skill | Directory | When It Triggers |
|-------|-----------|-----------------|
| **SEO Optimizer** | `.claude/skills/seo-optimizer/` | Content optimisation, keyword research, technical SEO, meta tags, schema markup, Core Web Vitals |
| **Git Commit Helper** | `.claude/skills/git-commit-helper/` | Writing commit messages, analyzing staged changes, conventional commits format |
| **Skill Creator** | `.claude/skills/skill-creator/` | Creating new skills, running evaluations, benchmarking skill performance, optimising descriptions |
| **Systematic Debugging** | `.claude/skills/systematic-debugging/` | Any bug, test failure, or unexpected behaviour — enforces root cause investigation before fixes |
| **Taste** | `.claude/skills/taste/` | Design quality enforcement — anti-slop rules, style archetypes, premium craft standards. Used in SEO pipeline as Agent 06.5 |

### Nested Project Skills

| Skill | Directory | When It Triggers |
|-------|-----------|-----------------|
| **Frontend Design** | `March-Impulse-Web-.../.claude/skills/frontend-design/` | Building web components, pages, dashboards, React components, HTML/CSS layouts, UI design |

---

## Workflow Guide: Which Tool for Which Task

### Website Development
- **Building new pages/components** → Use `frontend-design` skill (auto-triggers)
- **Reviewing component architecture** → Spawn `architect-review` agent
- **Cleaning up after refactoring** → Spawn `unused-code-cleaner` agent
- **Debugging build/runtime issues** → Spawn `debugger` agent + `systematic-debugging` skill

### SEO & Content
- **Optimising page content for search** → `seo-optimizer` skill (auto-triggers)
- **Full SEO pipeline** → See `seo-system/files/CLAUDE.md` for the 10-agent pipeline
- **Schema markup** → `seo-optimizer` skill + SEO system's Schema Agent

### DevOps & Deployment
- **Vercel deployment issues** → Spawn `devops-troubleshooter` agent
- **Build pipeline failures** → Spawn `devops-troubleshooter` agent
- **Architecture decisions** → `/ultra-think [question]` for deep analysis

### Code Quality
- **Complex design decisions** → `/ultra-think [question]`
- **Commit messages** → `git-commit-helper` skill (auto-triggers on staging)
- **Creating new custom skills** → `skill-creator` skill

---

## Key Rules

### Language
- ALL visible content: **Peninsular Spanish (Spain)**
- Use vosotros forms, Spain-specific vocabulary
- Never use Latin American Spanish variants
- Code, file paths, schema property names, HTML tags: English

### Images
- ONLY use images from the project's `/assets/images/`
- Never use external, stock, or AI-generated images
- Always write alt text in Spanish

### FAQ Schema Rules (MANDATORY for all pages with FAQs)
- Always import `FAQItem` from `utils/schemaData.ts` — **never** define the interface locally
- Always type FAQ exports: `export const faqs: FAQItem[] = [...]`
- Always use `question` and `answer` keys — never `q`/`a` or other variants
- Always wire FAQs through `generateFAQSchema()` in the `.astro` file
- `generateFAQSchema()` includes runtime validation — build will fail on malformed FAQ data
- See `templates/` directory for starter files when creating new pages

### Backups
- Always back up files before editing
- SEO system auto-backs up to `/site/pages/backups/`

### SEO System
- The SEO system has its own comprehensive CLAUDE.md at `seo-system/files/CLAUDE.md`
- Do not duplicate SEO rules here — refer to that file
- The SEO pipeline has 10 custom agents and strict ordering rules

---

## Do Not Modify

These files belong to the nested project and should not be changed from the root level:
- `March-Impulse-Web-.../.claude/settings.json`
- `March-Impulse-Web-.../.claude/skills/frontend-design/SKILL.md`
- `March-Impulse-Web-.../seo-system/files/CLAUDE.md`
