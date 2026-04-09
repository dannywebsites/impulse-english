# Coding Conventions

**Analysis Date:** 2026-04-09

## Naming Patterns

**Files:**
- PascalCase for React/component files: `Hero.tsx`, `LeadForm.tsx`, `Navbar.tsx`
- camelCase for utility/service files: `images.ts`, `napData.ts`, `schemaData.ts`
- kebab-case for page files: `[slug].astro`, `about-us.tsx`
- `.test.js` or `.spec.js` suffix for test files (co-located with source)

**Functions:**
- camelCase for all functions: `handleSubmit`, `getClient`, `emitJobStatus`, `fetchJobs`
- Async functions named as verbs: `chat()`, `runWriter()`, `enqueuePipeline()`
- Event handlers prefixed with `handle`: `handleScroll()`, `handleSubmit()`

**Variables:**
- camelCase for all variables: `formData`, `isHomePage`, `openDropdown`, `apiKey`
- UPPERCASE_SNAKE_CASE for constants: `API_BASE`, `BASE_WRITER_SYSTEM_PROMPT`, `MAX_TOKENS`, `BLOG_DIR`
- Boolean prefixes (optional but observed): `is*`, `show*`, `enable*`: `isHomePage`, `showPhone`, `enableCache`

**Types:**
- PascalCase for all TypeScript types and interfaces: `LeadFormProps`, `FAQItem`, `ImageData`, `NavItem`
- Suffix interfaces with `Props` for component props: `ExamPageLayoutProps`, `OptimizedImageProps`
- No leading `I` prefix for interfaces (modern TypeScript convention)

**Directories:**
- camelCase for most directories: `components/`, `services/`, `utils/`, `pipeline/`, `hooks/`
- Kebab-case for route-based directories: `/pages/blog/`, `/pages/cursos/`, `/pages/ubicaciones/`

## Code Style

**Formatting:**
- No explicit formatter config detected (no `.prettierrc` or ESLint config in main codebase)
- Inferred from source: 2-space indentation, semicolons present, Tailwind classes inline

**TypeScript:**
- Strict mode enabled: `"extends": "astro/tsconfigs/strict"` in `tsconfig.json`
- Target: ES2022, Module: ESNext
- JSX: react-jsx (automatic runtime)
- Path alias configured: `@/*` maps to project root

**React/Astro:**
- Functional components default: `export default function ComponentName() { ... }`
- Props destructuring: `function Component({ prop1, prop2 }: ComponentProps) { ... }`
- Use `export default` for page components, `export` for reusable components (though not consistently enforced)

## Import Organization

**Order:**
1. React/framework imports: `import React, { useState } from 'react'`
2. Third-party libraries: `import { ChevronDown } from 'lucide-react'`
3. Local utility/service imports: `import { NAP } from '../utils/napData'`
4. Type imports: `import type { FAQItem } from '../utils/schemaData'`

**Path Aliases:**
- Use `@/` prefix for absolute imports from project root: `import { useJobs } from '@/hooks/useJobs'`
- Relative imports `../` used when within same component tree (components → utils)

## Error Handling

**Patterns:**

Async/Await with try-catch wrapping (Server-side):
```javascript
// seo-writer/server/services/claude.js
try {
  const stream = getClient().messages.stream(params);
  // ... process stream
} catch (error) {
  if (accumulated.length > 500) {
    // Partial success recovery
    console.warn(`[Claude] Stream failed but recovered ${accumulated.length} chars`);
    return accumulated;
  }
  console.error(`[Claude] Failed: ${error.message}`);
  throw new Error(`Claude API error: ${error.message}`);
}
```

Fetch-based error handling (Client-side):
```javascript
// seo-writer/src/hooks/useJobs.js
if (!response.ok) throw new Error('Failed to fetch jobs');
return response.json();
```

Express route error wrapping:
```javascript
// seo-writer/server/routes/jobs.js
router.get('/', async (req, res) => {
  try {
    const jobs = await prisma.contentJob.findMany({ ... });
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});
```

React component error states:
```typescript
// March-Impulse-Web-.../components/LeadForm.tsx
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

if (status === 'success') {
  return <div className="...">Success state</div>;
}
```

