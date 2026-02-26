import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const programmingLanguages = [
    { name: "JavaScript (ES6+)", level: 90, color: "#f7df1e" },
    { name: "TypeScript", level: 85, color: "#3178c6" },
    { name: "PHP 8", level: 85, color: "#8892bf" },
    { name: "Python", level: 80, color: "#3776ab" }
  ];

  const aiFrameworks = [
    { name: "React / Next.js", level: 90, color: "#61dafb" },
    { name: "Vue.js", level: 80, color: "#42b883" },
    { name: "Node.js / Express", level: 88, color: "#68a063" },
    { name: "Laravel", level: 82, color: "#ff2d20" }
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <h2 className="section-title gradient-text">Tech Stack</h2>
      <p className="section-subtitle">
        Technologies and tools I use to build scalable web applications
      </p>
      
      <div className="tech-grid">
        <div className="tech-category card">
          <h3 className="category-title">Programming Languages</h3>
          <div className="skills-list">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category card">
          <h3 className="category-title">AI/ML Frameworks</h3>
          <div className="skills-list">
            {aiFrameworks.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="additional-skills">
        <h3 className="additional-title">Additional Skills & Tools</h3>
        <div className="skills-tags">
          <span className="tag">REST APIs</span>
          <span className="tag">GraphQL</span>
          <span className="tag">Microservices</span>
          <span className="tag">WebSockets</span>
          <span className="tag">JWT / OAuth2</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Redis</span>
          <span className="tag">AWS</span>
          <span className="tag">Docker</span>
          <span className="tag">Kubernetes</span>
          <span className="tag">CI/CD</span>
          <span className="tag">Jest / Cypress</span>
          <span className="tag">TDD / BDD</span>
          <span className="tag">Stripe / Twilio</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
