const experiences = [
  {
    company: 'FedEx Express',
    role: 'Full Stack Developer',
    period: 'Apr 2024 – Present',
    color: '#6366f1',
    points: [
      'Architected and distributed 5+ enterprise-grade applications end-to-end, driving features from requirements to production with 99.9% uptime and zero critical post-release defects.',
      'Designed scalable microservices architecture across 10+ distributed services, reducing inter-service latency by 40% and improving fault tolerance with circuit breaker patterns.',
      'Built and optimized high-throughput REST APIs using Java and Spring Boot, reducing average response time by 45% and handling 50,000+ daily transactions.',
      'Streamlined client application access by consolidating multiple authorization layers into a single enterprise role-based model using Okta, reducing login friction by 70%.',
      'Decreased infrastructure and application vulnerabilities from 50,000+ to 1,500 (97% reduction), enhancing compliance and security posture across 8 critical systems.',
      'Automated deployment pipeline for World Tariff Web Services, cutting deployment time from 4+ hours to 1.5 hours with zero downtime.',
      'Implemented proactive SSL certificate tracking system across 20+ applications, ensuring timely renewals and eliminating expiration-related outages.',
      'Onboarded 6 applications to Splunk and AppDynamics with real-time alerting, reducing Mean Time to Resolution (MTTR) by 35%.',
      'Resolved 50+ critical production issues under tight SLAs, maintaining 99.9% application availability across all managed services.',
      'Enforced code quality standards through structured code reviews and testing strategies, achieving 85%+ code coverage and reducing production defects by 40%.',
    ],
  },
  {
    company: 'Persistent Systems',
    role: 'Software Engineer',
    period: 'Feb 2022 – Apr 2024',
    color: '#8b5cf6',
    points: [
      'Developed and deployed 5+ enterprise applications using Java and Spring Boot, serving 10,000+ end users with 99.5% uptime.',
      'Built a feedback microservice using Angular and Spring Boot that processed 5,000+ submissions monthly, improving user satisfaction scores by 25%.',
      'Identified and resolved 30+ performance bottlenecks across application stack, reducing average API response time by 35%.',
      'Streamlined deployment processes using Spring Cloud Config, reducing release cycle from 2 weeks to 3 days with 95% sprint delivery rate.',
      'Collaborated with a cross-functional team of 8 developers, managing 100+ pull requests and maintaining zero merge conflicts in production.',
      'Authored and maintained technical documentation on Confluence, reducing onboarding time for new developers by 40%.',
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
