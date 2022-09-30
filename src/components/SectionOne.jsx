import React from "react";
import imgTransform from "../assets/img/desktop/image-transform.jpg";

function SectionOne() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-2">
      <div className="left flex justify-center items-center p-[5rem]">
        <div>
          <h3 className="text-5xl font-bold">Transform your brand</h3>
          <p className=" text-gray-500 my-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            veritatis itaque. Architecto illo non est a in rerum asperiores,
            quod at ex labore quas.
          </p>
          <a href="#" className="border-b-4 border-b-yellow-500 ">
            Learn More
          </a>
        </div>
      </div>
      <div className="right">
        <img className="w-full" src={imgTransform} alt="transform your brand" />
      </div>
    </div>
  );
}

export default SectionOne;
