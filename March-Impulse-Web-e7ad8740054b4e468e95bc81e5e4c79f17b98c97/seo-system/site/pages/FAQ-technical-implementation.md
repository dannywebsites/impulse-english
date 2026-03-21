# Technical On-Page SEO Implementation Guide for PAA Answers

## Quick Overview

You need to:
1. Place your Q&A visibly on the page (HTML-rendered, not JavaScript-hidden)
2. Structure them with proper heading hierarchy (H2 for questions)
3. Add FAQ schema markup (JSON-LD format)
4. Validate with Google Rich Results Test

---

## Part 1: HTML STRUCTURE FOR QUESTIONS & ANSWERS

### Location on Page
Place your FAQ section:
- **Below main content** (ideal for most pages)
- **Before CTA** (Call-to-action buttons)
- **Not hidden** behind JavaScript or paywalls
- All text must be visible in the source HTML

### HTML Markup Example
```html
<section id="faq-section">
  <h2>Frequently Asked Questions</h2>
  
  <h2>Your first question here?</h2>
  <p>Your answer here in paragraph format.</p>
  
  <h2>Your second question here?</h2>
  <p>Your answer here in paragraph format.</p>
  
  <h2>Your third question here?</h2>
  <p>Your answer here in paragraph format.</p>
</section>
```

**Key Requirements:**
- Questions use `<h2>` tags (h2 = main question headings)
- Answers use `<p>` (paragraph) tags
- All content is visible in the HTML (not hidden with display:none or behind JavaScript)
- Each Q&A pair is plaintext, not images or embedded iframes

### If Using Expandable/Accordion FAQs
If you want answers hidden until users click:

```html
<h2>Your question?</h2>
<div class="faq-answer">
  <p>Your answer here. Users can click to expand and see this.</p>
</div>
```

**This is valid because:** Users can access the answer by clicking the expandable section, and the HTML content is still visible in the page source (not dynamically loaded via JavaScript after page render).

---

## Part 2: SCHEMA MARKUP IMPLEMENTATION (JSON-LD)

### Where to Place Schema Code

You have two options (both work):

**Option A: In the `<head>` section (Recommended by Google)**
```html
<head>
  <title>Your Page Title</title>
  <meta charset="UTF-8">
  
  <!-- Your other meta tags, stylesheets, etc. -->
  
  <!-- FAQ Schema Markup Goes Here -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Your first question here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your answer here."
        }
      },
      {
        "@type": "Question",
        "name": "Your second question here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your answer here."
        }
      }
    ]
  }
  </script>
</head>
```

**Option B: In the `<body>` section (just before closing `</body>`)**
```html
<body>
  <!-- Your page content here -->
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Your first question here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your answer here."
        }
      }
    ]
  }
  </script>
</body>
```

**Best Practice:** Place it in `<body>` near your actual FAQ content section (not in `<head>`) so it's clearly associated with the visible content.

### JSON-LD Schema Template

