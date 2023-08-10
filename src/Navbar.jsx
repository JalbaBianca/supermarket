import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar(props) {
  const [isDarkTheme,  setIsDarkTheme] = useState (false);

  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(()=>{
    if(isDarkTheme){
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  })

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperMarket
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button className="theme-swhitcher" onClick={handleThemeClick}>
            {isDarkTheme ? "Dark" : "Light"}
          </Button>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
