// import "./SideBar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <nav>
//         <ul className="sidebar_components">
//           <li>Dashboard</li>
//           <li>Inventory</li>
//           <li>Categories</li>
//           <li>Settings</li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import { useState } from "react";
import "./SideBar.css";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="layout">
      {/* Overlay */}
      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)} />
      )}

      {/* Sidebar */}
      <nav className={`sidebar ${showSidebar ? "open" : ""}`}>
        <h2 className="logo">Inventoria</h2>

        {/* Search */}
        <input className="search" placeholder="Search..." />

        {/* Links */}
        <div className="links">
          <a href="#">Dashboard</a>
          <a href="#">Settings</a>

          <div className="section">
            <span className="section-title">Get Started</span>
            <ul>
              <li>Overview</li>
              <li>API Authentication</li>
              <li>Rate Limiting</li>
            </ul>
          </div>

          <div className="section">
            <span className="section-title">Endpoints</span>
            <ul>
              <li>
                Create User <span className="tag info">POST</span>
              </li>
              <li>
                Get User <span className="tag success">GET</span>
              </li>
              <li>
                Update User <span className="tag warning">PUT</span>
              </li>
              <li>
                Delete User <span className="tag danger">DELETE</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <span className="section-title">Authentication</span>
            <ul>
              <li>API Keys</li>
              <li>OAuth 2.0</li>
              <li>JWT Tokens</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content">
        <h1>Main Content</h1>
      </main>

      {/* Toggle Button */}
      <button className="toggle" onClick={() => setShowSidebar(!showSidebar)}>
        ☰
      </button>
    </div>
  );
}
