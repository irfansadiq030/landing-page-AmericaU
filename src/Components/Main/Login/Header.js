import React from "react";

const Header = () => {
  return (
    <header className="lg:absolute lg:top-1 left-1">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="Heroes League Game Day - Logo"
      />
    </header>
  );
};

export default Header;
