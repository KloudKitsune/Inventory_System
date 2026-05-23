import { useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import home from "../../assets/home.svg";
import inventory from "../../assets/inventory.svg";
import settings from "../../assets/settings.svg";

function Header() {
  useEffect(() => {
    console.log("Header mounted");
  }, []);

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

          <button className="header__button header__button--secondary">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
