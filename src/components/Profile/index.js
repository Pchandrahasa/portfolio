import React from 'react';
import './index.css'; // Importing the CSS file for styling
import Projects from '../project';
import ContactUs from '../contact';
import Contactinfo from '../contactinfo'

import chandrahasa from '../../assets/chandrahasa.jpg';
import education from '../../assets/education.png';
import checkmark from '../../assets/checkmark.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Profile = () => (
  <div>
    {/* Desktop Navigation */}
    <nav id="desktop-nav">
      <div className="logo">Chandrahasa Pabbathi</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    {/* Profile Section */}
    <section id="profile">
      <div className="section__pic-container">
        <img src={chandrahasa} alt="Chandrahasa Pabbathi profile" className="chandrahasa-image" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Chandrahasa Pabbathi</h1>
        <p className="section__text__p2">Fullstack Developer</p>
        <p>I have a passion for frontend development, specializing in HTML, CSS, React, and JavaScript. I deliver seamless user experiences and create innovative web solutions like ecommerce platforms and engaging games. I am seeking to contribute my expertise in design and interactivity to a dynamic team.</p>
        <div className="btn-container">
          <button className="btn btn-color-2">Download CV</button>
          <a href="#contactinfo"><button className="btn btn-color-1">Contact Info</button></a>
        </div>
        <div id="socials-container">
          <a href="https://github.com/Pchandrahasa"><img src={github} alt="My Github profile" className="icon" /></a>
          <a href="https://www.linkedin.com/in/chandrahasa-pabbathi/"><img src={linkedin} alt="My Github profile" className="icon" /></a>
          
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Bachelor of Technology (CSE)</span><br />SRM University of Science and Technology</p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Board of Intermediate (MPC)</span><br />Sri Chaitanya Junior College</p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p><span>Secondary School Certificate (SSC)</span><br />CSR Additya School</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Database</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Springboot</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects">
      <Projects/>
    </section>

   
    <section id="contact">
      <ContactUs />
    </section>

    <section id="contactinfo">
      <Contactinfo />
    </section>


  </div>
);

export default Profile;
