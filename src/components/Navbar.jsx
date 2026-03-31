function Navbar({ user, setUser, setShowRegister, setShowLogin, setShowHome }) {

    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="navbar">
        <div
          className="logo"
          onClick={() => !user && setShowHome && setShowHome()}
          style={{ cursor: user ? 'default' : 'pointer' }}
        >
          <span>Edu</span><span className="plan">Planner</span>
        </div>
  
        <div className="nav-center">
          {!user && (
            <>
              <span className="nav-link" onClick={() => scrollTo('features')}>Features</span>
              <span className="nav-link" onClick={() => scrollTo('how-it-works')}>How it works</span>
            </>
          )}
        </div>
  
        <div className="nav-right">
          {user ? (
            <>
              <span className="nav-user">👋 {user.name || user.email}</span>
              <button className="nav-btn" onClick={() => setUser(null)}>Sign Out</button>
            </>
          ) : (
            <>
              <button className="nav-btn-ghost" onClick={() => setShowLogin && setShowLogin()}>Login</button>
              <button className="nav-btn" onClick={() => setShowRegister && setShowRegister()}>Get Started</button>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default Navbar;