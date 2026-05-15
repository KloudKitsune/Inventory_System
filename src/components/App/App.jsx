import { Routes, Route } from "react-router-dom";

import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/SideBar/SideBar";
import Inventory from "../pages/Inventory/Inventory";

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
    <>
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
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
