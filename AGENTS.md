# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands
- **No build system**: Static HTML/CSS/JS website
- **Single test run**: No testing framework configured
- **Lint**: No linter configured - manually review code

## Code Style Guidelines

### JavaScript
- Use ES6+ features: arrow functions, template literals, destructuring
- Strict mode required: `"use strict";`
- camelCase for variables/functions: `navbarInit`, `getData`
- Error handling: try/catch for data parsing
- 2-space indentation, consistent formatting

### HTML
- Semantic HTML5 elements
- Proper accessibility: alt text, ARIA labels
- Consistent indentation (2 spaces)
- Meta tags for SEO and social sharing

### CSS
- CSS variables for colors: `var(--primary-color)`
- Bootstrap utility classes
- kebab-case class names: `.enquiry-btn`
- Consistent spacing and formatting

### Naming Conventions
- **JS**: camelCase for all identifiers
- **CSS**: kebab-case for classes, camelCase for variables
- **Files**: lowercase with hyphens: `common.js`, `theme.css`

### Imports & Dependencies
- No module bundler - direct script includes
- Vendor libraries in `/vendors/` directory
- Custom JS in `/assets/js/`

### Error Handling
- Try/catch for JSON parsing and DOM operations
- Graceful fallbacks for missing elements
- Console logging for debugging (remove in production)