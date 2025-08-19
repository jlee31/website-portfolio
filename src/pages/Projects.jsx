import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with react and vite for optimal performance.",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
      image: "/screenshot.png",
      github: "https://github.com/yourusername/personal-site",
      live: "https://yourwebsite.com",
      featured: false  
    },
    {
      id: 2,
      title: "Image Lab",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com",
      featured: true
    },
    {
      id: 3,
      title: "Magestic Brawl",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/yourusername/task-app",
      live: "https://your-task-app.com"
    },
    {
      id: 4,
      title: "Math Plotter",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/yourusername/task-app",
      live: "https://your-task-app.com"
    },
    
  ];

  return (
    <div className="projects">
      <div className="container">
        {/* Page Header */}
        <section className="projects-hero">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">here are some of the things i've been working on</p>
        </section>

        {/* Featured Projects Section - Highlight your best work */}
        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {/* Filter projects marked as featured and display them prominently */}
            {projects.filter(project => project.featured).map(project => (
              <div key={project.id} className="project-card featured">
                {/* Project Image */}
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-placeholder" style={{ display: 'none' }}>
                    <span>{project.title}</span>
                  </div>
                </div>
                
                {/* Project Information */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {/* Technology Tags */}
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      Code
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Globe size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects Section - Complete portfolio */}
        <section className="all-projects">
          <h2>All Projects</h2>
          <div className="projects-grid">
            {/* Display all projects in a responsive grid */}
            {projects.map(project => (
              <div key={project.id} className="project-card">
                {/* Project Image */}
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-placeholder" style={{ display: 'none' }}>
                    <span>{project.title}</span>
                  </div>
                </div>
                
                {/* Project Information */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {/* Technology Tags */}
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
