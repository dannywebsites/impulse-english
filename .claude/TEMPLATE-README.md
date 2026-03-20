# Claude Code Templates — Installation & Reproduction Guide

This documents the exact tooling setup installed in this project's `.claude/` directory, so it can be reproduced in any future website project.

---

## Install Command

Run from the project root:

```bash
npx claude-code-templates@latest \
  --agent development-tools/debugger,expert-advisors/architect-review,data-ai/ai-engineer,devops-infrastructure/devops-troubleshooter,modernization/architecture-modernizer,development-tools/unused-code-cleaner \
  --command utilities/ultra-think \
  --skill development/skill-creator,development/git-commit-helper,business-marketing/seo-optimizer,development/systematic-debugging
```

---

## What Gets Installed

### Agents (`.claude/agents/`)

| Agent | Template Path | Purpose |
|-------|--------------|---------|
| `architect-review.md` | `expert-advisors/architect-review` | Code architecture review, SOLID principles |
| `debugger.md` | `development-tools/debugger` | Bug diagnosis, root cause analysis |
| `ai-engineer.md` | `data-ai/ai-engineer` | AI system design and deployment |
| `devops-troubleshooter.md` | `devops-infrastructure/devops-troubleshooter` | Incident response, log analysis |
| `architecture-modernizer.md` | `modernization/architecture-modernizer` | System modernisation, microservices |
| `unused-code-cleaner.md` | `development-tools/unused-code-cleaner` | Dead code detection and removal |

### Commands (`.claude/commands/`)

| Command | Template Path | Usage |
|---------|--------------|-------|
| `ultra-think.md` | `utilities/ultra-think` | `/ultra-think [problem]` — deep analysis |

### Skills (`.claude/skills/`)

| Skill | Template Path | Purpose |
|-------|--------------|---------|
| `seo-optimizer/` | `business-marketing/seo-optimizer` | SEO optimisation guidance |
| `git-commit-helper/` | `development/git-commit-helper` | Commit message generation |
| `skill-creator/` | `development/skill-creator` | Create and evaluate new skills |
| `systematic-debugging/` | `development/systematic-debugging` | Root cause debugging process |

---

## Post-Install Steps

1. **Create root `CLAUDE.md`** — Document your project, list all available agents/commands/skills, add workflow guides and project-specific rules.

2. **Create project memory files** — Set up memory in `~/.claude/projects/<project-path>/memory/` to persist tooling decisions and project goals across sessions.

3. **Customise for your project** — Add project-specific agents, skills, or commands as needed. The installed templates are general-purpose starting points.

4. **Verify nested projects** — If your project contains nested codebases with their own `.claude/` directories, ensure the root tooling doesn't conflict.

---

## Template Version

- Installed from: `claude-code-templates@latest` (v1.28.13)
- Date: 2026-03-20