Fill in your questions and answers:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION #1 HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER #1 HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION #2 HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER #2 HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION #3 HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER #3 HERE"
      }
    }
  ]
}
```

**Important Notes:**
- The `"name"` field = your actual question text
- The `"text"` field = your actual answer text
- **Question and answer text in the schema MUST match exactly what appears on the page**
- You can have as many Question/Answer pairs as needed
- Keep this as one `FAQPage` type definition per page (not multiple on the same page)

---

## Part 3: IMPLEMENTATION BY PLATFORM

### WordPress (With Rank Math Plugin)

1. Install and activate **Rank Math SEO** plugin
2. Edit the page where you want FAQs
3. In the Elementor editor, click the **Rank Math icon** at the bottom
4. Click **Schema Generator** → **Add Schema** → **FAQ**
5. Enter your questions and answers in the schema panel
6. Save and publish

**The plugin automatically:**
- Generates correct JSON-LD format
- Places it in the page source
- Keeps it in sync with your visible content

### WordPress (With Yoast SEO)

Yoast has limited FAQ schema support in Elementor:
- Use the **Yoast FAQ block** in Gutenberg (not Elementor)
- Or manually set page type as "FAQPage" in Yoast settings
- For full control, use custom JSON-LD (see manual method below)

### WordPress (Manual - Any Theme)

1. Edit your page HTML directly or use an HTML widget
2. Locate where your FAQ content is displayed
3. Add a new HTML code block **right after your FAQ section**
4. Paste the JSON-LD schema code (from Part 2 above)
5. Publish and test with Google Rich Results Test

### Elementor (Without Plugin)

1. Edit your page in Elementor
2. Create your FAQ using **Accordion widget** or **Advanced Accordion**
3. Add an **HTML widget** to the page
4. Paste the JSON-LD schema code into that HTML widget
5. Publish

**Keep the HTML widget visible** (set opacity to 100%, height to 0 is okay) or place it right after your FAQ section.

### Webflow

1. Create your FAQ structure with headings and text
2. Go to **Project Settings** → **Custom Code**
3. In the **Footer Code** section, paste your JSON-LD schema
4. Or add a **Embed component** and paste the schema there
5. Publish and test

### Static HTML Sites

1. Open your page's HTML file
2. Add the `<script type="application/ld+json">` block to your `<head>` or `<body>`
3. Paste your schema code
4. Save and deploy
5. Test with Google Rich Results Test

---

## Part 4: VALIDATION & TESTING

### Google Rich Results Test (Most Important)

1. Go to: **https://search.google.com/test/rich-results**
2. Enter your page URL
3. Click **Test URL**
4. Results will show:
   - ✅ "Eligible for FAQ rich results" = Success
   - ⚠️ Any syntax errors in schema
   - Questions/answers detected

### Schema.org Validator (Technical Check)

1. Go to: **https://validator.schema.org/**
2. Paste your full page HTML or just the schema code
3. Check for validation errors

### What Errors to Look For

| Error | How to Fix |
|-------|-----------|
| "Duplicate schema detected" | Only use one method to add schema (plugin OR manual code, not both) |
| "Missing required fields" | Ensure every Question has a "name" and every Answer has "text" |
| "Content not visible" | Make sure your Q&A is visible in the page HTML (not hidden with CSS/JavaScript) |
| "Text mismatch" | The questions/answers in schema must match exactly what's on the page |
| "No FAQ detected" | Check that you used `"@type": "FAQPage"` and placed schema in `<head>` or `<body>` |

---

## Part 5: BEST PRACTICES CHECKLIST

Before you go live:

- [ ] Questions and answers are visible in HTML on the page
- [ ] Questions use `<h2>` tags, answers use `<p>` tags
- [ ] You have exactly one `FAQPage` definition per page
- [ ] Schema JSON is properly formatted (no missing commas or brackets)
- [ ] Question/answer text in schema matches page text exactly
- [ ] You're using only ONE method to add schema (not plugin + manual code)
- [ ] Google Rich Results Test shows "Eligible for FAQ rich results"
- [ ] Page loads without JavaScript errors
- [ ] FAQ section is not behind a login/paywall
- [ ] You haven't hidden content with `display: none` or `visibility: hidden`

---

## Part 6: COMMON MISTAKES TO AVOID

1. **Duplicate Schema**
   - Don't add schema through both your plugin AND manually
   - Choose one method per page

2. **Hidden Content**
   - Don't hide Q&A with CSS `display: none`
   - JavaScript-loaded content after page render might not be crawled

3. **Schema in Wrong Place**
   - Keep schema in `<head>` or `<body>`, not in comments
   - Never split schema across multiple files

4. **Text Mismatches**
   - The exact question/answer text in schema MUST match visible page text
   - Even small differences (punctuation, capitalization) cause validation errors

5. **Too Many FAQPages**
   - Use one `FAQPage` definition per page
   - Don't have multiple `FAQPage` types on the same URL

6. **Invalid Schema Syntax**
   - Always include commas between array items
   - Always use double quotes (not single quotes) in JSON
   - Always close all brackets properly

---

## Part 7: QUICK REFERENCE - JSON-LD COPY-PASTE TEMPLATE

Replace the bracketed sections with your actual content:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[INSERT QUESTION 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[INSERT ANSWER 1]"
      }
    },
    {
      "@type": "Question",
      "name": "[INSERT QUESTION 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[INSERT ANSWER 2]"
      }
    },
    {
      "@type": "Question",
      "name": "[INSERT QUESTION 3]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[INSERT ANSWER 3]"
      }
    }
  ]
}
</script>
```

**Steps:**
1. Copy the above code block
2. Replace `[INSERT QUESTION 1]`, `[INSERT ANSWER 1]`, etc. with your actual content
3. Add or remove Question/Answer blocks as needed (keep the comma structure)
4. Paste into your page
5. Test with Google Rich Results Test

---

## Part 8: TROUBLESHOOTING

**Schema validates but no rich results show in Google Search**
- Validation only checks syntax. Google still decides whether to show rich results based on content quality, relevance, and your site authority. It may take 1-2 weeks for Google to re-crawl and display results.

**FAQ section not showing in search results**
- Ensure your page ranks for the question first (standard SEO ranking required)
- Make sure schema markup is present and validates
- Wait for Google to re-crawl (can take 1-2 weeks)

**Google says content is not visible**
- Check that your Q&A is in the HTML source (right-click → View Page Source)
- Avoid hiding with `display: none` or JavaScript loading after initial render
- If using accordions, ensure they're expandable without JavaScript dependencies

**Schema generator tool says "no content found"**
- This is for the tool itself, not your page. Ignore this message.
- What matters is Google Rich Results Test results

---

## Summary

**For Your Site:**

1. Write your Q&A in visible HTML with proper `<h2>` tags for questions
2. Place section below main content, before CTAs
3. Add JSON-LD FAQPage schema to `<body>` near FAQ section
4. Test with Google Rich Results Test
5. Validate that questions/answers in schema match visible page text exactly
6. Publish and monitor for rich results appearance (1-2 weeks)

That's it! The rest is handled by Google's crawlers.
