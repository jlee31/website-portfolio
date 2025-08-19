import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Joseph Lee</span>
          </h1>
          <p className="hero-subtitle">
            I am a computer science student at the University of Waterloo
          </p>
          <p className="hero-description">
            I am working toward a double-major in Computer Science and Combinatorics & Optimization. 
            <br></br>
            Currently, I am working as an IT analyst at Environment and Climate Change Canada.
          </p>
           
          <div className="hero-buttons">
            {/* Primary button - learn more about you */}
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
              <ArrowRight size={20} />
            </Link>
            
            {/* Secondary button - view your work */}
            <Link to="/projects" className="btn btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="links-grid">
            {/* About Me Card */}
            <Link to="/about" className="quick-link-card">
              <div className="card-icon">
                <Code size={32} />
              </div>
              <h3>About Me</h3>
              <p> Learn more about me and feel free to reach out if you'd like to connect :) </p>
            </Link>
            
            {/* Projects Card */}
            <Link to="/projects" className="quick-link-card">
              <div className="card-icon">
                <Briefcase size={32} />
              </div>
              <h3>Projects</h3>
              <p>Explore my portfolio, technical achievements and my passions</p>
            </Link>
            
            {/* Blog Card */}
            <Link to="/blog" className="quick-link-card">
              <div className="card-icon">
                <BookOpen size={32} />
              </div>
              <h3>Blog</h3>
              <p>Read my thoughts on programming, exercise and more</p>
            </Link>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
