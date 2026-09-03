import React, { useState, useEffect } from 'react';
import profile from './assets/profile.jpg';

// 24 Company Logos Data Array
const companyLogos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  imgUrl: `/logos/company${i + 1}.png`
}));

export default function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const [loading, setLoading] = useState(true);

  // Loading Screen Timer Logic
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

  // Intersection Observer for Scroll Animation
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
      {/* Fullscreen Pre-loader Screen */}
      <div className={`loader-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loader-title">L O A D I N G</div>
        <div className="loader-status">{status}</div>
        <div className="loader-bar-bg">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percentage">{progress} %</div>
      </div>

      {/* Glass Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Jaynit  Mishra</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero animate-item">
        {/* Rounded Profile Image */}
        <img 
          src={profile}
          alt="Jaynit Mishra" 
          className="hero-avatar-img" 
        />

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

      {/* Supported Companies Marquee Section */}
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
                <div key={index} className="logo-marquee-card">
                  <img src={logo.imgUrl} alt={logo.name} title={logo.name} />
                </div>
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
                <li>Managed migration of 200+ users to M365 tenant seamlessly.</li>
                <li>Deployed and upgraded VMware ESXi hosts & vCenter Server.</li>
                <li>Troubleshot Dell servers, Synology NAS, & HCP storage.</li>
              </ul>

              <div className="card-buttons">
                <button className="btn-view">View Details</button>
                <button className="btn-cert">Certificate</button>
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
                <span className="tech-tag">RHEL 8.7</span>
                <span className="tech-tag">Array Load Balancers</span>
                <span className="tech-tag">Trend Micro</span>
              </div>

              <ul className="achievements-list">
                <li>Configured RHEL 8.7, CentOS, and Windows Server VMs.</li>
                <li>Deployed Array load balancers with OEM assistance.</li>
                <li>Managed Trend Micro Cloud One & Enlight 360 NMS.</li>
              </ul>

              <div className="card-buttons">
                <button className="btn-view">View Details</button>
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
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ textAlign: 'center', padding: '60px 0 30px', color: '#94a3b8' }}>
        <p>📍 Vadodara, Gujarat | 📞 +91 7778915737 | ✉️ jaynitmishra6@gmail.com</p>
        <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>© {new Date().getFullYear()} Jaynit R. Mishra</p>
      </footer>
    </div>
  );
}