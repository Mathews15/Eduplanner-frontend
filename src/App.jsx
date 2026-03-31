import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [view, setView] = useState("home");

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const handleSetUser = (u) => {
    setUser(u);
    setView("home");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar
        user={user}
        setUser={(u) => { setUser(u); setView("home"); }}
        setShowRegister={() => setView("register")}
        setShowLogin={() => setView("login")}
        setShowHome={() => setView("home")}
      />

      <div style={{ flex: 1 }}>
        {user ? (
          <div className="page">
            <Dashboard user={user} />
          </div>
        ) : view === "register" ? (
          <Register setShowRegister={(v) => setView(v ? "register" : "home")} />
        ) : view === "login" ? (
          <Login setUser={handleSetUser} setShowRegister={() => setView("register")} />
        ) : (
          <HomePage
            setShowRegister={() => setView("register")}
            setShowLogin={() => setView("login")}
          />
        )}
      </div>

      {!user && <Footer />}
    </div>
  );
}

export default App;