# My freeCodeCamp Notes — Project Manifest
> _Created: April 2025 • Version: 1.0 • Author: Danil Ilin_

## Project Goal

Create a simple and flexible web application for maintaining personal notes related to the freeCodeCamp courses.
The project will be hosted locally via a lightweight Node.js server serving static files.

## Features
- Fully responsive layout
- Dynamically generated Table of Contents
- Lightweight and fast loading
- Easy addition of new lessons without code modification

## Future Improvements
- Implement search functionality across all lessons
- Add support for Markdown lesson files
- Enable dark/light theme switching

---

## Technologies Used
-	HTML5
-	CSS3
-	Vanilla JavaScript (without frameworks)
-	Node.js server (Node.js Lab app on iOS)

---

## Project Structure

```
my-fcc-notes/
├── index.html
├── script.js
├── style.css
├── README.md
└── lessons/
    ├── html/
    │   ├── html-basic/
    │   │   └── lesson.html
    ├── css-styling/
    │   ├── selectors.html
    │   ├── positioning.html
    └── ...
```


## Lessons Organization
- 	Each main topic (e.g., "HTML Basics", "CSS Styling") will have its own subfolder inside `lessons/` directory.
-	Each **individual lecture** will be stored in a separate `.html` file inside the corresponding topic folder.
-	Lessons will be **automatically loaded** by the `script.js` without the need for a manual list or index file.

---

## Naming Conventions
-	All **folder names** and **file names** must be written in **lowercase**, words separated by hyphens (-).
-	Folder names represent the main topic (e.g., `html-basics`, `css-styling`).
- File names represent individual lectures (e.g., `introduction.html`, `selectors.html`).

Example:
```
lessons/html/html-basics/basic-elements.html
```


## Initial Minimum Viable Product (MVP)
- Display a Table of Contents (TOC) listing all available lessons.
-	Allow clicking on a lesson to load and display its content.
- Each lesson will contain the following elements:
    - Lecture title
    - Explanation text
    - Code example
    - Self-check questions with answers hidden inside collapsible sections



## Adding New Lessons
1. Create a new topic folder inside `lessons/` if needed.
2. Add a new `.html` file inside the correct topic folder.
3. No need to manually update the TOC — it will be dynamically generated.

---

## Server Usage

The project will be hosted locally using a Node.js server (Node.js Lab app on iOS) to simulate a real web application environment.


## Getting Started

To get started, clone the repository to your local machine by running the following command:

```bash
git clone https://github.com/ilyindanny/freeCodeCamp-FullStack.git
```

## License

This project is licensed for personal educational use only and is not intended for commercial purposes.