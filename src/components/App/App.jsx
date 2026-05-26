import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/SideBar/SideBar";

// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Inventory from "../pages/Inventory/Inventory";

// Modals
import RegisterModal from "../auth/RegisterModal/RegisterModal";
import LoginModal from "../auth/LoginModal/LoginModal";

// Authentication
import ProtectedRoute from "../../components/auth/ProtectedRoute/ProtectedRoute";

// Temporary data
// const initialInventory = [
//   { id: 1, name: "Fire Alarm Panel", category: "Fire Alarm", quantity: 3 },
//   { id: 2, name: "Security Camera", category: "CCTV", quantity: 12 },
//   { id: 3, name: "Access Reader", category: "Access Control", quantity: 6 },
// ];

function App() {
  const [activeModal, setActiveModal] = useState(null);
  // "login" | "register" | null

  const [currentUser, setCurrentUser] = useState(null); // null when not logged in
  const isLoggedIn = Boolean(currentUser);
  const shouldShowAuth = !currentUser && activeModal === null;
  const [authChecked, setAuthChecked] = useState(false);

  // Register Function

  function handleRegister(userData) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) return false;

    const newUser = {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // 👇 auto-login (optional upgrade)
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setActiveModal(null);

    return true;
  }

  // Login/Logout Function

  function handleLogin(loginData) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password,
    );

    if (!foundUser) {
      return false;
    }

    setCurrentUser(foundUser);

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    setActiveModal(null);

    return true;
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setActiveModal("login");
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("currentUser"));

    if (stored) {
      setCurrentUser(stored);
      setActiveModal(null);
    } else {
      setActiveModal("login");
    }

    setAuthChecked(true);
  }, []);

  useEffect(() => {
    if (authChecked && !currentUser && activeModal === null) {
      setActiveModal("login");
    }
  }, [authChecked, currentUser, activeModal]);

  return (
    <>
      {/* Header stays on top */}
      <Header
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenLogin={() => setActiveModal("login")}
      />

      {activeModal === "login" && (
        <LoginModal
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
          onLogin={handleLogin}
          onSwitchToRegister={() => setActiveModal("register")}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
          onSwitchToLogin={() => setActiveModal("login")}
          onRegister={handleRegister}
          onLogin={handleLogin}
        />
      )}

      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Main page content */}
        <div className="content">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Dashboard />} />

            {/* Inventory route */}
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
