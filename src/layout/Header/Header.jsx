import { useEffect } from "react";
import "./Header.css";
// import { NavLink } from "react-router-dom";
import inventoriaLogo from "../../assets/inventoria.svg";

function Header() {
  useEffect(() => {
    console.log("Header mounted");
  }, []);
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={inventoriaLogo}
          alt="Inventoria logo"
          className="header__logo-img"
        />
        <h1>Inventoria</h1>
      </div>

      <nav className="header__nav">
        <a href="/" className="header__link">
          Dashboard
        </a>
        <a href="/inventory" className="header__link">
          Inventory
        </a>
        <a href="/settings" className="header__link">
          Settings
        </a>
      </nav>

      <div className="header__actions">
        <button className="header__button">+ Add Item</button>
        <button className="header__button header__button--secondary">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
