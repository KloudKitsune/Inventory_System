import { useState } from "react";
import "./SideBar.css";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  // ✅ Each section tracks its own open/close state
  const [openSections, setOpenSections] = useState({});

  const sections = [
    {
      id: "inventory",
      title: "Inventory",
      items: ["Overview", "Low Stock", "Out of Stock", "Categories", "Vendors"],
    },
    {
      id: "projects",
      title: "Projects",
      items: [
        "Active Projects",
        "Labor & Costs",
        "Quotes / Estimates",
        "Completed Projects",
      ],
    },
    {
      id: "purchasing",
      title: "Purchasing",
      items: ["Purchase Orders", "Incoming Inventory", "Receipts / Invoices"],
    },
    {
      id: "reports",
      title: "Reports",
      items: [
        "Inventory Value",
        "Usage Reports",
        "Most Used Items",
        "Cost Analysis",
      ],
    },
    {
      id: "settings",
      title: "Settings",
      items: ["Users", "Warehouse Info", "Preferences"],
    },
  ];

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

        {/* Static Links */}
        <div className="links">
          <a href="#">Dashboard</a>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div className="section" key={section.id}>
              <button
                className="section-title"
                onClick={() =>
                  setOpenSections((prev) => ({
                    ...prev,
                    [section.id]: !prev[section.id],
                  }))
                }
              >
                <span>
                  {openSections[section.id] ? "▼" : "▶"} {section.title}
                </span>
              </button>

              {openSections[section.id] && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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
