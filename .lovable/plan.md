Add a responsive YouTube video embed section to the Quest project case study page.

**What to build:**
- Convert the YouTube short URL to a standard embed URL (`https://www.youtube.com/embed/Yh2gHN7payI`).
- Insert a new section in `src/routes/projects.projects-quest.tsx` between the Mobile Application section and the Learning Approach section (or immediately before Final Experience) to showcase the video as a project preview.
- Use an `<iframe>` with a `rounded-3xl` container and `aspect-video` (16:9) for a clean, responsive embed that matches the page's existing visual language.
- Include a small label above the video (e.g., "Project Preview") using the existing uppercase tracking style.

**No other changes required.**

**Files to modify:**
- `src/routes/projects.projects-quest.tsx` — insert new video section.