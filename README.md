# Modern Portfolio Website

A sleek, modern, and minimalist portfolio website built with React, Vite, and Tailwind CSS. This responsive website showcases skills, projects, certificates, and contact information with smooth animations and a dark/light mode toggle.

## Features

- **Modern Minimalist Design**: Clean, elegant UI with thoughtful spacing and typography
- **Responsive Layout**: Works perfectly on all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between color schemes with persistent preference
- **Smooth Animations**: Subtle animations enhance the user experience
- **Multiple Sections**:
  - Hero section with call-to-action buttons
  - About section with personal information
  - Portfolio section showcasing projects
  - Skills section with progress bars
  - Certificates section displaying achievements
  - Contact form with social media links
  - Footer with quick navigation
- **Smooth Scrolling**: Enhanced navigation experience
- **Tailwind CSS**: Utility-first CSS framework for styling

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- CSS3
- HTML5

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/msikkc21/webPortfolio.git
   cd webPortfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to http://localhost:5173

## Project Structure

```
webPortfolio/
├── public/             # Static assets
│   ├── assets/         # Images and icons
│   └── vite.svg        # Vite logo
├── src/                # Source files
│   ├── assets/         # Project assets
│   ├── Components/     # Reusable components
│   │   ├── Navbar.jsx  # Navigation bar
│   │   ├── PortfolioCard.jsx # Project cards
│   │   ├── Popup.jsx   # Popup component
│   │   └── ScrollToTop.jsx # Scroll utility
│   ├── Sections/       # Page sections
│   │   ├── About.jsx   # About section
│   │   ├── Certificates.jsx # Certificates section
│   │   ├── Contact.jsx # Contact section
│   │   ├── Footer.jsx  # Footer section
│   │   ├── Hero.jsx    # Hero section
│   │   ├── Portofolio.jsx # Portfolio section
│   │   └── Skills.jsx  # Skills section
│   ├── App.css         # App-specific styles
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Git ignore file
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Customization

1. Replace the content in the sections with your own information
2. Update images in the public/assets directory
3. Modify color schemes in tailwind.config.js
4. Add or remove sections as needed

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static site hosting service like GitHub Pages, Netlify, Vercel, etc.

## License

This project is licensed under the MIT License

## Acknowledgments

- Design inspired by modern portfolio trends
- Icons from various free sources
