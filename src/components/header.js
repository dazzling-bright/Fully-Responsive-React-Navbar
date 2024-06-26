import React, { useState } from "react";
import "./header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const navListItems = [
    { pageTitle: "Page One", pageLink: "/page-one/" },
    { pageTitle: "Page Two", pageLink: "/page-two" },
    { pageTitle: "Page Three", pageLink: "/page-three/" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  // function to switch the toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h2 className="header__logo">navbar</h2>

      <nav className={`header__nav ${menuOpen ? "isMenu" : ""}`}>
        <ul>
          {navListItems.map(({ pageTitle, pageLink }, index) => (
            <li key={index}>
              <a href={pageLink}>{pageTitle}</a>
            </li>
          ))}
        </ul>
        <button>Subscribe</button>
      </nav>
      <div className="header__toggle" onClick={handleMenuToggle}>
        {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
      </div>
    </header>
  );
}

export default Header;
