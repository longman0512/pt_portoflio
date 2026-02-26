import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title gradient-text">About Me</h2>
      <p className="section-subtitle">
        Senior Software Engineer with 8+ years building scalable web platforms.
      </p>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image">
            {/* Replace with actual image */}
            <div className="image-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="about-text">
          <p>
            I design, build, and maintain high-traffic web applications for international
            clients across e-commerce, wellness, and enterprise platforms. My backend-first
            mindset helps me deliver reliable systems with clean APIs, strong performance,
            and excellent SEO.
          </p>
          <p>
            My core stack includes PHP (Laravel), Node.js, and Python (Django), paired with
            modern frontend frameworks like React.js, Vue.js, and React Native. I enjoy
            owning features end-to-end, from requirements to production.
          </p>
          <p>
            Education: B.S. Computer Science (2013) and M.S. Economics (2016),
            Alfred Nobel University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
