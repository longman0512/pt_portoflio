# AI Engineer Portfolio

A modern, responsive portfolio website for AI Engineers built with React.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🚀 Fast and lightweight
- 📊 Interactive tech stack visualization
- 📝 Contact form
- 🎯 Project showcase

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "d:\3.work\portfolio\2-26"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`)
   - Change name, title, and description
   - Update social icons

2. **About Section** (`src/components/About.js`)
   - Replace the profile image placeholder
   - Update bio text

3. **Projects Section** (`src/components/Projects.js`)
   - Add/remove/edit project cards
   - Update project descriptions and tags

4. **Experience Section** (`src/components/Experience.js`)
   - Update work experience entries
   - Modify timeline items

5. **Tech Stack Section** (`src/components/TechStack.js`)
   - Update programming languages and skill levels
   - Add/remove frameworks and tools

6. **Contact Section** (`src/components/Contact.js`)
   - Update email and phone number
   - Modify social media links

### Styling

All component styles are in their respective `.css` files:
- Global styles: `src/index.css` and `src/App.css`
- Component styles: `src/components/[ComponentName].css`

## Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section
│   ├── Hero.css
│   ├── About.js         # About section
│   ├── About.css
│   ├── Projects.js      # Projects showcase
│   ├── Projects.css
│   ├── Experience.js    # Experience timeline
│   ├── Experience.css
│   ├── TechStack.js     # Skills & technologies
│   ├── TechStack.css
│   ├── Contact.js       # Contact form
│   └── Contact.css
├── App.js               # Main component
├── App.css              # Global styles
├── index.js             # Entry point
└── index.css            # Base styles
```

## Deployment

Build the project for production:

```bash
npm run build
```

The optimized build will be in the `build/` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Technologies Used

- React 18
- CSS3 (with animations)
- React Hooks (useState)
- Modern ES6+ JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, reach out through the contact form on the website!
