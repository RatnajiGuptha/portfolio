function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Bravo Zulu Award – Deployment Optimization and Security Remediation',
      cert: `${import.meta.env.BASE_URL}BZ - Guptha.pdf`,
      points: [
        'Reduced deployment time from 4+ hours to 1.5 hours with zero downtime, saving 10+ engineering hours quarterly.',
        'Automated report generation processes, cutting processing time from hours to minutes.',
        'Eliminated manual application access workflows, improving team productivity by 30%.',
        'Lowered vulnerabilities from 50,000+ to 1,500 (97% reduction), achieving full regulatory compliance.',
      ],
    },
    {
      icon: '🏆',
      title: 'Bravo Zulu Award – Regulatory Adaptability',
      cert: `${import.meta.env.BASE_URL}bz_evp.pdf`,
      points: [
        'Overhauled end-to-end processes at speed to adapt to new tariff policies and De Minimis regulatory changes, ensuring zero disruption to global operations.',
        'Partnered across Operations, Data & Tech, and FedEx Logistics to stabilize global footprint while delivering measurable value for customers and shareholders.',
        'Recognized for adaptability, creative solutioning, and bias to action in navigating complex regulatory shifts with no compliance gaps.',
      ],
    },
    {
      icon: '🏆',
      title: 'PPQ Award – Outstanding Performance',
      cert: `${import.meta.env.BASE_URL}PPQA Certificate.pdf`,
      points: [
        'Recognized for quality-driven delivery on the Electronic Export Information (EEI) Automation project, enhancing customer experience and reducing manual processing by 60%.',
      ],
    },
    {
      icon: '🎓',
      title: 'SAFe 6.0 Certified – Scaled Agile, Inc.',
      cert: `${import.meta.env.BASE_URL}Safe 6.0.pdf`,
      points: [
        'Certified SAFe 6.0 Practitioner, demonstrating expertise in Agile frameworks and Lean-Agile principles for enterprise-scale delivery.',
      ],
    },
  ]

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-header">
                <span className="achievement-icon">{achievement.icon}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.cert && (
                  <a href={achievement.cert} target="_blank" rel="noopener noreferrer" className="achievement-cert-link" title="View Certificate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
              <ul className="achievement-points">
                {achievement.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
