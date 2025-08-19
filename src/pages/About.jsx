import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-hero">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know me better</p>
        </section>

        {/* Main Content - Two-column layout */}
        <section className="about-content">
          <div className="about-grid">
            {/* Left Column - Personal Information */}
            <div className="about-text">
              <h2>who I am</h2>
              <p>
                I'm a passionate developer with a love for creating meaningful digital experiences. 
                I believe in writing clean, maintainable code and building solutions that solve real problems.
              </p>
              
              <p>
                To me, the most important thing about programming is passion. Right now, I am interested in Machine Learning and AI. 
              </p>

              <h3>things I love</h3>
              <ul>
                <li>playing sports</li>
                <li>cooking</li>
                <li>walking my dog</li>
              </ul>
            </div>

            {/* Right Column - Profile Card */}
            <div className="about-sidebar">
              <div className="profile-card">
                <div className="profile-image">
                  {/* Add your photo here - place it in the public folder */}
                  <img 
                    src="/photofme.jpg" 
                    alt="Joseph Lee" 
                    className="profile-photo"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-placeholder" style={{ display: 'none' }}>
                    <span>Your Photo</span>
                  </div>
                </div>
                
                
                {/* Social Media Links */}
                <div className="social-links">
                  {/* Email Link */}
                  <a href="mailto:hijosephl31@gmail.com" className="social-link" title="Email me">
                    <Mail size={20} />
                  </a>
                  
                  {/* GitHub Profile */}
                  <a href="https://github.com/jlee31" className="social-link" title="GitHub Profile">
                    <Github size={20} />
                  </a>
                  
                  {/* LinkedIn Profile */}
                  <a href="https://www.linkedin.com/in/josephjl31/" className="social-link" title="LinkedIn Profile">
                    <Linkedin size={20} />
                  </a>
                  
                  {/* Personal Website */}
                  <a href="https://yourwebsite.com" className="social-link" title="Personal Website">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Organized by category */}
        <section className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {/* Frontend Skills */}
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="skill-category">
              <h3>Frameworks and Environments</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">Numpy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Matplotlib</span>
              </div>
            </div>
            
            {/* Tools and Other Skills */}
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Gitlab</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">SAP</span>
                <span className="skill-tag">ServiceNow</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
