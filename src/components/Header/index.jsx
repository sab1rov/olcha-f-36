import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
