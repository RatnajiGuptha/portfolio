function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Full Stack Developer</strong> with 4.5 years of experience in designing, modernizing, 
              and optimizing enterprise applications using Java, Spring Boot, and Angular.
            </p>
            <p>
              Delivered impactful improvements including reducing deployment times by 62.5%, automating 
              reporting processes, eliminating manual workflows, and reducing security vulnerabilities by 97%. 
              Proven expertise in <strong>microservices migration</strong>, production stability, security 
              remediation, and Agile/SAFe delivery.
            </p>
            <p>
              Multiple awards for operational excellence including Bravo Zulu and PPQ Awards at FedEx.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">4.5</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">2</span>
              <span className="highlight-label">Companies</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">97%</span>
              <span className="highlight-label">Vuln Reduction</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">3</span>
              <span className="highlight-label">Awards Won</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
