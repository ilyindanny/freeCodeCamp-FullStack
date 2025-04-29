# My freeCodeCamp Notes — Project Manifest

> _Created: April 2025 • Version: 1.1 • Author: Danil Ilin_

## Project Goal

This repository documents my learning process with the freeCodeCamp FullStack course. It includes both lecture notes and practice code, organized by course topics and individual lessons.

The goal is to create a minimal, local web app for navigating and viewing structured study content.

Lessons are loaded automatically by the app; no manual configuration is required.

---

## Technologies Used

HTML5

CSS3

Vanilla JavaScript (no frameworks)

Node.js static server (via Node.js Lab on iOS)

## Project Structure

All course content is stored in the `content/` folder.

Lessons are grouped by topic using a two-level folder structure.

Each lesson folder contains:

- a `note/` subfolder with the corresponding `.html` file (the lecture note)

- optional `.js` or `.html` practice files

### Example:

```
notes/
├── index.html
├── server.js
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
content/
└── 01-html/
    └── 01-basic-html/
        └── 01-what-is-html/
            └── 01-what-is-html/
                ├── what-is-html.js
                └── note/
                    └── what-is-html.html
```

## Naming Conventions

All file and folder names use **lowercas**e and **kebab-case**.

Folder names reflect topic hierarchy (e.g., `html-basics`, `css-styling`).

File names reflect the specific lesson (e.g., `what-is-html.html`, `box-model.html`).

## Initial Minimum Viable Product (MVP)

- Display a Table of Contents (TOC) with all lessons.
- Load and render the selected lesson on click.
- Each lesson note includes:
  - A title
  - A short explanation
  - A code snippet or example

## Server Usage

The app runs locally using a Node.js server to simulate web behavior and file serving.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ilyindanny/freeCodeCamp-FullStack.git
```

Then open `index.html` in a browser via the local Node.js server.

### License

This repository is for personal educational use only. Not intended for commercial distribution.
