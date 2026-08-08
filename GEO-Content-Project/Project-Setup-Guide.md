# GEO Content Project Setup Guide
## How to Set Up Your AI-Powered Service Page Content Generator

---

## Overview

This guide walks you through setting up a ChatGPT Project or Claude Project that will help you generate GEO-optimized service page content. Once set up, you'll be able to create unique, AI-citation-ready content for any location with simple commands.

**Time required:** 15-20 minutes for initial setup
**Ongoing use:** 2-3 minutes per content section

---

## What You're Setting Up

A project workspace where:
1. Your business information is loaded ONCE
2. The AI understands GEO principles and requirements
3. Simple commands generate optimized content
4. Every output follows best practices automatically

---

## Files You'll Need

### Setup Helper File:
| File | Purpose |
|------|---------|
| `Business-Info-Research-Prompt.txt` | Prompt to auto-fill your business info using AI research |

### Core Files We Provide (14 files):
| File | Purpose |
|------|---------|
| `System-Prompt.txt` | The core instructions for the AI |
| `Prompt-1-Title-Meta.txt` | Title tag and meta description specs |
| `Prompt-2-Answer-Capsule.txt` | Hero intro / answer capsule specs |
| `Prompt-3-Service-Description.txt` | Service description specs |
| `Prompt-4-Team-Bio.txt` | Team member bio specs |
| `Prompt-5-Testimonial.txt` | Testimonial enhancement specs |
| `Prompt-6-Case-Study.txt` | Case study format specs |
| `Prompt-7-FAQ.txt` | Location-specific FAQ specs |
| `Prompt-8-Schema.txt` | Schema markup generation specs |
| `Prompt-9-How-We-Work.txt` | Service process / how we work specs |
| `Prompt-10-Why-Choose-Us.txt` | Differentiators section specs |
| `Anti-Patterns.txt` | What to avoid |
| `Examples-Library.txt` | Good/bad examples |
| `GEO-Principles.txt` | Core GEO concepts |

### OPTIONAL Industry-Specific Files (choose what applies to your business):
| File | Best For | Purpose |
|------|----------|---------|
| `Prompt-11-Property-Market-Data.txt` | Real estate, mortgage brokers, property investors | Local property values & 10-year trends |
| `Prompt-12-Local-Permits-Codes.txt` | Plumbers, HVAC, electricians, roofers, contractors | Permit requirements & building codes |
| `Prompt-13-Local-Court-Legal-Process.txt` | Lawyers (all practice areas) | Local court process & timelines |
| `Prompt-14-First-Time-Buyer-Programs.txt` | Mortgage brokers, loan officers, real estate | State/local buyer assistance programs |
| `Prompt-15-Seasonal-Climate-Section.txt` | HVAC, roofers, landscapers, pool service | Climate-specific service timing |

**Only upload the optional files that match your industry.** They add unique, hard-to-template content that differentiates your pages.

### Files You Create (1 file):
| File | Purpose |
|------|---------|
| `Business-Information.txt` | All your business details (you fill this out) |

---

# OPTION A: ChatGPT Project Setup

## Step 1: Create a New Project

