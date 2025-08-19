# 🚀 Personal Website - React + Vite

A beautiful, modern personal website built with React and Vite, featuring a dark theme and responsive design.

## ✨ Features

- **🌙 Dark Theme** - Beautiful black background with purple/blue accents
- **📱 Fully Responsive** - Works perfectly on all devices
- **🧭 Navigation** - Fixed header with smooth scrolling navigation
- **📄 Multiple Pages** - Home, About, Projects, and Blog
- **🎨 Modern UI** - Smooth animations, gradients, and hover effects
- **⚡ Fast Performance** - Built with Vite for optimal development experience

## 🏗️ Project Structure

```
personal-site/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Header.jsx      # Navigation header component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About me page
│   │   ├── Projects.jsx    # Portfolio showcase
│   │   └── Blog.jsx        # Blog posts page
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # Main stylesheet with dark theme
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global base styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd personal-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 How It Works

### 1. **App.jsx** - Main Application
- Sets up React Router for navigation between pages
- Renders the Header component on all pages
- Manages routing between Home, About, Projects, and Blog

### 2. **Header.jsx** - Navigation
- Fixed navigation bar at the top of every page
- Desktop menu with active page highlighting
- Mobile-responsive hamburger menu
- Logo that links back to home page

### 3. **Home.jsx** - Landing Page
- Hero section with your name and introduction
- Call-to-action buttons
- Quick links to main sections

### 4. **About.jsx** - Personal Information
- Personal story and background
- Profile card with photo and social links
- Skills organized by category
- Social media links

### 5. **Projects.jsx** - Portfolio
- Featured projects section
- Grid of all projects
- Technology tags for each project
- Links to live demos and source code

### 6. **Blog.jsx** - Articles
- Featured blog post
- Sidebar with categories and recent posts
- Grid of all blog posts
- Reading time and date information

## 🎨 Customization Guide

### Personal Information
1. **Update your name** in `Header.jsx` and `About.jsx`
2. **Add your photo** in `About.jsx` (replace profile placeholder)
3. **Update social links** in `About.jsx` with your actual profiles
4. **Modify personal story** in `About.jsx`

### Projects
1. **Replace sample projects** in `Projects.jsx` with your real work
2. **Update project descriptions** and technologies
3. **Add real project images** (replace placeholders)
4. **Update GitHub and demo links**
5. **Mark your best projects as featured**

### Blog
1. **Replace sample posts** in `Blog.jsx` with your actual content
2. **Update categories** to match your content
3. **Add real blog post content**
4. **Modify featured post selection**

### Styling
1. **Colors**: Modify CSS variables in `App.css` (lines 8-17)
2. **Fonts**: Change font imports in `index.css`
3. **Layout**: Adjust grid layouts and spacing in `App.css`

## 🎨 Color Scheme

The website uses a sophisticated dark theme with these colors:

```css
--bg-primary: #0a0a0a      /* Main background (very dark) */
--bg-secondary: #111111     /* Secondary background */
--bg-tertiary: #1a1a1a     /* Card backgrounds */
--text-primary: #ffffff     /* Main text (white) */
--text-secondary: #b3b3b3  /* Secondary text */
--accent-primary: #6366f1   /* Primary accent (indigo) */
--accent-secondary: #8b5cf6 /* Secondary accent (purple) */
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: < 480px - Single column layout, mobile menu
- **Tablet**: 480px - 768px - Adjusted spacing and layouts
- **Desktop**: > 768px - Full desktop experience with sidebar

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint for code quality
```

## 📦 Dependencies

### Core Dependencies
- **React 19** - UI library
- **React Router DOM** - Navigation and routing
- **Lucide React** - Beautiful icons

### Development Dependencies
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **TypeScript types** - Type definitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Run `npm run build`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages in repository settings

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check for syntax errors
   npm run lint
   # Clear build cache
   rm -rf dist
   npm run build
   ```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with modern CSS
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Happy coding! 🎉**

If you have any questions or need help customizing your website, feel free to reach out!
