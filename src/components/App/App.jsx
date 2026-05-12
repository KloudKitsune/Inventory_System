import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/SideBar/SideBar";

// ✅ Correct import path
import Dashboard from "../pages/Dashboard/Dashboard";

// Temporary data
const initialInventory = [
  { id: 1, name: "Fire Alarm Panel", category: "Fire Alarm", quantity: 3 },
  { id: 2, name: "Security Camera", category: "CCTV", quantity: 12 },
  { id: 3, name: "Access Reader", category: "Access Control", quantity: 6 },
];

function App() {
  return (
    <BrowserRouter>
      {/* Header stays on top */}
      <Header />

      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Main page content */}
        <div className="content">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Dashboard />} />

            {/* Inventory route */}
            <Route path="/inventory" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
