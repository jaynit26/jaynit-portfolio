import React, { useState, useEffect } from 'react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;
import { useInView } from 'react-intersection-observer';
import profile from './assets/profile.jpg';

// Pure CSS Modern Floating Particles Component
const ParticleBackground = () => {
  return (
    <div className="bg-glow">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
};

// Distinct Company Logos Array with Unique URLs
const companyLogos = [
  { id: 1, name: "GETCO", imgUrl: "/logos/company1.png", url: "https://www.getcogujarat.com/getco_newsite/index.php" },
  { id: 2, name: "GSFC", imgUrl: "/logos/company2.png", url: "https://www.gsfclimited.com" },
  { id: 3, name: "Monachem", imgUrl: "/logos/company3.png", url: "https://www.monachem.com/" },
  { id: 4, name: "Shreedhargroup", imgUrl: "/logos/company4.png", url: "https://shreedhargroup.com/" },
  { id: 5, name: "Keshavencon", imgUrl: "/logos/company5.png", url: "https://keshavencon.com" },
  { id: 6, name: "Navrachana University", imgUrl: "/logos/company6.png", url: "https://nuv.ac.in" },
  { id: 7, name: "stellarformulations", imgUrl: "/logos/company7.png", url: "https://stellarformulations.in/" },
  { id: 8, name: "Rishabh Software", imgUrl: "/logos/company8.png", url: "https://www.rishabhsoft.com" },
  { id: 9, name: "Arteeflow", imgUrl: "/logos/company9.png", url: "https://www.arteeflow.com/" },
  { id: 10, name: "Gulbrandsen", imgUrl: "/logos/company10.png", url: "https://gulbrandsen.com/" },
  { id: 11, name: "Rishifibc", imgUrl: "/logos/company11.png", url: "https://www.rishifibc.com/" },
  { id: 12, name: "Ace Technologies Group", imgUrl: "/logos/company12.png", url: "https://acetechnologiesgroup.com/" },
  { id: 13, name: "PDIL", imgUrl: "/logos/company13.png", url: "https://www.pdilin.com/" },
  { id: 14, name: "Waaree Energies", imgUrl: "/logos/company14.png", url: "https://www.waaree.com/" },
  { id: 15, name: "TBEA India", imgUrl: "/logos/company15.png", url: "https://www.tbeaindia.com/" },
  { id: 16, name: "BDR Pharma", imgUrl: "/logos/company16.png", url: "https://www.bdrpharma.com/" },
  { id: 17, name: "Advanced Systek", imgUrl: "/logos/company17.png", url: "https://advancedsystek.com/" },
  { id: 18, name: "L&T Hydrocarbon Engineering", imgUrl: "/logos/company18.png", url: "https://lntenergy.com/" },
  { id: 19, name: "Decbectochem", imgUrl: "/logos/company19.png", url: "https://www.decbectochem.com/" },
  { id: 20, name: "Shaily", imgUrl: "/logos/company20.png", url: "https://shaily.com/" },
  { id: 21, name: "Cosmos", imgUrl: "/logos/company21.png", url: "https://cosmos.in/" },
  { id: 22, name: "L&T Energy", imgUrl: "/logos/company22.png", url: "https://lntenergy.com/" },
  { id: 23, name: "Siddhi Green", imgUrl: "/logos/company23.png", url: "https://siddhigreen.com/" },
  { id: 24, name: "Tektron", imgUrl: "/logos/company24.png", url: "https://tektronled.com/" },
  { id: 25, name: "Servilink Systems", imgUrl: "/logos/company25.png", url: "https://www.servilinksystems.com/" }
];

// Achievement Counter Component
const AchievementCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 250, suffix: "+", label: "Users Migrated" },
    { number: 25, suffix: "+", label: "Clients Served" },
    { number: 50, suffix: "+", label: "Projects Delivered" },
    { number: 150, suffix: "+", label: "Servers Managed" },
    { number: 230, suffix: "+", label: "VMs Managed" },
    { number: 20, suffix: "+", label: "Storage Systems" },
    { number: 8, suffix: "+", label: "OEM Partners" },
    { number: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="container animate-item">
      <div 
        className="glass-section" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '36px 24px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
            Key Performance <span className="gradient-text">Metrics</span>
          </h2>
          <p style={{ color: '#c084fc', fontSize: '0.9rem', marginTop: '4px' }}>
            Proven track record across enterprise cloud, infrastructure, and operations
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '20px 12px'
              }}
            >
              <h4 style={{ fontSize: '2rem', fontWeight: '800', color: '#38bdf8', marginBottom: '4px' }}>
                {inView ? (
                  <CountUp start={0} end={stat.number} duration={8} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.85rem', fontWeight: '500', lineHeight: '1.3' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const [loading, setLoading] = useState(true);

  const [activeModal, setActiveModal] = useState(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 3;
        if (next < 40) setStatus('Processing Details...');
        else if (next < 75) setStatus('Optimizing UI...');
        else setStatus('Welcome!');

        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div>
      <ParticleBackground />

      {/* Pre-loader */}
      <div className={`loader-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loader-title">L O A D I N G</div>
        <div className="loader-status">{status}</div>
        <div className="loader-bar-bg">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percentage">{progress} %</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Jaynit Mishra</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero animate-item">
        <img src={profile} alt="Jaynit Mishra" className="hero-avatar-img" />
        <div className="hero-text">
          <h1>Jaynit <span className="gradient-text">Mishra</span></h1>
          <h2>Senior Engineer — Support & IT Infrastructure</h2>
          <p>
            Specializing in Microsoft 365 migrations, VMware virtualization, Dell & Storage systems (Synology/HCP), and enterprise network support.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#experience" className="btn-secondary">Explore Journey</a>
          </div>
        </div>
      </header>

      {/* Achievement Counter */}
      <AchievementCounter />

      {/* Supported Companies Marquee */}
      <section className="container animate-item">
        <div className="glass-section" style={{ overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
              Companies & Clients <span className="gradient-text">Supported</span>
            </h2>
            <p style={{ color: '#c084fc', fontSize: '0.9rem', marginTop: '4px' }}>
              Enterprise environments, brands, and systems I provide support for
            </p>
          </div>

          <div className="logo-marquee-container">
            <div className="logo-marquee-track">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <a 
                  key={index} 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="logo-marquee-card"
                  style={{ cursor: 'pointer' }}
                >
                  <img src={logo.imgUrl} alt={logo.name} title={logo.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container">
        <div className="journey-header">
          <h2>My Professional <span className="gradient-text">Journey</span></h2>
          <p>Navigate through my career milestones and achievements.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* Left: Coming Soon */}
          <div className="timeline-item left animate-item">
            <div className="timeline-badge">🚀</div>
            <div className="timeline-card dark-card">
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <span style={{ fontSize: '2rem' }}>🚀</span>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '8px 0 4px' }}>
                  More experiences coming soon...
                </h3>
                <p style={{ color: '#c084fc', fontSize: '0.85rem' }}>
                  Driven to excel in enterprise systems and cyber resilience!
                </p>
              </div>
            </div>
          </div>

          {/* Right: ITPL */}
          <div className="timeline-item right animate-item">
            <div className="timeline-badge">💼</div>
            <div className="timeline-card">
              <div>
                <span className="card-top-tag">COMPLETED</span>
                <span className="card-date">Feb 2023 – Present</span>
              </div>
              <h3 className="card-role">Senior Engineer — Support</h3>
              <div className="card-company">🏛️ Informatics Technologies Pvt. Ltd.</div>
              <div className="card-location">📍 Vadodara, Gujarat</div>

              <div className="tech-tags">
                <span className="tech-tag">Microsoft 365</span>
                <span className="tech-tag">VMware ESXi</span>
                <span className="tech-tag">Synology NAS</span>
                <span className="tech-tag">Hitachi HCP</span>
              </div>

              <ul className="achievements-list">
                <li>Performed Data Center Migration & Modernization, including Microsoft 365, VMware vSphere/ESXi, Dell Servers, Synology NAS, and HCP.</li>
                <li>Managed deployment, upgrades, configuration, security, backup, and troubleshooting across virtualized and storage environments.</li>
                <li>Executed infrastructure modernization and optimization to improve availability, performance, scalability, security, and minimize downtime.</li>
              </ul>

              <div className="card-buttons">
                <button 
                  className="btn-view" 
                  onClick={() => setActiveModal({
                    title: "Senior Engineer — Informatics Technologies",
                    type: "details",
                    content: (
                      <div className="modal-competencies">
                        <h4 style={{ color: '#c084fc', marginBottom: '16px', fontSize: '1.1rem' }}>
                          Core Competencies & Key Technical Highlights
                        </h4>
                        
                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>
                            Enterprise Cloud & Messaging Migration
                          </h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#d1d5db' }}>
                            <li><strong>M365 Cloud Migration:</strong> End-to-end migration of 250+ users to Microsoft 365, executed with near-zero business impact and minimal operational downtime.</li>
                            <li><strong>Tenant Administration & Security:</strong> Continuous M365 tenant management covering identity lifecycle, security baselines, Exchange Online, and compliance policies.</li>
                            <li><strong>Email Security Architecture:</strong> Deployment, configuration, and proactive management of enterprise email security gateways to mitigate phishing and modern messaging threats.</li>
                          </ul>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>
                            Hybrid Virtualization & Data Center Operations
                          </h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#d1d5db' }}>
                            <li><strong>Multi-Hypervisor Management:</strong> Engineering, high-availability cluster setup, performance tuning, and lifecycle upgrades for VMware vSphere/ESXi and Microsoft Hyper-V environments.</li>
                            <li><strong>Storage Infrastructure & Object Storage:</strong> Design, integration, and operational support for enterprise storage arrays, including Hitachi Content Platform (HCP) object storage and Synology NAS backup appliances.</li>
                            <li><strong>Enterprise Hardware Lifecycle:</strong> Proactive maintenance, firmware upgrades, hardware troubleshooting, and capacity expansion for Dell PowerEdge server fleets and SAN/NAS storage.</li>
                          </ul>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>
                            Active Directory & Security Controls
                          </h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#d1d5db' }}>
                            <li><strong>Identity & Access Management (IAM):</strong> Centralized Active Directory management, spanning forest/domain upgrades, OU structural design, object lifecycle management, and strict RBAC enforcement.</li>
                            <li><strong>Hardened Security & Endpoint Protection:</strong> Enterprise endpoint protection across 10+ client tenants using CrowdStrike Falcon—enforcing security policies, threat hunting, and automated vulnerability patch management.</li>
                            <li><strong>Zero-Trust Access & Identity Security:</strong> Deployment and integration of Menlo Security (isolation-based browser security) and YubiKey hardware-based multi-factor authentication (MFA).</li>
                            <li><strong>Group Policy Management:</strong> Crafting and maintaining GPO baselines to enforce least privilege, domain hardening, and compliance standards across enterprise nodes.</li>
                          </ul>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px' }}>
                            System Availability & Managed Services
                          </h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#d1d5db' }}>
                            <li><strong>Data Protection & Disaster Recovery:</strong> Architectural design and execution of backup retention plans, cross-site replication, and disaster recovery testing using NAS and enterprise storage.</li>
                            <li><strong>Unified Communications:</strong> Ongoing support and integration for enterprise Video Conferencing (VC) rooms and collaboration infrastructure.</li>
                            <li><strong>Documentation & Technical Handover:</strong> Authoring essential project deliverables, including Statements of Work (SOW), Plan of Action (POA) documentation, Standard Operating Procedures (SOPs), and operational handoff packages.</li>
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                >
                  View Details
                </button>
                <button 
                  className="btn-cert"
                  onClick={() => setActiveModal({
                    title: "Informatics Technologies Experience Certificate",
                    type: "cert",
                    certImage: "/cert-itpl.png"
                  })}
                >
                  Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Left: GETCO */}
          <div className="timeline-item left animate-item">
            <div className="timeline-badge">⚡</div>
            <div className="timeline-card">
              <div>
                <span className="card-top-tag" style={{ background: '#3b82f6' }}>ON-SITE DEPLOYMENT</span>
                <span className="card-date">Feb 2023 – Sep 2023</span>
              </div>
              <h3 className="card-role">On-site Support Engineer</h3>
              <div className="card-company">🏢 GETCO (Gujarat Energy Transmission Corp.)</div>
              <div className="card-location">📍 Vadodara, Gujarat</div>

              <div className="tech-tags">
                <span className="tech-tag">RHEL</span>
                <span className="tech-tag">Array Load Balancers</span>
                <span className="tech-tag">Trend Micro</span>
              </div>

              <ul className="achievements-list">
                <li>Configured RHEL, CentOS, and Windows Server VMs.</li>
                <li>Deployed Array load balancers with OEM assistance.</li>
                <li>Managed Trend Micro Cloud One & Enlight 360 NMS.</li>
              </ul>

              <div className="card-buttons">
                <button 
                  className="btn-view"
                  onClick={() => setActiveModal({
                    title: "On-site Support Engineer — GETCO",
                    type: "details",
                    content: [
                      "Maintained mission-critical Red Hat Enterprise Linux (RHEL) server instances for state grid infrastructure.",
                      "Configured Array Networks ADC / Load Balancers for high availability of critical web services.",
                      "Monitored end-to-end network health using Enlight 360 NMS and performed threat mitigation via Trend Micro Deep Security."
                    ]
                  })}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Right: Lauren InfoTech */}
          <div className="timeline-item right animate-item">
            <div className="timeline-badge">🛠️</div>
            <div className="timeline-card">
              <div>
                <span className="card-top-tag" style={{ background: '#8b5cf6' }}>ON-SITE GSFC</span>
                <span className="card-date">Dec 2020 – Jan 2023</span>
              </div>
              <h3 className="card-role">Desktop & Systems Support</h3>
              <div className="card-company">🏢 Lauren Information Technologies</div>
              <div className="card-location">📍 Vadodara, Gujarat</div>

              <div className="tech-tags">
                <span className="tech-tag">Helpdesk Support</span>
                <span className="tech-tag">Hardware Inventory</span>
                <span className="tech-tag">System Backup</span>
              </div>

              <ul className="achievements-list">
                <li>Delivered end-to-end support for 1,500+ enterprise users.</li>
                <li>Managed server backups, restoration, & hardware procurement.</li>
              </ul>

              <div className="card-buttons">
                <button 
                  className="btn-view"
                  onClick={() => setActiveModal({
                    title: "Desktop & Systems Support — Lauren InfoTech",
                    type: "details",
                    content: [
                      "Provided L1/L2 technical support across 1,500+ workstations at Gujarat State Fertilizers & Chemicals (GSFC).",
                      "Executed daily backup jobs, domain user onboarding via Active Directory, and hardware lifecycle management.",
                      "Resolved service desk tickets meeting SLA response times exceeding 98%."
                    ]
                  })}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Modal Popup */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content glass-section" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            <h3 className="modal-title">{activeModal.title}</h3>

            {activeModal.type === 'details' && (
              typeof activeModal.content === 'object' && !Array.isArray(activeModal.content) ? (
                activeModal.content
              ) : (
                <ul className="modal-details-list">
                  {Array.isArray(activeModal.content) && activeModal.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )
            )}

            {activeModal.type === 'cert' && (
              <div className="modal-cert-preview">
                {activeModal.certImage ? (
                  <img src={activeModal.certImage} alt="Certificate" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
                ) : (
                  <div className="cert-placeholder">
                    <p>📜 Certificate preview file not found in public folder.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="container animate-item" style={{ marginTop: '60px' }}>
        <div className="glass-section" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: '#c084fc', fontSize: '0.9rem', marginTop: '6px', marginBottom: '30px' }}>
            Open for IT Infrastructure Opportunities, Technical Collaborations & Infrastructure Consulting
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <a href="mailto:jaynitmishra6@gmail.com" className="stat-card" style={{ padding: '20px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>✉️</div>
              <h4 style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: '700' }}>Email Me</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.85rem', marginTop: '4px' }}>jaynitmishra6@gmail.com</p>
            </a>

            <a href="tel:+917778915737" className="stat-card" style={{ padding: '20px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📞</div>
              <h4 style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: '700' }}>Call / WhatsApp</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.85rem', marginTop: '4px' }}>+91 7778915737</p>
            </a>

            <div className="stat-card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📍</div>
              <h4 style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: '700' }}>Location</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.85rem', marginTop: '4px' }}>Vadodara, Gujarat, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ textAlign: 'center', padding: '50px 0 30px', color: '#94a3b8' }}>
        <p>📍 Vadodara, Gujarat | 📞 +91 7778915737 | ✉️ jaynitmishra6@gmail.com</p>
        <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>© {new Date().getFullYear()} Jaynit R. Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
}
