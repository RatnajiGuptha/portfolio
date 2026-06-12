function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Full Stack Developer</strong> with 4.5+ years of experience designing, building, 
              and optimizing enterprise-grade applications using Java, Spring Boot, Angular, and microservices architecture.
            </p>
            <p>
              Delivered measurable impact including <strong>62% reduction in deployment time</strong>, 97% reduction in 
              security vulnerabilities, and 99.9% application uptime. Adept at leading performance optimization and 
              security remediation in Agile/SAFe environments.
            </p>
            <p>
              Recognized with multiple awards for operational excellence including Bravo Zulu and PPQ Awards at FedEx.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">4.5+</span>
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
