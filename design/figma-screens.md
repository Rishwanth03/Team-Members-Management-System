# Figma Screens Specification

Use this guide to build the exact four evaluation screens in Figma for the Student Team Members Management System.

## Design Tokens

- Primary: `#2563EB`
- Secondary: `#1E293B`
- Accent: `#38BDF8`
- Background gradient: `#0F172A` to `#020617`
- Glass panel: `rgba(255,255,255,0.08)`
- Glass border: `rgba(255,255,255,0.12)`
- Radius: `12px` and `16px`
- Max content width: `1200px`
- Spacing scale: `8, 16, 24, 32, 40, 48`
- Typeface: Inter

## Shared Background System

- One large blue blurred orb in top-left (`opacity 8-9%`)
- One cyan blurred orb in bottom-right (`opacity 8-9%`)
- Light grid overlay (`1px lines`, low opacity)
- Keep only these two effects per page

## 1) Home Screen

- Centered hero card (glassmorphism)
- Eyebrow label: Student Team Members Management System
- Heading: Manage Your Team Efficiently
- Supporting text (1-2 lines)
- Two CTAs in row:
  - Add Member (primary)
  - View Members (secondary)

## 2) Add Member Screen

- Single glass card container
- Title + helper text
- Form fields:
  - Name
  - Role
  - Email
  - Contact
  - Additional Details (textarea)
  - Image upload area with preview frame
- Validation helper text under invalid fields
- Submit primary button
- Optional success toast at top-right

## 3) View Members Screen

- Section heading + subtitle
- Responsive card grid (3 columns desktop, 2 tablet, 1 mobile)
- Card elements:
  - Profile image top
  - Name
  - Role
  - View Details button
- Hover interaction:
  - Lift up by 4-5px
  - Slight scale (`1.01`)
  - Softer shadow increase

## 4) Member Details Screen

- Two-column card layout (desktop)
  - Left: profile image
  - Right: content
- Text blocks:
  - Name
  - Role badge
  - Email
  - Contact
  - Additional Info
- Mobile behavior: stack vertically

## Motion Notes

- Orb movement animation cycle: 10s and 12s, alternate ease-in-out
- Button hover transition: 200ms
- Card hover transition: 250ms
