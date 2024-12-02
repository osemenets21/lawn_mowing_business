// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function MenuAppBar() {
//   const [activeItem, setActiveItem] = useState("Home"); // Стан для активного пункту меню

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About", href: "/about" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <div className="nav-wrapper">
//       <div className="nav-bar">
//         <nav>
//           <div className="nav-container">
//             <ul className="nav-menu">
//               {menuItems.map((item) => (
//                 <li
//                   key={item.name}
//                   className={`nav-item ${
//                     activeItem === item.name ? "active" : ""
//                   }`}
//                 >
//                   <Link
//                     to={item.href}
//                     onClick={() => setActiveItem(item.name)}
//                     className="nav-link"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Стан для бургер-меню
  const [bigMenu, setBigMenu] = useState(true);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuOpen(false); 
        setBigMenu(false)
      } else {
        setMenuOpen(false); 
        setBigMenu(true)
      }

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    handleResize(); // Викликаємо при завантаженні компонента
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <nav>
          <div className="nav-container flex justify-between items-center">
            {/* Бургер-меню для мобільних екранів */}
            {!menuOpen && (
              <button
                className="burger-menu" // Бургер приховується на екранах >=768px
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
              >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </button>
            )}
            {/* Навігаційне меню для великих екранів */}
            {bigMenu && (
              <ul
                className="md:hidden md:flex md:items-center md:space-x-8" // Завжди видно на великих екранах
                style={{
                  display:
                    menuOpen || window.innerWidth >= 768 ? "flex" : "none",
                }}
              >
                {menuItems.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link
                      to={item.href}
                      className="nav-link text-lg text-white hover:text-yellow-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Випадаюче меню для мобільних */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="reletive mobile-menu"
              style={{ display: menuOpen ? "block" : "none" }}
            >
              <button
                className="close-menu md:hidden" // Бургер приховується на екранах >=768px
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
              >
                ✖
              </button>
              <ul className=" flex flex-col p-4">
                {menuItems.map((item) => (
                  <li key={item.name} className="nav-item my-2">
                    <Link
                      to={item.href}
                      className="nav-link text-lg hover:text-yellow-400"
                      onClick={() => setMenuOpen(false)} // Закриваємо меню після кліку
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
