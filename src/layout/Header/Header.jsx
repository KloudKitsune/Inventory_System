import { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import home from "../../assets/home.svg";
import inventory from "../../assets/inventory.svg";
import settings from "../../assets/settings.svg";

function Header({ currentUser, onLogout, onOpenLogin }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    console.log("Header mounted");
  }, []);

  function getInitials(name) {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  return (
    <header className="header">
      <div className="header__right">
        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            <img src={home} alt="Home logo" className="header__logo-img" />
          </NavLink>

          <NavLink to="/inventory" className="header__link">
            <img
              src={inventory}
              alt="Inventory logo"
              className="header__logo-img"
            />
          </NavLink>

          <NavLink to="/settings" className="header__link">
            <img
              src={settings}
              alt="Settings logo"
              className="header__logo-img"
            />
          </NavLink>
        </nav>

        <div className="header__actions">
          <button className="header__button">+ Add Item</button>

          {!currentUser ? (
            <button
              className="header__button header__button--secondary"
              onClick={onOpenLogin}
            >
              Login
            </button>
          ) : (
            <div className="header__profile">
              <button
                className="header__avatar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {getInitials(currentUser.fullName)}
              </button>

              {dropdownOpen && (
                <div className="header__dropdown">
                  <button
                    className="header__dropdown-button"
                    onClick={() => {
                      setDropdownOpen(false);
                      onLogout();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
