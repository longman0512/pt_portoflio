import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Software Engineer",
      company: "Gecko Dynamics — Kraków, Poland",
      period: "Jan 2024 - Present",
      description: "Lead frontend architecture with React/TypeScript, design modular component systems, integrate secure APIs across Node.js/NestJS/Laravel services, and optimize performance for high-traffic platforms. Partner with DevOps on AWS deployments and CI/CD improvements while mentoring engineers.",
      skills: ["React", "TypeScript", "Node.js", "Laravel", "AWS"]
    },
    {
      id: 2,
      position: "Full-Stack Software Engineer",
      company: "Memory Squad — Kraków, Poland",
      period: "May 2022 - Dec 2023",
      description: "Delivered full-stack features for a global e-commerce platform, improved Core Web Vitals, implemented secure checkout flows, and resolved backend bottlenecks impacting UX. Collaborated across design, backend, and marketing teams.",
      skills: ["React", "Node.js", "REST APIs", "SEO"]
    },
    {
      id: 3,
      position: "Software Engineer",
      company: "Cleveroad — Dnipro, Ukraine",
      period: "Oct 2018 - Apr 2022",
      description: "Built admin dashboards and internal tools, architected REST APIs with JWT/RBAC, integrated WebSockets for real-time features, and optimized PostgreSQL/MongoDB performance.",
      skills: ["React", "Express", "PostgreSQL", "WebSockets"]
    },
    {
      id: 4,
      position: "Web Developer",
      company: "Freshcode — Zaporizhzhia, Ukraine",
      period: "Nov 2016 - Sep 2018",
      description: "Developed responsive web applications and real-time features, improved database architecture, and delivered iterative production enhancements.",
      skills: ["JavaScript", "REST APIs", "Socket.IO", "MySQL"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title gradient-text">Experience Timeline</h2>
      <p className="section-subtitle">
        Professional experience building scalable web applications
      </p>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <div className="timeline-date">{exp.period}</div>
              <h3 className="timeline-position">{exp.position}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
