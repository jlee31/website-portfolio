/**
 * Main App Component - Personal Website
 * 
 * This is the root component that sets up the entire application structure.
 * It includes:
 * - React Router for navigation between pages
 * - Header component that appears on all pages
 * - Main content area that changes based on the current route
 * 
 * File Structure:
 * - Header: Fixed navigation bar at the top
 * - Main Content: Dynamic content area that renders different pages
 * - Routes: Four main pages (Home, About, Blog, Projects)
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        {/* Main content area - changes based on current route */}
        <main className="main-content">
          {/* Routes define which component to show based on URL */}
          <Routes>
            {/* Home page - shown when user visits "/" */}
            <Route path="/" element={<Home />} />
            
            {/* About page - shown when user visits "/about" */}
            <Route path="/about" element={<About />} />
            
            {/* Blog page - shown when user visits "/blog" */}
            <Route path="/blog" element={<Blog />} />
            
            {/* Projects page - shown when user visits "/projects" */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
