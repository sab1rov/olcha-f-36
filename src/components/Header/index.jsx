import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";

function Header({open, setOpen}) {

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <HeaderTop open={open} setOpen={setOpen} />
      <HeaderBottom open={open} setOpen={setOpen}/>
    </header>
  );
}

export default Header;
