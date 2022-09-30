import React from "react";

function nav() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center p-[10rem] py-[3rem]">
      <div className="logo">
        <a href="#" className="text-3xl text-white font-bold">
          sunnyside
        </a>
      </div>
      <ul className="menu flex flex-col md:flex-row lg:flex-row items-center text-white">
        <li className="mx-[20px] my-[10px]">
          <a href="#">About</a>
        </li>
        <li className="mx-[20px] my-[10px]">
          <a href="#">Services</a>
        </li>
        <li className="mx-[20px] my-[10px]">
          <a href="#">Projects</a>
        </li>
        <li className="mx-[20px] my-[10px] flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default nav;
