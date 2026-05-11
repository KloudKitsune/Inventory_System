import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/SideBar/SideBar";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Inventory from "./pages/Inventory/Inventory";
// import Settings from "./pages/Settings/Settings";

// Temporary data (you can move this later)
const initialInventory = [
  { id: 1, name: "Fire Alarm Panel", category: "Fire Alarm", quantity: 3 },
  { id: 2, name: "Security Camera", category: "CCTV", quantity: 12 },
  { id: 3, name: "Access Reader", category: "Access Control", quantity: 6 },
];

function App() {
  // 🔥 Global inventory state
  // const [items, setItems] = useState(initialInventory);

  // ➕ Add item function
  // const addItem = (newItem) => {
  //   setItems([...items, { ...newItem, id: Date.now() }]);
  // };

  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/inventory" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
