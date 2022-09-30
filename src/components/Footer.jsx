import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
function footer() {
  return (
    <div className="bg-emerald-300 text-center">
      <div className="Logo py-[2rem]">
        <a href="#" className="text-3xl opacity-50 font-bold ">
          sunnyside
        </a>
      </div>
      <ul className="Menu flex justify-center py-[2rem]">
        <li className="mx-[20px] my-[10px] opacity-50">
          <a href="#">About</a>
        </li>
        <li className="mx-[20px] my-[10px] opacity-50">
          <a href="#">Services</a>
        </li>
        <li className="mx-[20px] my-[10px] opacity-50">
          <a href="#">Projects</a>
        </li>
      </ul>
      <ul className="flex opacity-50 justify-center pb-[2rem]">
        <li className="mx-[20px] my-[10px]">
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="mx-[20px] my-[10px]">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li className="mx-[20px] my-[10px]">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="mx-[20px] my-[10px]">
          <a href="#">
            <FaPinterest />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default footer;