**Guidelines:**
- Wrap async operations in try-catch blocks
- Throw descriptive Error objects with context (e.g., "Claude API error: {message}")
- Log errors to console with context prefix: `[Claude]`, `Error fetching jobs:`
- Return user-friendly error messages in API responses: `{ error: 'Failed to fetch jobs' }`
- Use Union types for state machines: `'idle' | 'loading' | 'success' | 'error'`

## Logging

**Framework:** `console` methods only (console.log, console.error, console.warn)

**Patterns:**

Server-side with context prefix:
```javascript
console.log(`[Claude] Streaming request (${promptKB} KB prompt, model: ${model})`);
console.warn(`[Claude] Stream failed after ${elapsed}s but recovered...`);
console.error(`[Claude] Failed after ${elapsed}s:`, error.message);
```

Server-side with operation tracking:
```javascript
const start = Date.now();
// ... operation
const elapsed = ((Date.now() - start) / 1000).toFixed(1);
console.log(`[Claude] Done in ${elapsed}s (${outputKB} KB)`);
```

Client-side via React Toast notifications (preferred over console.log):
```javascript
// seo-writer/src/pages/Dashboard.jsx uses sonner toast library
import { toast } from 'sonner';
// Usage: toast.success('Job created'), toast.error('Failed')
```

**Guidelines:**
- Prefix logs with module/service name in brackets: `[Claude]`, `[Database]`, `[Pipeline]`
- Include timing information for performance-critical operations
- No debug logging in client React components (use React DevTools)
- Error logs include full error object context: `console.error('message', error)`
- Use server logs to track pipeline progress and AI API calls

## Comments

**When to Comment:**
- Complex algorithms or business logic: `// Build dynamic system prompt sections`
- Non-obvious implementation decisions: `// If we received substantial content before stream died, return it`
- Section delimiters for large code blocks: `/* Mobile Version */`, `/* Desktop Navigation */`
- Temporary workarounds: Mark with TODO or FIXME (though rarely found in this codebase)

**JSDoc/TSDoc:**
```javascript
/**
 * Build the word count instruction based on settings
 */
function getWordCountInstruction(settings) { ... }

/**
 * Chat completion with optional system instruction.
 * Uses streaming to prevent timeouts on long-form content generation.
 * Accumulates partial text so a mid-stream failure can still return usable content.
 */
export async function chat(prompt, systemInstruction = null) { ... }
```

- Use JSDoc for public functions and services
- Keep comments concise; code should be self-documenting
- Inline comments for "why", not "what" (code shows what, comment explains why)

## Function Design

**Size:** Functions kept under 60 lines average; larger operations delegated to helper functions or async/await chains

**Parameters:**
- Use object destructuring for multiple props: `function Component({ prop1, prop2, ...rest }) { }`
- Order required params before optional/defaults
- Type props interfaces instead of inline types: `(props: ComponentProps)` preferred over `(prop1: string, prop2?: number)`

**Return Values:**
- React components return JSX or null: `return <div>...</div>` or `return null`
- Async functions return Promises: `async function runWriter(...) { ... }`
- Data transformations return plain objects/arrays: `return { id, name, status }`
- Custom hooks return tuples or objects: `return { data, loading, error }`

## Module Design

**Exports:**
- Default export for main component: `export default function Hero() { ... }`
- Named exports for utilities and hooks: `export function useJobs() { ... }`
- Type exports use `export type`: `export type FAQItem = { question: string; answer: string }`

**Barrel Files:**
- No explicit barrel files observed (no `index.ts` re-exports)
- Each file imports directly from source: `import { LeadForm } from '../components/LeadForm'`

## Testing & Type Safety

**TypeScript:**
- All component props typed with interfaces
- Function parameters typed: `(props: LeadFormProps)`, `async function chat(prompt, systemInstruction = null)`
- State typed with Union types: `useState<'idle' | 'loading' | 'success' | 'error'>('idle')`
- No `any` types observed; strict mode enforced

**Component Props Pattern:**
```typescript
interface ComponentProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  webhookUrl?: string;
  source?: string;
  compact?: boolean;
  showPhone?: boolean;
  showLevel?: boolean;
}

export default function Component({
  title = "Default",
  subtitle = "Default subtitle",
  ctaText = "Send",
  compact = false,
  showPhone = true,
}: ComponentProps) {
  // ...
}
```

---

*Convention analysis: 2026-04-09*
