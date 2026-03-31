import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Code2, Zap, TrendingUp, Cloud } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'LLM Chatbot Performance Engineering',
      org: 'PwC AI Observability Initiative',
      impact: 'Identified latency bottlenecks in LLM inference pipeline',
      metrics: ['TTFT optimization', 'Token throughput tracking', 'Cost estimation'],
      tech: ['JMeter', 'WebSocket', 'LangSmith', 'Datadog', 'Azure AKS'],
      description: 'Pioneered performance testing framework for enterprise LLM chatbot using WebSocket protocol. Tracked TTFT, total response latency, and per-session costs across multiple Claude and GPT models.',
      highlight: 'Enabled data-driven model selection (Claude 3 Haiku recommended for lowest TTFT + cost)'
    },
    {
      title: 'RLI Insurance Portal',
      org: 'End-to-End Performance Engineering',
      impact: '25% login response time improvement',
      metrics: ['Response time reduction', 'JVM tuning', 'DB optimization'],
      tech: ['JMeter', 'OctoPerf', 'Dynatrace', 'Azure AKS', 'SQL Server'],
      description: 'Designed comprehensive performance testing strategy covering load, stress, spike, and endurance scenarios. Identified and resolved bottlenecks across API gateway, microservices, and database tiers.',
      highlight: 'Direct user experience improvement through targeted JVM and microservice-level optimization'
    },
    {
      title: 'US Banking High-Volume Testing',
      org: 'Regulatory Performance Testing',
      impact: '40% database optimization',
      metrics: ['50,000+ concurrent users', 'Query optimization', 'Index restructuring'],
      tech: ['JMeter', 'LoadRunner', 'AWS EC2', 'Datadog', 'Oracle'],
      description: 'Simulated 50,000+ concurrent users for core banking workflows on distributed architecture. Implemented elastic load generation with AWS auto-scaling for cost-efficient test execution.',
      highlight: '40% database performance improvement through SQL optimization and index tuning'
    },
    {
      title: 'OmniStore Retail Microservices',
      org: 'Kubernetes Scalability Validation',
      impact: '35% JVM optimization',
      metrics: ['15+ microservices', 'HPA validation', 'GC optimization'],
      tech: ['JMeter', 'Dynatrace', 'Kubernetes EKS/AKS', 'Kafka'],
      description: 'Validated horizontal pod autoscaling (HPA) behavior for 15+ microservices under sustained and spike load. Identified and resolved critical JVM issues through deep-dive profiling.',
      highlight: 'Established performance baselines and eliminated GC pauses, memory leaks, and thread contention'
    }
  ];

  const skills = [
    {
      category: 'Performance Testing',
      items: ['JMeter (Advanced)', 'LoadRunner', 'NeoLoad', 'OctoPerf', 'BlazeMeter'],
      icon: Zap
    },
    {
      category: 'APM & Observability',
      items: ['Dynatrace', 'Datadog', 'LangSmith', 'AppDynamics', 'Grafana', 'Prometheus'],
      icon: TrendingUp
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (EC2, EKS, CloudWatch)', 'Azure (AKS, App Insights)', 'Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions'],
      icon: Cloud
    },
    {
      category: 'Scripting & Databases',
      items: ['Java', 'Python', 'Groovy', 'SQL Server', 'Oracle', 'Shell Scripting'],
      icon: Code2
    }
  ];

  return (
    <div className="portfolio">
      {/* Animated background elements */}
      <div className="background-elements">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <h1 className="logo">SC</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <div className="avatar-circle">
            <div className="avatar-inner">SC</div>
          </div>
          
          <h2 className="hero-title">
            Performance <span className="gradient-text">Engineering</span> Leader
          </h2>
          
          <p className="hero-subtitle">
            5.6 years optimizing systems, scaling infrastructure, and bridging Performance Engineering with SRE & AI Observability
          </p>

          <div className="hero-badges">
            <span className="badge badge-cyan">JMeter Expert</span>
            <span className="badge badge-blue">Dynatrace + Datadog</span>
            <span className="badge badge-purple">LLM Performance Pioneer</span>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Download Resume</button>
          </div>

          <div className="scroll-indicator">
            <ChevronDown className="chevron" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h3 className="section-title">Performance Engineering Lead</h3>
          
          <div className="about-grid">
            <div className="about-left">
              <div className="card card-hover">
                <h4 className="card-title cyan">
                  <Zap size={20} /> Performance Optimization
                </h4>
                <p className="card-text">Delivered measurable outcomes: 40% database optimization, 35% JVM improvement, 25% response time reduction across distributed systems.</p>
              </div>

              <div className="card card-hover">
                <h4 className="card-title blue">
                  <TrendingUp size={20} /> LLM & AI Observability
                </h4>
                <p className="card-text">Pioneered LLM/chatbot performance engineering using LangSmith and WebSocket, tracking TTFT, token throughput, and cost estimation.</p>
              </div>

              <div className="card card-hover">
                <h4 className="card-title purple">
                  <Cloud size={20} /> Cloud-Native Architecture
                </h4>
                <p className="card-text">Expert in AWS, Azure, and Kubernetes. Architected scalable systems with auto-scaling, load balancing, and high availability.</p>
              </div>
            </div>

            <div className="about-right">
              <div className="stat-card">
                <h4 className="stat-number cyan">5.6 Years</h4>
                <p className="stat-label">Enterprise performance testing & SRE across banking, insurance, and retail</p>
              </div>

              <div className="stat-card">
                <h4 className="stat-number blue">40% Avg. Improvement</h4>
                <p className="stat-label">Database optimization, JVM tuning, and response time reduction</p>
              </div>

              <div className="stat-card">
                <h4 className="stat-number purple">PwC Senior Associate</h4>
                <p className="stat-label">Leading performance engineering strategy for enterprise AI-powered applications</p>
              </div>

              <div className="stat-card">
                <h4 className="stat-number cyan">Certifications</h4>
                <p className="stat-label">ISTQB CTFL, Azure AZ-900, Apache JMeter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <h3 className="section-title">Key Projects</h3>
          <p className="section-subtitle">Measurable impact across enterprise systems</p>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card card-hover"
                onClick={() => setActiveProject(activeProject === idx ? null : idx)}
              >
                <div className="project-header">
                  <div>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-org">{project.org}</p>
                  </div>
                  <div className="project-impact">{project.impact}</div>
                </div>

                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                {activeProject === idx && (
                  <div className="project-details animate-fade-in">
                    <p className="detail-text"><strong>Key Achievement:</strong> {project.highlight}</p>
                    <div className="metrics-tags">
                      {project.metrics.map((m, i) => (
                        <span key={i} className="metric-tag">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <h3 className="section-title">Technical Skills</h3>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div key={idx} className="skill-card card-hover">
                  <h4 className="skill-title">
                    <Icon size={24} />
                    {skillGroup.category}
                  </h4>
                  <div className="skill-items">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-item">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container contact-container">
          <h3 className="section-title">Let's Connect</h3>
          <p className="contact-subtitle">
            Open to discussing performance engineering challenges, SRE strategies, and AI observability solutions
          </p>

          <div className="contact-buttons">
            <a href="mailto:sagar98chaudhary19@gmail.com" className="contact-btn cyan">
              <Mail size={20} /> Email
            </a>
            <a href="https://linkedin.com/in/sagar-chaudhary-024254130" target="_blank" rel="noopener noreferrer" className="contact-btn blue">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="tel:+919804644867" className="contact-btn purple">
              <ExternalLink size={20} /> Phone
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Sagar Chaudhary © 2026 | Performance Engineering Lead | Bangalore, India</p>
      </footer>
    </div>
  );
}
