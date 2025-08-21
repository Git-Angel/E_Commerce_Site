import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "../icon-cart.svg";
import Avatar from "../image-avatar.png";

const NavBar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left side - Logo & Links */}
      <div className="navbar-left">
        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h1 className="logo">sneakers</h1>

        {/* Desktop / Mobile Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Collections</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Women</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right side - Cart & Icon Avatar */}
      <div className="navbar-right">
        <div className="cart-container" ref={cartRef}>
          <button
            className="cart-btn"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <img src={CartIcon} alt="cart" />
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div className="cart-dropdown">
              <h4>Cart</h4>
              <hr />
              <p className="empty-msg">Your cart is empty.</p>
              <button
                className="view-cart-btn"
                onClick={() => {
                  setIsCartOpen(false);
                  navigate("/cart");
                }}
              >
                View Cart
              </button>
            </div>
          )}
        </div>

        <img className="avatar" src={Avatar} alt="profile" />
      </div>
    </nav>
  );
};

export default NavBar;
