import React from 'react';
import { useSelector } from 'react-redux';
import './Projects.css';
import Loader from '../Components/Loader';

function Projects() {
  const { projects, loading } = useSelector((state) => state.portfolio);

  if (loading) return <Loader/>;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <i className="pi pi-folder-open"></i> Projects
        </h2>
        
        <div className="projects-grid">
          {projects?.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="tech-stack">
                  {project.tech?.split(',').map((tech, i) => (
                    <span key={i} className="tech-badge">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;