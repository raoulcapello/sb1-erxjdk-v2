# Interactive Web Development Showcase

This project is an interactive showcase of web development technologies, demonstrating the progression from HTML to CSS to JavaScript. It was created using React with TypeScript and Vite, styled with Tailwind CSS, and enhanced with animations and interactive elements.

## Project Overview

The application cycles through four main views:

1. HTML view
2. CSS view
3. JavaScript view
4. Final view (combining all three)

Each view demonstrates a specific aspect of web development, with code examples and visual representations.

## Requirements

1. **View Progression:**
   - Automatically progress through HTML, CSS, and JavaScript views.
   - Each view is displayed for 2 seconds before moving to the next.
   - Users can manually progress using a next button.

2. **Code Display:**
   - Each view shows relevant code snippets.
   - Code is displayed in a styled block with syntax highlighting.

3. **Interactive Elements:**
   - Footer with a next button (right arrow icon) for manual progression.
   - Next button has a hover effect with gradient coloring and glow.

4. **Final View:**
   - Displays all three examples (HTML, CSS, JavaScript) in one row.
   - Includes a restart button to refresh the page.

5. **Typewriter Effect:**
   - Applied to the 'Hello, JS!' title in the JavaScript and Final views.
   - In the Final view, the typewriter effect restarts every 2 seconds.

6. **Responsive Design:**
   - Layouts adjust for different screen sizes.
   - Utilizes Tailwind CSS for responsive styling.

7. **Animations:**
   - Fade-in and slide-up animations for view transitions.
   - Gradient animations for buttons and text effects.

8. **Accessibility:**
   - Semantic HTML structure.
   - Keyboard navigable interface.

9. **Performance:**
   - Efficient React component structure.
   - Optimized for smooth animations and transitions.

10. **Code Quality:**
    - TypeScript for type safety.
    - ESLint for code linting.
    - Modular and reusable component structure.

## Deployment and Versioning

This project is deployed using Netlify. Each deployment creates a new version of the site.

### Saving a Version
Every time changes are pushed and deployed, Netlify automatically saves that version.

### Tagging a Version
While we don't have direct Git access in this environment, we can use Netlify's deploy labels to mark important versions.

### Rolling Back
To revert to a previous version:
1. Access the Netlify dashboard.
2. Navigate to the Deploys section.
3. Find the desired previous deploy.
4. Click on the three-dot menu next to it.
5. Select "Publish deploy" to roll back to that version.

## Viewing the Project

The latest version of the project can be viewed at: https://relaxed-mandazi-5543e4.netlify.app

This project serves as both a learning tool and a demonstration of modern web development techniques, showcasing the power and interactivity possible with current web technologies.