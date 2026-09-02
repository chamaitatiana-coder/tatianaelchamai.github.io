Figma Design Brief — Portfolio Website

For: Tatiana El Chamai — Junior Full-Stack Developer Purpose: Prompt professionnel à donner à Figma / Figma AI (ou à un designer) pour générer la maquette du portfolio.

1. Project Overview

Design a modern, premium developer portfolio for Tatiana El Chamai, a Junior Full-Stack Developer and Business Computing graduate. The design must make her professional photo, identity, projects, technical skills, experience, and CV immediately visible and accessible to recruiters.

Tone & style: Clean, modern, tech-forward, trustworthy, slightly premium — not generic template energy. Confident but approachable.

Placeholder files (to be swapped with real assets during development):

profile-photo.jpg → real uploaded photo (Tatiana's actual face — never AI-generated or altered)
Tatiana-El-Chamai-CV.pdf → real CV file

Use clearly labeled placeholder frames/components in Figma for both, so developers can drop in the real files without restructuring the design.

2. Global Rules (Non-Negotiable)
Never generate or replace the photo with an AI-generated face. Use a placeholder frame with the exact aspect ratio/crop intended for the real photo, labeled profile-photo.jpg [PLACEHOLDER].
Never invent CV content. Skills, experience, and education shown in the CV preview mockup must use generic placeholder labels (e.g., "Skill 1", "Company Name", "Degree Title") clearly marked as placeholders — not fabricated real-sounding data.
All interactive elements (Download CV, View Resume, Open Full CV) must be designed as real, functional-looking UI components with clear states (default, hover, active).
3. Hero Section

Layout: Two-column split (stacks vertically on mobile).

LEFT column:

Small "availability" badge (e.g., a soft pill/chip with a green status dot — "Available for opportunities")
Heading: "Hi, I'm Tatiana."
Strong developer headline (e.g., role + value proposition — large, bold typography)
Short professional description (1–2 lines)
Primary CTA button: "View My Work" (dominant, high-contrast style)
Secondary CTA button: "Download CV ↓" (clearly visible, but visually secondary/outlined so it doesn't compete with "View My Work")
Row of icon links: GitHub / LinkedIn (simple icon buttons, consistent stroke style)

RIGHT column:

Main profile photo placeholder, presented with:
Clean circular or softly rounded-square frame
Elegant thin border (1–2px, subtle gradient or accent color)
Soft accent glow behind the photo (blurred colored shape, low opacity)
Professional background treatment (subtle gradient blob or geometric shape behind the frame — not distracting)
Optional small floating "tech" chips/icons around the photo (e.g., React, Node.js, JS logos in small rounded cards with soft shadow, subtly offset/floating with slight rotation for a dynamic feel)
Modern decorative developer elements (abstract code brackets < />, dotted grid, or subtle blurred shapes) to reinforce the "developer" identity without cluttering the photo

Hierarchy note: The photo should be a clear visual focal point of the hero, balanced with — not overpowering — the text content on the left.

4. About Me Section

Layout: Two-column split — photo on one side, text/info on the other (mirror or match hero photo treatment for visual consistency, can be smaller scale).

Content block:

Name: Tatiana El Chamai
Title: Junior Full-Stack Developer
Intro paragraph:

"Business Computing graduate and Junior Full-Stack Developer passionate about building modern, scalable, and user-focused applications."

CTA row:
"View CV →" (text link or outlined button style)
"Download CV ↓" (button, same family as hero secondary CTA for consistency)

Photo treatment: Same premium frame language as hero (rounded/circular, border, subtle glow) but adapted to the section's proportions — should feel like part of the same design system, not a repeat of the identical component.

5. CV Preview / Document Mockup

Placed near the About or Experience section.

Component: "Premium document card"

Realistic PDF/document preview mockup (styled like a miniature CV page, not a literal embedded PDF)
Shows placeholder structure for:
Name (large, top)
Professional title
Skills section (chip/tag style or short list)
Experience section (2–3 placeholder entries with title/company/dates)
Education section (1–2 placeholder entries)
Card styling:
Rounded corners
Subtle drop shadow (soft, layered — premium feel, not harsh)
Slight paper/document texture or clean white background with fine border
Optional slight rotation or layered "stacked pages" effect for depth
Button: "Open Full CV ↗" below or overlaid on the card
6. CV / Resume Interaction Design

Design UI states for both actions (as buttons + hover/click states):

Action	Button Label	Behavior to design for
Download CV	Download CV ↓	Triggers direct PDF download
View Resume	View Resume ↗	Opens CV in new tab / in-app PDF viewer

Additional component to design: a lightweight in-app PDF viewer modal/overlay (for "View Resume" / "Open Full CV") — clean toolbar (close button, download icon, page indicator if multi-page), centered document preview, dimmed background overlay.

Button placement summary:

Hero section → Primary: Download CV (secondary to "View My Work")
About Me section → View CV + Download CV (paired, smaller scale)
CV Preview card → Open Full CV
7. Design System Notes
Photo frame component: build as a reusable Figma component with variants (hero-size, about-size) so both instances stay in sync.
CV button component: build as a reusable button component with variants (primary/secondary, with-icon).
Consistent iconography: use one icon set throughout (arrows ↓ ↗, GitHub/LinkedIn, tech logos).
Color/glow accents: pick one accent color for glows, badges, and highlights to keep the premium feel cohesive across hero, about, and CV card.
8. Deliverables Checklist for Figma File
 Hero section (desktop + mobile) with photo placeholder + Download CV button
 About Me section (desktop + mobile) with photo placeholder + View/Download CV
 CV preview document card component + "Open Full CV" button
 PDF viewer modal/overlay component
 Reusable photo-frame component (labeled profile-photo.jpg [PLACEHOLDER])
 Reusable CV-file reference (labeled Tatiana-El-Chamai-CV.pdf [PLACEHOLDER])
 Button component variants (primary/secondary/CV actions)
 Notes/annotations layer flagging where real photo and real CV should be swapped in during development