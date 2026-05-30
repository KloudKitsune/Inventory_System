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
import AddItemModal from "../inventory/AddItemModal/AddItemModal";
import EditItemModal from "../inventory/EditItemModal/EditItemModal";
import ConfirmDeleteModal from "../inventory/ConfirmDeleteModal/ConfirmDeleteModal";

// API
import { getItems, addItem, updateItem, deleteItem } from "../../utils/api";

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
  // const shouldShowAuth = !currentUser && activeModal === null;
  const [authChecked, setAuthChecked] = useState(false);

  const [inventoryItems, setInventoryItems] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

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

  // Saving inventoryItems to API
  useEffect(() => {
    getItems()
      .then((items) => {
        setInventoryItems(items);
      })
      .catch((err) => {
        console.error("Failed to load items:", err);
      });
  }, []);

  // Add Item
  function handleAddItem(newItem) {
    addItem(newItem)
      .then((savedItem) => {
        setInventoryItems((prev) => [...prev, savedItem]);
        setActiveModal(null);
      })
      .catch((err) => console.error(err));
  }

  // Confirm Delete Modal

  function handleOpenDeleteModal(item) {
    setItemToDelete(item);
    setActiveModal("confirm-delete");
  }

  function handleConfirmDelete() {
    deleteItem(itemToDelete.id)
      .then(() => {
        setInventoryItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemToDelete.id),
        );

        setItemToDelete(null);
        setActiveModal(null);
      })
      .catch((err) => console.error(err));
  }

  // Edit Item
  function handleEditItem(updatedItem) {
    updateItem(updatedItem)
      .then((savedItem) => {
        setInventoryItems((prev) =>
          prev.map((item) => (item.id === savedItem.id ? savedItem : item)),
        );

        setActiveModal(null);
        setSelectedItem(null);
      })
      .catch((err) => console.error(err));
  }

  function handleOpenEditModal(item) {
    setSelectedItem(item);
    setActiveModal("edit-item");
  }

  return (
    <>
      {/* Header stays on top */}
      <Header
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenLogin={() => setActiveModal("login")}
        onAddItem={() => setActiveModal("add-item")}
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

      <AddItemModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onAddItem={handleAddItem}
      />

      <EditItemModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onEditItem={handleEditItem}
        selectedItem={selectedItem}
      />

      <ConfirmDeleteModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onConfirmDelete={handleConfirmDelete}
        itemToDelete={itemToDelete}
      />

      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Main page content */}
        <div className="content">
          <Routes>
            {/* Home route */}
            <Route
              path="/"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  authChecked={authChecked}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Inventory route */}
            <Route
              path="/inventory"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  authChecked={authChecked}
                >
                  <Inventory
                    inventoryItems={inventoryItems}
                    onDeleteItem={handleOpenDeleteModal}
                    onEditItem={handleOpenEditModal}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