1. Go to [chat.openai.com](https://chat.openai.com)
2. In the left sidebar, click **"Projects"** (or the folder icon)
3. Click **"+ New Project"**
4. Name it: `GEO Service Page Content`
5. Click **Create**

## Step 2: Add Custom Instructions

1. With your project open, click the **Settings** icon (gear) or **"Configure"**
2. Find **"Custom Instructions"** or **"Instructions"**
3. Open the file `System-Prompt.txt`
4. Copy ALL the text
5. Paste it into the Custom Instructions field
6. Save

## Step 3: Upload Knowledge Files

1. In your project settings, find **"Files"** or **"Knowledge"**
2. Click **"Upload files"**
3. Upload the **core files** (always required):
   - `Business-Information.txt` (the one you filled out)
   - `Prompt-1-Title-Meta.txt`
   - `Prompt-2-Answer-Capsule.txt`
   - `Prompt-3-Service-Description.txt`
   - `Prompt-4-Team-Bio.txt`
   - `Prompt-5-Testimonial.txt`
   - `Prompt-6-Case-Study.txt`
   - `Prompt-7-FAQ.txt`
   - `Prompt-8-Schema.txt`
   - `Prompt-9-How-We-Work.txt`
   - `Prompt-10-Why-Choose-Us.txt`
   - `Anti-Patterns.txt`
   - `Examples-Library.txt`
   - `GEO-Principles.txt`

4. Upload **optional industry files** (only if they apply to your business):
   - `Prompt-11-Property-Market-Data.txt` → Real estate, mortgage, investors
   - `Prompt-12-Local-Permits-Codes.txt` → Plumbers, HVAC, electricians, contractors
   - `Prompt-13-Local-Court-Legal-Process.txt` → Lawyers
   - `Prompt-14-First-Time-Buyer-Programs.txt` → Mortgage, real estate
   - `Prompt-15-Seasonal-Climate-Section.txt` → HVAC, roofers, landscapers

5. Wait for all files to upload successfully

## Step 4: Verify Setup

1. Start a new chat in your project
2. Type: `What locations do I serve and who is on my team?`
3. The AI should reference your Business-Information.txt and answer accurately
4. If it doesn't know, check that your files uploaded correctly

---

# OPTION B: Claude Project Setup

## Step 1: Create a New Project

1. Go to [claude.ai](https://claude.ai)
2. Click **"Projects"** in the sidebar
3. Click **"+ Create Project"**
4. Name it: `GEO Service Page Content`
5. Click **Create**

## Step 2: Add Project Instructions

1. In your project, click **"Project Instructions"** or the settings area
2. Open the file `System-Prompt.txt`
3. Copy ALL the text
4. Paste it into the Project Instructions field
5. Save

## Step 3: Add Project Knowledge

1. In your project, find **"Project Knowledge"** or **"Files"**
2. Click **"Add Content"** or **"Upload"**
3. Upload the **14 core files** (same list as ChatGPT above)
4. Upload any **optional industry files** that match your business (Prompts 11-15)
5. Wait for processing to complete

## Step 4: Verify Setup

1. Start a new chat in your project
2. Type: `What locations do I serve and who is on my team?`
3. Claude should reference your Business-Information.txt and answer accurately

---

# BEFORE YOU START: Fill Out Your Business Information

## Critical Step

Before setting up your project, you MUST fill out the `Business-Information-Template.txt` file with your actual business details.

### Option A: Auto-Fill with AI Research (Recommended)

Use AI to pre-fill most of your business information automatically:

1. Open `Business-Info-Research-Prompt.txt`
2. Copy the prompt inside
3. Paste it into ChatGPT, Claude, Gemini, or Perplexity (with deep research/browsing enabled)
4. Attach the `Business-Information-Template.txt` file
5. Add your website URL
6. Let the AI research and fill out the template
7. Review the output—fill in any `[NO INFORMATION FOUND]` gaps manually
8. Save as `Business-Information.txt`

**Time saved:** 1-2 hours of manual data entry

### Option B: Manual Completion

1. Open `Business-Information-Template.txt`
2. Save a copy as `Business-Information.txt`
3. Fill out every section with your real information
4. Be as specific as possible:
   - Use full names (not initials)
   - Include actual addresses and neighborhoods
   - Add real prices and response times
   - Include genuine testimonials and case studies
5. Mark any gaps with `[NEED TO GATHER]`

### Minimum Information Needed:
- [ ] Business name and contact info
- [ ] At least 1 location with full details
- [ ] At least 1 team member with credentials
- [ ] Pricing information
- [ ] At least 1 testimonial
- [ ] At least 1 case study
- [ ] 5+ FAQ questions and answers

**The quality of your output depends entirely on the quality of your input.**

---

# Using Your Project

## Quick Commands

Once set up, use these simple commands to generate content:

### Title & Meta
```
Create title tag and meta description for my [Location] page
```

### Answer Capsule
```
Write the hero intro for [Location]
```

### Service Description
```
Generate service description for [Location]
```

### Team Bio
```
Create a bio for [Team Member Name] for the [Location] page
```

### Testimonial
```
Enhance this testimonial for the [Location] page: [paste original]
```

### Case Study
```
Write a case study about the [Project Name] for [Location]
```

### FAQs
```
Generate FAQs for the [Location] page
```

### How We Work
```
Write the "How We Work" section for [Location]
```

### Why Choose Us
```
Create the "Why Choose Us" section for [Location]
```

### Schema
```
Create schema markup for my [Location] page
```

### Full Page
```
Generate all content sections for my [Location] service page
```

---

## Optional Industry-Specific Sections

**Only use these if you uploaded the matching optional prompt file.**

### Property Market Data (Real Estate, Mortgage)
```
Write a property market snapshot for [Suburb/Neighborhood]
```

### Local Permits & Codes (Contractors)
```
Create the permits and codes section for [City] [service type]
```

### Local Court Process (Lawyers)
```
Write the local court process section for [County] [case type]
```

### First-Time Buyer Programs (Mortgage, Real Estate)
```
Create the first-time buyer programs section for [State]
```

### Seasonal/Climate Considerations (HVAC, Roofers)
```
Write the seasonal timing section for [City] [service type]
```

---

## Pro Tips

### 1. Be Specific in Requests
Instead of: `Write content for Boston`
Say: `Write content for my Back Bay page, emphasizing brownstone expertise`

### 2. Iterate and Refine
After getting output:
- `Make it more urgent`
- `Add more pricing details`
- `Emphasize the [specific differentiator]`
- `Make the testimonial sound more authentic`

### 3. Generate for Multiple Locations
```
Create title tags for all three of my locations: Back Bay, Cambridge, and Somerville
```
The AI will create unique content for each, using the different details from your Business Information.

### 4. Ask for Variations
```
Give me 3 different angles for the Back Bay hero intro
```

### 5. Check Against Anti-Patterns
```
Review this content against the anti-patterns file
```

### 6. Request Explanations
```
Explain why you made these choices for GEO
```

---

## Updating Your Business Information

When your business details change:

1. Update your `Business-Information.txt` file
2. Re-upload it to your project (replacing the old version)
3. Start a new chat to ensure the AI uses the updated info

### Things to Update Regularly:
- Review counts and ratings
- New testimonials
- New case studies
- Pricing changes
- New team members
- New service areas

---

## Troubleshooting

### AI Doesn't Know My Business Details
- Verify `Business-Information.txt` was uploaded
- Check that file names are correct (no typos)
- Start a new chat within the project

### Generic/Templated Output
- Ask: `Check the output against Anti-Patterns.txt`
- Request: `Make this more location-specific`
- Verify your Business-Information has enough local details

### Missing Sections in Output
- The prompt files may not have uploaded correctly
- Re-upload the specific prompt file (e.g., `Prompt-7-FAQ.txt`)

### AI Ignores Instructions
- ChatGPT/Claude have context limits
- Start a fresh chat
- Re-paste the system prompt if needed

---

## Recommended Workflow

### For a New Location Page:

1. **Start chat:** `I need to create content for my [Location] service page`

2. **Generate core sections in order:**
   - Title tag and meta description
   - Hero intro / answer capsule
   - Service description
   - Team bio
   - Testimonial
   - Case study
   - How we work
   - Why choose us
   - FAQs
   - Schema markup

3. **Add optional industry sections** (if you uploaded them):
   - Property market data (real estate/mortgage)
   - Local permits & codes (contractors)
   - Local court process (lawyers)
   - First-time buyer programs (mortgage)
   - Seasonal/climate (HVAC/roofers)

4. **Review each section** against anti-patterns before moving on

5. **Request full schema** at the end with all FAQ content included

6. **Ask for a final check:** `Review all the content we created for GEO optimization`

---

## File Checklist

Before starting, confirm you have all files in your project:

### System Files:
- [ ] System-Prompt.txt (in Custom Instructions)

### Core Content Prompt Files (required):
- [ ] Prompt-1-Title-Meta.txt
- [ ] Prompt-2-Answer-Capsule.txt
- [ ] Prompt-3-Service-Description.txt
- [ ] Prompt-4-Team-Bio.txt
- [ ] Prompt-5-Testimonial.txt
- [ ] Prompt-6-Case-Study.txt
- [ ] Prompt-7-FAQ.txt
- [ ] Prompt-8-Schema.txt
- [ ] Prompt-9-How-We-Work.txt
- [ ] Prompt-10-Why-Choose-Us.txt

### Reference Files (required):
- [ ] Anti-Patterns.txt
- [ ] Examples-Library.txt
- [ ] GEO-Principles.txt

### Your File (required):
- [ ] Business-Information.txt (filled out!)

### OPTIONAL Industry-Specific Files (only upload if relevant):
- [ ] Prompt-11-Property-Market-Data.txt → Real estate, mortgage, investors
- [ ] Prompt-12-Local-Permits-Codes.txt → Plumbers, HVAC, electricians, contractors
- [ ] Prompt-13-Local-Court-Legal-Process.txt → Lawyers
- [ ] Prompt-14-First-Time-Buyer-Programs.txt → Mortgage, real estate
- [ ] Prompt-15-Seasonal-Climate-Section.txt → HVAC, roofers, landscapers

**Minimum: 15 files (14 uploaded + system prompt in instructions)**
**Maximum: 20 files (if using all optional prompts)**

---

## Support

If you have questions about:
- **GEO principles:** Ask the AI within your project - it has the full GEO-Principles.txt
- **Output quality:** Ask the AI to check against Anti-Patterns.txt and Examples-Library.txt
- **Best practices:** Ask the AI to explain its choices for any content

The AI is your GEO content partner. Use it to learn, not just to generate.

---

*This guide is part of the GEO AI Ranking Module - Video 3: Transactional & Service Pages*
