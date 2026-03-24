import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

function App() {
  // ✅ FIX 1: Initialize user from localStorage so reload doesn't logout
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [showRegister, setShowRegister] = useState(false);

  // ✅ FIX 1: Sync user to localStorage on every change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <div>
      <Navbar user={user} setUser={setUser} setShowRegister={setShowRegister} />

      {user ? (
        <div className="page">
          <Dashboard user={user} />
        </div>
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login setUser={setUser} setShowRegister={setShowRegister} />
      )}
    </div>
  );
}

export default App;