function Footer() {
    return (
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo"><span>Edu</span><span className="plan">Planner</span></span>
            <p className="footer-tagline">Plan smarter. Study better. Every day.</p>
            <a className="footer-email" href="mailto:hello@eduplan.io">hello@eduplan.io</a>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <span>Features</span>
              <span>How it Works</span>
              <span>Pricing</span>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Support</div>
              <span>Help Center</span>
              <span>Contact Us</span>
              <span>Community</span>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <span>About</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 EduPlanner. All rights reserved.</span>
          <span>Made with ♥ for students everywhere</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;