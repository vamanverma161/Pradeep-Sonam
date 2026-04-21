# Task: Create premium animated LocationSection for wedding invitation

## Information Gathered:
- weddingData.json: Has 'venue' object with description, mapEmbedSrc, mapLink, buttonText (similar to requested 'location').
- Index.tsx: Current structure has BlessingsSection → FloralDivider → Gallery (after previous removal). We'll insert LocationSection after BlessingsSection FloralDivider.
- wedding/ dir: No LocationSection.tsx (previously deleted).
- Hook useWeddingData provides data statically from JSON.
- Tailwind, Framer Motion available.

## Plan:
1. Update src/data/weddingData.json: Rename 'venue' to 'location' and adjust fields to match requirements (name, address, mapLink, embedLink).
2. Create src/components/wedding/LocationSection.tsx: Premium animated component using Framer Motion, glassmorphism, map iframe, buttons, skeleton, pin icon.
3. Update src/pages/Index.tsx: Add lazy import and JSX for <LocationSection /> after BlessingsSection FloralDivider.

## Dependent Files:
- src/data/weddingData.json
- src/components/wedding/LocationSection.tsx (new)
- src/pages/Index.tsx

## Followup steps:
- Test with dev server (already running).
- Add to TODO.md progress.

Ready to proceed?
