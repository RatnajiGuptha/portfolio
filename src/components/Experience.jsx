const experiences = [
  {
    company: 'FedEx Express',
    role: 'Full Stack Developer',
    period: 'Apr 2025 – Present',
    color: '#6366f1',
    points: [
      'Own end-to-end development of enterprise-grade applications, driving features from requirements to production with high reliability and on-time delivery.',
      'Design and implement scalable system architectures, improving performance, maintainability, and fault tolerance across distributed microservices.',
      'Build and optimize high-throughput REST APIs using Java and Spring Boot, reducing response times and improving system efficiency under peak loads.',
      'Lead performance optimization initiatives by identifying bottlenecks and tuning services, significantly enhancing application responsiveness.',
      'Reduced infrastructure and application vulnerabilities from over 50,000 to 1,500 (97% reduction), significantly enhancing compliance and security posture.',
      'Implement proactive SSL certificate tracking system, ensuring timely renewals with complete visibility and eliminating expiration risks.',
      'Onboard applications to Splunk and AppDynamics with real-time alerts, reducing MTTR and improving incident response.',
      'Resolve critical issues under tight SLAs, ensuring 99.9%+ application availability.',
    ],
  },
  {
    company: 'Persistent Systems',
    role: 'Software Engineer',
    period: 'Feb 2022 – Mar 2024',
    color: '#8b5cf6',
    points: [
      'Conducted requirement analysis and deployed enterprise-level applications using Java and Spring Boot.',
      'Developed and optimized features, ensuring high availability and resolving critical production issues.',
      'Designed and implemented feedback services using Angular and Spring Boot, enhancing user experience.',
      'Debugged application code and resolved performance bottlenecks using Eclipse and IntelliJ IDEA.',
      'Streamlined deployment processes with Spring Cloud Config and participated in Agile sprints to deliver features on time.',
      'Facilitated effective collaboration with developers using Git for version control.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" style={{ background: exp.color }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
