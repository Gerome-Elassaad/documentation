# Contributing to Repo-Booster Documentation

Thank you for your interest in contributing to the **Repo-Booster Documentation**! Documentation plays a vital role in helping users understand and use the project effectively. Your contributions are greatly appreciated!

This guide provides instructions for contributing to a **Nuxt.js**-based documentation site.

---

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Getting Started](#getting-started)
3. [Submitting Changes](#submitting-changes)
4. [Documentation Style Guide](#documentation-style-guide)
5. [Code of Conduct](#code-of-conduct)

---

## How to Contribute

### Reporting Issues
- Found a typo, broken link, or confusing section? [Open an issue](https://github.com/Repo-Booster/documentation/issues/new).
- Clearly describe the issue and, if possible, suggest a solution.

### Suggesting New Sections
- Think a topic is missing or under-documented? [Propose it as a new feature request](https://github.com/Repo-Booster/documentation/issues/new).
- Provide a brief overview of the new section and why it’s valuable.

### Improving Existing Content
- Found a way to make the documentation clearer or more user-friendly? Submit your suggestions as a pull request.

---

## Getting Started

### Prerequisites
1. Ensure the following tools are installed on your system:
   - [Git](https://git-scm.com/)
   - [Node.js](https://nodejs.org/)
   - [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

2. Fork the repository:
   - Click the **Fork** button in the [Repo-Booster Documentation repository](https://github.com/Repo-Booster/documentation).

3. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/documentation.git
   ```

4. Navigate into the project directory:
   ```bash
   cd documentation
   ```

5. Install dependencies:
   ```bash
   pnpm install
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:3000`.

---

## Submitting Changes

### Steps to Submit Changes
1. Create a new branch:
   ```bash
   git checkout -b docs/your-change-description
   ```

2. Make your edits to the relevant files in the `content` or `pages` directory, depending on your site structure.

3. Test your changes locally by running the development server:
   ```bash
   pnpm dev
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Update [section] for clarity"
   ```

5. Push your branch:
   ```bash
   git push origin docs/your-change-description
   ```

6. Open a pull request:
   - Go to the [Repo-Booster Documentation repository](https://github.com/Repo-Booster/documentation).
   - Navigate to **Pull Requests** > **New Pull Request**.
   - Select your branch as the source and `main` as the target.
   - Add a detailed description of your changes.

---

## Documentation Style Guide

To maintain consistency across the documentation, please follow these guidelines:

1. **Language**:
   - Use simple and concise language.
   - Write in an active voice (e.g., "Click the button" instead of "The button should be clicked").

2. **Markdown**:
   - Use proper Markdown syntax.
   - Organize content with headings (`#`, `##`, `###`).
   - Use lists (`-` or `1.`) where appropriate.

3. **Code Blocks**:
   - Use fenced code blocks for any code or terminal commands:
     ```bash
     pnpm install
     ```

4. **Links**:
   - Use relative links for internal references (e.g., `/getting-started`).
   - Use full URLs for external references.

5. **Examples and Screenshots**:
   - Add examples or screenshots whenever possible to make concepts clearer.

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you agree to maintain a respectful and inclusive environment. For any issues, contact [support@repo-booster.com].

---

## Need Help?

If you encounter any issues or have questions, feel free to:
- [Open an issue](https://github.com/Repo-Booster/documentation/issues).
- Email us at [support@repo-booster.com].

---

Thank you for contributing to the **Repo-Booster Documentation**! Your effort makes a big difference in helping others use this project effectively. 🚀
