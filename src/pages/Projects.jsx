import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with react and vite for optimal performance.",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
      image: "/screenshot.png",
      github: "https://github.com/jlee31/website-portfolio",
      live: "https://google.ca",
      featured: false  
    },
    {
      id: 2,
      title: "Image Lab",
      description: "Full-stack desktop image processing application with real-time filters, advanced computer vision algorithms, and professional-grade photo editing capabilities.",
      technologies: ["Python", "OpenCV", "Tkinter", "Numpy", "Pillow"],
      image: "/imagelab.gif",
      github: "https://github.com/jlee31/image-lab",
      live: "/imagelab.gif",
      featured: true
    },
    {
      id: 3,
      title: "Magestic Brawl",
      description: "A 2D street-fighting game developed in Pygame, featuring frame-precise hit detection, optimized animation pipelines with sprite sheets, delta-time based movement for consistent physics, and rendering optimizations to maintain gameplay.",
      technologies: ["Python", "Pygame", "Sprite Sheets", "NumPy"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/jlee31/MagesticBrawl",
      live: "https://your-task-app.com"
    },
    
    {
      id: 4,
      title: "Math Plotter",
      description: "A Desmos-style graphing app in Pygame that plots multiple functions and complex expressions in real time, shows mouse coordinates, highlights zeros/minima/maxima/inflection points, includes rich appearance controls, and supports saving/exporting—wrapped in a custom, keyboard-friendly UI.",
      technologies: ["Python", "Pygame", "SymPy", "NumPy"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/jlee31/math-plotter",
      live: "https://your-task-app.com"
    },
    {
      id: 5,
      title: "Extended Pydew Valley (Stardew Valley Clone)",
      description: "A Stardew Valley–inspired farming and life-simulation game built in Python with Pygame. The project is structured for extensibility, with modular systems for farming, inventory, NPCs, and world interactions. Extended the clear code tutorial by adding new mechanics such as custom events, procedural crops, dynamic weather, crafting, and mini-games.",
      technologies: ["Python", "Pygame", "Tiled Map Editor", "OOP Architecture"],
      image: "/project-placeholder.jpg",
      github: "https://github.com/jlee31/PygameGames",
      live: "https://your-task-app.com"
    },
    {
    id: 6,
    title: "FaithVerse – Christian Verse Recommendation App",
    description: "A Christianity-focused application where users can enter a prompt and receive relevant Bible verses, complete with thematic reflections. Built with a React frontend and Flask backend, the app leverages semantic search with embeddings and an optional GPT-based wrapper to provide personalized devotional insights. Structured for scalability with modular components for verse retrieval, theme-based reranking, and AI-powered reflections.",
    technologies: ["React", "Vite", "Flask", "Python", "OpenAI GPT API", "Sentence-Transformers", "Vector Database (FAISS/Pinecone)"],
    image: "/faithverse-placeholder.jpg",
    github: "https://github.com/jlee31/faithverse",
    live: "https://faithverse.app"
    },
    {
    id: 7,
    title: "InspireQuotes – Quote Recommendation App",
    description: "An extension of FaithVerse that allows users to enter a prompt and receive curated inspirational or motivational quotes, complete with AI-generated reflections. Reuses the same React + Flask + ML architecture, with semantic search and GPT integration for natural, personalized explanations. Designed to handle multiple categories, authors, and themes for broader content beyond Bible verses.",
    technologies: ["React", "Vite", "Flask", "Python", "OpenAI GPT API", "Sentence-Transformers", "Vector Database (FAISS/Pinecone)"],
    image: "/inspirequotes-placeholder.jpg",
    github: "https://github.com/jlee31/inspirequotes",
    live: "https://inspirequotes.app"
    }
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
