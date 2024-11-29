import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [activeItem, setActiveItem] = useState("Home"); // Стан для активного пункту меню

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <nav>
          <div className="nav-container">
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`nav-item ${
                    activeItem === item.name ? "active" : ""
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
