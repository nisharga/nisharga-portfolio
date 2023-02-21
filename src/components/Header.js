import React from "react";
import Logo from "../Images/logo.png";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="" className="w-[50px]" />
            <span
              className="text-accent font-secondary
            font-[800] text-[40px] ml-2"
            >
              isharga
            </span>
          </a>

          <a href="mailto:kabirnisharga@gmail.com">
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
