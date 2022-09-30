import React from "react";
import Nav from "./Nav";
import { FaLongArrowAltDown } from "react-icons/fa";
function Header() {
  return (
    <div className="h-[43rem] bg-gradient-to-r from-cyan-500 to-blue-500 bg-header border bg-cover bg-center text-center">
      <Nav />
      <h1 className="text-7xl text-white uppercase">We are Creative</h1>
      <div className="flex justify-center mt-[50px]">
        <FaLongArrowAltDown className="text-white text-8xl" />
      </div>
    </div>
  );
}

export default Header;
