import React from 'react';
import { useSelector } from 'react-redux';
import "./Home.css";
import profileImg from "../assets/Profile-img.jpeg";
import Loader from '../Components/Loader';

function Home() {
  const { social, about, loading } = useSelector((state) => state.portfolio);

  if (loading) return <Loader />;
  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="overlay"></div>

        <div className="hero-blob-wrapper">
          <img src={profileImg} alt="profile" className="hero-image" />
        </div>
        <div className="home-container">
          <h1 className="welcome">WELCOME</h1>

          <h2>
            Hi, I'm <span>Karthik</span>
          </h2>

          {/* ✅ fixed valid structure */}
          <h4>Frontend Developer (React) & Java Developer.</h4>
          <p>{about?.summary}</p>

          <div className="home-buttons">
            <a href={about?.resume} target="_blank" rel="noreferrer">
              Resume
            </a>

            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p className="connect-text">Feel free to connect with me!</p>

        <div className="social-icons">
          {social?.map((item, index) => (
            <a key={index} href={item.links} target="_blank" rel="noreferrer">
              <i className={item.icon}></i>
            </a>
          ))}
        </div>

        <div className="contact-details">
          <p> Coimbatore, India</p>
        </div>
      </section>
    </>
  );
}

export default Home;