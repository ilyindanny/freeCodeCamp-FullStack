# My freeCodeCamp Notes — Project Manifest

> _Created: April 2025 • Version: 1.1 • Author: Danil Ilin_

## Project Goal

Create a simple and flexible web application for maintaining personal notes related to freeCodeCamp courses.  
The project is hosted locally using a lightweight Node.js server serving static files.

## Features

- Fully responsive layout
- Dynamically generated Table of Contents
- Lightweight and fast loading
- Easy addition of new lessons without code modifications

## Project Philosophy

- Focus on **concise, clear notes** with minimal explanations
- Include only information necessary for correct understanding and application
- Use **compact code examples** to illustrate concepts
- No rhetorical questions, spoilers, or lengthy discussions — only essential content

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (without frameworks)
- Node.js server (Node.js Lab app on iOS)

---

## Project Structure

```
my-fcc-notes/
├── index.html               # Main page of the application
├── README.md                # Project description
└── assets/                  # Static files for the frontend
    ├── css/                 # Styles for the frontend
    │   └── style.css
    ├── js/                  # Scripts for the frontend
    │   └── script.js
    ├── img/                 # Images
└── lessons/                 # Lessons organized by categories
    ├── html/
    │   ├── html-basic/
    │   │   └── lesson.html
    ├── css-styling/
    │   ├── selectors.html
    │   ├── positioning.html
└── server/                  # Server-side part of the project
    └── server.js            # Main server file
    └── ...

```

## Lessons Organization

- Each **main topic** (e.g., "HTML Basics", "CSS Styling") has its own subfolder inside the `lessons/` directory.
- Each **individual lesson** is stored as a separate `.html` file inside the appropriate topic folder.
- Lessons are **automatically loaded** by `script.js` without the need for manual updates.

---

## Naming Conventions

- All **folder and file names** must be written in **lowercase**, with words separated by hyphens (`-`).
- Folder names represent main topics (e.g., `html-basics`, `css-styling`).
- File names represent individual lessons (e.g., `introduction.html`, `selectors.html`).

Example:

```
lessons/html/html-basics/basic-elements.html
```

## Initial Minimum Viable Product (MVP)

- Display a Table of Contents (TOC) listing all available lessons.
- Allow users to click a lesson to load and view its content.
- Each lesson should include:
  - A lecture title
  - A brief explanation
  - A code example

## Adding New Lessons

1. Create a new topic folder inside `lessons/` if necessary.
2. Add a new `.html` file inside the appropriate topic folder.
3. No need to manually update the TOC — it is generated dynamically.

---

## Server Usage

The project runs locally on a Node.js server (Node.js Lab app on iOS) to simulate a real web application environment.

## Getting Started

To get started, clone the repository to your local machine using:

```bash
git clone https://github.com/ilyindanny/freeCodeCamp-FullStack.git
```

## License

This project is licensed for personal educational use only and is not intended for commercial purposes.
