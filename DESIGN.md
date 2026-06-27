---
name: Kopi KHA
description: Bold local coffee brand — direct, unapologetic, no soft drama.
colors:
  primary-blue: "#004AAD"
  primary-deep: "#00357F"
  cream: "#FFFDE8"
  white: "#FFFFFF"
  black: "#111111"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(36px, 8vw, 132px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
    textTransform: "uppercase"
  script:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(28px, 5vw, 48px)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-blue}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  street-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-blue}"
    rounded: "{rounded.none}"
    padding: "20px"
---

# Design System: Kopi KHA

## 1. Overview

**Creative North Star: "The Bold Local"**

This system is built for a local coffee brand that doesn't apologize for being direct. Every visual choice reinforces the "no soft drama" attitude — strong type, sharp contrasts, confident layout. The design feels rooted in its Indonesian context, not imported from a global template.

**Key Characteristics:**
- Hard shadows and sharp edges — no soft blur, no rounded corners on cards
- Bold uppercase display type in Anton — dominates every section
- Blue-and-white palette with cream accents — simple, high-contrast, memorable
- Street-level energy — feels like a hand-painted sign, not a corporate brand

## 2. Colors

The palette is tight and purposeful: one primary blue, one deep variant, cream for highlights, black and white for contrast. No pastels, no gradients, no muted neutrals.

### Primary
- **Bold Blue** (#004AAD): The brand anchor. Used on hero sections, buttons, cards, navigation, and all primary actions. This color carries the brand identity.
- **Deep Blue** (#00357F): Darker variant for hover states, secondary backgrounds, and depth. Never used alone — always paired with Bold Blue.

### Neutral
- **Cream** (#FFFDE8): Background highlights, placeholder elements, visual breaks. Used sparingly to add warmth without diluting the blue.
- **White** (#FFFFFF): Text on blue backgrounds, card backgrounds, clean space. High contrast against primary.
- **Black** (#111111): Body text, borders, hard shadows. The structural color — defines edges and weight.

### Named Rules

**The Tight Palette Rule.** Five colors total. No sixth accent, no gradient, no tint. The constraint IS the identity.

**The Blue Dominance Rule.** Blue appears on 40-60% of any given screen. It's not an accent — it's the surface.

## 3. Typography

**Display Font:** Anton (with Impact, sans-serif fallback)
**Script Font:** Caveat (with cursive fallback)
**Body Font:** Space Grotesk (with sans-serif fallback)

**Character:** The pairing is intentionally blunt. Anton is condensed, uppercase, zero personality — it shouts without trying. Caveat adds a hand-drawn human touch for short accents. Space Grotesk keeps body text readable without competing with the display voice.

### Hierarchy
- **Display** (Anton 400, clamp(36px, 8vw, 132px), line-height 1): Hero headlines, section headings, product names. Always uppercase. Always dominant.
- **Script** (Caveat 700, clamp(28px, 5vw, 48px), line-height 1): Accent phrases, brand notes. Used once or twice per page maximum.
- **Body** (Space Grotesk 400, 16px, line-height 1.45): Descriptions, copy, navigation. Max 65-75ch for readability.
- **Label** (Space Grotesk 700, 12-14px, uppercase, letter-spacing 0.1em): Badges, kickers, small UI text.

### Named Rules

**The Anton Rule.** Anton is for headlines only. Never use it for body text, buttons, or labels. Its power comes from restraint.

**The One Script Rule.** Caveat appears once per section at most. Two script accents on the same screen kills the effect.

## 4. Elevation

Hard structural shadows. No blur, no ambient glow. Shadows are offset rectangles in black — they define edges and add weight, not atmosphere. This is a street-level aesthetic, not a layered UI.

### Shadow Vocabulary
- **Small** (`box-shadow: 4px 4px 0 #111111`): Buttons, small cards, interactive elements.
- **Medium** (`box-shadow: 5px 5px 0 #111111`): Standard cards, menu items.
- **Large** (`box-shadow: 6px 6px 0 #111111`): Hero cards, featured elements.

### Named Rules

**The No Blur Rule.** Shadows never use blur radius. If it has blur, it's not KHA.

**The Offset Rule.** Shadow offset is always equal in X and Y (4px 4px, 5px 5px, 6px 6px). Uneven offsets feel accidental.

## 5. Components

### Buttons
- **Shape:** Sharp rectangle (0px radius)
- **Primary:** White background, Bold Blue text, 3px black border, hard shadow. Hover: translate(-2px, -2px), shadow grows. Active: translate(2px, 2px), shadow shrinks.
- **Secondary:** Deep Blue background, white text, same border and shadow treatment.
- **Style:** Uppercase, bold weight, letter-spacing 0.1em. Minimum 44px height for tap targets.

### Street Cards
- **Shape:** Sharp rectangle (0px radius)
- **Background:** White or Bold Blue depending on section
- **Border:** 2px solid black
- **Shadow:** Medium (5px 5px 0 black)
- **Padding:** 20px
- **Hover:** Slight translate + shadow growth for interactive cards

### Tabs
- **Style:** Full-width stack on mobile, 4-column grid on desktop
- **Selected:** White background, black border, blue text
- **Unselected:** Deep Blue background, white text, white border
- **Typography:** Anton, uppercase, centered

### Navigation
- **Desktop:** Horizontal links, Anton-style uppercase labels, "Order Now" button as primary CTA
- **Mobile:** Full-screen overlay, large Anton links, escape key closes
- **Sticky:** White background, black border-bottom, 76-80px height

### Sticky CTA (Mobile)
- **Position:** Fixed bottom, full-width
- **Behavior:** Hides when footer is visible
- **Style:** Primary button treatment, always accessible

## 6. Do's and Don'ts

### Do:
- **Do** use hard shadows with zero blur on every card and button.
- **Do** keep the palette to five colors maximum.
- **Do** use Anton for headlines and nothing else.
- **Do** make borders visible (2px minimum) on all structural elements.
- **Do** use uppercase for all display type and labels.
- **Do** maintain the bold, direct voice in all copy.

### Don't:
- **Don't** use rounded corners on cards or sections. Sharp edges only. Pill shape is for badges and labels.
- **Don't** add blur to shadows. No ambient glow, no soft elevation.
- **Don't** introduce gradients. Flat color only.
- **Don't** use muted grays or pastels. The palette is bold or it's nothing.
- **Don't** make it mainstream. This already has "bold" character — don't dilute it into safe/neutral territory (per PRODUCT.md anti-references).
- **Don't** pair Anton with another condensed sans-serif. It stands alone.
- **Don't** use Caveat more than once per section.
