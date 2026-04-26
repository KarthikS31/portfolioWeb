import React from 'react';
import { useSelector } from 'react-redux';
import './About.css';
import Loader from '../Components/Loader';

function About() {
  const { education, experience, loading, about } = useSelector((state) => state.portfolio);

  if (loading) return <Loader />;

  const renderConnectedCards = (data, title, icon) => (
    <div className="about-group">
      <h4 className="section-title"><i className={`pi ${icon}`}></i> {title}</h4>
      <div className="vertical-thread">
        {data?.map((item, index) => (
          <div className="connected-card" key={index}>
            <div className="thread-dot"></div>
            <div className="card-content">
              <div className="card-header">
                <h3>{item.role}</h3>
                <span className="card-year">{item.year}</span>
              </div>
              <p className="card-institution">{item.institution}</p>
              <p className="card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>About <span>Me</span></h1>
        
        <p className="about-intro">
          {about?.desc}
        </p>

        {renderConnectedCards(experience, "Experience", "pi-briefcase")}
        {renderConnectedCards(education, "Education", "pi-graduation-cap")}
      </div>
    </section>
  );
}

export default About;