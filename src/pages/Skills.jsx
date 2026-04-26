import React from 'react';
import { useSelector } from 'react-redux';
import './Skills.css';
import Loader from '../Components/Loader';

function Skills() {
  const { skills, certificates, loading } = useSelector((state) => state.portfolio);

  if (loading) return <Loader />;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* CERTIFICATIONS SECTION - Strictly Name and Link */}
        {certificates && certificates.length > 0 && (
          <div className="certs-wrapper">
            <h2 className="section-title">Certifications</h2>
            <div className="certs-list">
              {certificates.map((cert, index) => (
                <div className="cert-row" key={index}>
                  <h3>{cert.name}</h3>
                  {cert.links && (
                    <a href={cert.links} target="_blank" rel="noreferrer" className="cert-link-icon">
                      <i className="pi pi-external-link"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECHNICAL SKILLS SECTION - Remaining exactly as it was */}
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {skills?.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`${skill.icon} skill-icon`}></i>
              <div className="skill-details">
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;