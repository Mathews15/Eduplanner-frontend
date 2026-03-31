function HomePage({ setShowRegister, setShowLogin }) {
    return (
      <div className="home-wrapper">
  
        {/* Hero */}
        <section className="hero">
          <div className="hero-bg-orb orb1"></div>
          <div className="hero-bg-orb orb2"></div>
  
          <div className="hero-content">
            <div className="hero-badge">✦ Smart Study Planning</div>
            <h1 className="hero-title">
              Plan Smarter.<br />
              <span className="hero-accent">Study Better.</span>
            </h1>
            <p className="hero-desc">
              EduPlanner uses intelligent scheduling to help students build personalized
              study plans, track topics, and stay on top of what matters most — every single day.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setShowRegister()}>Get Started Free →</button>
              <button className="btn-ghost" onClick={() => setShowLogin()}>Sign In</button>
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">10k+</span><span className="stat-label">Students</span></div>
              <div className="stat-divider"></div>
              <div className="stat"><span className="stat-num">50k+</span><span className="stat-label">Plans Created</span></div>
              <div className="stat-divider"></div>
              <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Satisfaction</span></div>
            </div>
          </div>
  
          <div className="hero-visual">
            <div className="visual-card vc1">
              <div className="vc-icon">📚</div>
              <div className="vc-text">
                <div className="vc-title">Today's Topics</div>
                <div className="vc-sub">3 sessions scheduled</div>
              </div>
            </div>
            <div className="visual-card vc2">
              <div className="vc-icon">🧠</div>
              <div className="vc-text">
                <div className="vc-title">Priority Alert</div>
                <div className="vc-sub">Math — Low proficiency</div>
              </div>
            </div>
            <div className="visual-card vc3">
              <div className="vc-icon">✅</div>
              <div className="vc-text">
                <div className="vc-title">Plan Generated</div>
                <div className="vc-sub">14 days optimized</div>
              </div>
            </div>
            <div className="visual-main-card">
              <div className="vmc-header">
                <span className="vmc-dot d1"></span>
                <span className="vmc-dot d2"></span>
                <span className="vmc-dot d3"></span>
                <span className="vmc-title">Study Dashboard</span>
              </div>
              <div className="vmc-bar-row">
                <span className="vmc-label">Physics</span>
                <div className="vmc-bar"><div className="vmc-fill" style={{width:'82%',background:'#4CAF50'}}></div></div>
                <span className="vmc-pct">82%</span>
              </div>
              <div className="vmc-bar-row">
                <span className="vmc-label">Chemistry</span>
                <div className="vmc-bar"><div className="vmc-fill" style={{width:'65%',background:'#81C784'}}></div></div>
                <span className="vmc-pct">65%</span>
              </div>
              <div className="vmc-bar-row">
                <span className="vmc-label">Maths</span>
                <div className="vmc-bar"><div className="vmc-fill" style={{width:'40%',background:'#f57f17'}}></div></div>
                <span className="vmc-pct">40%</span>
              </div>
              <div className="vmc-bar-row">
                <span className="vmc-label">History</span>
                <div className="vmc-bar"><div className="vmc-fill" style={{width:'91%',background:'#4CAF50'}}></div></div>
                <span className="vmc-pct">91%</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features */}
        <section id="features" className="features">
          <div className="section-tag">Why EduPlanner?</div>
          <h2 className="section-heading">Everything you need to excel</h2>
          <p className="section-sub">Built for students who want more than just a timetable.</p>
          <div className="features-grid">
            {[
              { icon:'🗓️', title:'Smart Study Plans', desc:'Generate AI-powered study schedules tailored to your exam dates, subjects, and proficiency levels.' },
              { icon:'📊', title:'Priority Topics', desc:'Automatically identifies your weakest subjects and bumps them to the top of your daily plan.' },
              { icon:'⏱️', title:'Daily Sessions', desc:'Get a clear breakdown of what to study today — no guesswork, no overwhelm, just focus.' },
              { icon:'📝', title:'Subject & Topic Manager', desc:'Add, organize, and track all your subjects and topics in one beautifully simple interface.' },
              { icon:'📈', title:'Progress Tracking', desc:'Mark topics as complete and watch your progress grow. Visual feedback keeps you motivated.' },
              { icon:'🔔', title:'Smart Reminders', desc:'Stay on schedule with timely nudges that keep you accountable without being annoying.' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* How It Works */}
        <section id="how-it-works" className="how-it-works">
          <div className="section-tag">How It Works</div>
          <h2 className="section-heading">Up and running in 3 steps</h2>
          <div className="steps-row">
            {[
              { num:'01', title:'Create your account', desc:'Sign up for free in under 30 seconds. No credit card required.' },
              { num:'02', title:'Add your subjects', desc:'Enter your subjects, topics, and rate your proficiency for each one.' },
              { num:'03', title:'Generate your plan', desc:'EduPlanner builds a smart, personalized schedule optimized for your goals.' },
            ].map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                {i < 2 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section className="cta-section">
          <div className="cta-glow"></div>
          <h2 className="cta-heading">Ready to transform how you study?</h2>
          <p className="cta-sub">Join thousands of students already planning smarter with EduPlanner.</p>
          <button className="btn-primary cta-btn" onClick={() => setShowRegister()}>
            Start for Free — It's Easy →
          </button>
        </section>
  
      </div>
    );
  }
  
  export default HomePage;