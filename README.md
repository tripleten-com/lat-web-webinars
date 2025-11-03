# Webinars Code Repository

This repository is exclusively dedicated to hosting and maintaining the source code used in the webinars delivered to students.  
It serves as a central location to organize, update, and demonstrate clean coding practices across all sessions.

---

## Table of Contents

1. [Purpose](#purpose)
2. [Repository Structure](#repository-structure)
3. [Coding Best Practices](#coding-best-practices)
4. [Version Updates](#version-updates)
5. [Recommended Workflow](#recommended-workflow)

---

## Purpose

Each folder in this repository represents a specific webinar session (for example, `Sprint 7`, `Sprint 8`, etc.), containing both the demo and the complete versions of the code covered during that session.

The main goals are:

- To provide clean and maintainable reference code for students.
- To ensure consistency and versioning between webinar materials.
- To make it easier to update past sessions if changes are introduced in future classes.

---

## Repository Structure
```
webinars-repo/
├── version-01/ # First version of the webinar repository
│ │ # Contains all sprints for this version
│ │ # Future versions will include folders like:
│ │ # version-2/, version-3/, etc.
│ │
│ ├── sprint-07/
│ │ ├── class/
│ │ │ ├── demo/ # Base code provided to students during the webinar
│ │ │ ├── complete/ # Final solution code after completing the webinar
│ │ │ └── README.md # Session details and notes
│ │ │
│ │ ├── project/
│ │ │ ├── demo/ # Base project code provided to students
│ │ │ ├── complete/ # Final project code after completing the webinar
│ │ │ └── README.md # Project description and notes
│ │
│ ├── sprint-08/
│ │ ├── class/
│ │ │ ├── demo/
│ │ │ ├── complete/
│ │ │ └── README.md
│ │ │
│ │ ├── project/
│ │ │ ├── demo/
│ │ │ ├── complete/
│ │ │ └── README.md
│ │
│ └── docs/
│ ├── guidelines.md # General coding standards and practices
│ └── changelog.md # Summary of updates applied across webinars
```

Each sprint folder should contain two versions of the code:

- **Demo**: The starting point shared with students during the webinar.
- **Complete**: The final implementation shown or achieved by the end of the webinar.

---

## Coding Best Practices

All code in this repository should follow these principles:

1. Write code that prioritizes clarity and readability.
2. Use consistent naming conventions and folder structures across all sprints.
3. Add comments only when they add context or meaning.
4. Keep commit messages clear and descriptive.
5. Do not hardcode secrets, tokens, or credentials.
6. Keep demo code minimal and focused on the core concepts students must implement.
7. Ensure complete code represents a functional, realistic implementation.
8. Document all updates or fixes applied to previous webinars in the changelog.

---

## Version Updates

Webinar content may evolve over time.  
If new features, improvements, or corrections are introduced in future classes, these changes should be reflected by:

- Updating the corresponding sprint folder (demo and/or complete versions).
- Adding a brief note in the `docs/changelog.md` file that includes:
    - Sprint number
    - Date
    - Description of the update

Example:
```
[Sprint X] – Updated on 2025-02-14
- Added new example for async/await refactoring
- Improved logging format in app.js
```

---

## Recommended Workflow

1. Create a new branch for each upcoming webinar sprint.
2. Prepare the demo version (base code for students).
3. Develop the complete version (final solution).
4. Review and test both versions before merging to `main`.
5. Tag each sprint using semantic naming (e.g., `sprint-07`, `sprint-08`).  
