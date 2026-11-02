# Cheela Prajwal Kumar — Portfolio

A responsive, multi-page portfolio built with plain HTML, CSS, and JavaScript. It is suitable for static hosting such as GitHub Pages and has no build step or package dependencies.

## Run locally

Open `index.html` directly, or serve this folder with a static server. For example, from this folder run `python -m http.server 8000` and open `http://localhost:8000`.

## Pages

- `index.html` — home and selected projects
- `about.html` — introduction, education, leadership, and skills
- `projects.html` — project details
- `contact.html` — contact details and message form
- `cv.html` — print-ready CV; choose **Download / print CV** and select “Save as PDF” in the browser print dialog

## Before publishing

- The hosted contact form posts to FormSubmit at the supplied email address. FormSubmit may send a confirmation email on the first submission; activate it before relying on the form. When opened directly as a local file, the form instead prepares a message in the visitor's email app. The portfolio itself contains no email service credentials.
- No profile photo or resume file was supplied. The landing page uses a designed initials illustration, and the CV page contains only the details supplied in the questionnaire. Add an approved portrait and review/update the CV before treating it as final.
- No project repository links or screenshots were supplied. The project artwork is decorative illustration, not a screenshot. Wander AI is the only project with a supplied public demo link; the voting system runs locally and is not presented as a public demo.
- The Campus Lost & Found and PDF/Excel to Tally project status fields were left unstated because no status was provided.
- For GitHub Pages, publish the repository root (or the folder containing `index.html`) as the site source. All local links are relative, so the pages work from a repository subpath.

## Included behavior

Responsive navigation, scroll reveals with reduced-motion support, back-to-top control, required-field validation, a FormSubmit email form, and browser print styles for the CV.
