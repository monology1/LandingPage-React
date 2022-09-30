import React from "react";
import StandOut from "../assets/img/desktop/image-stand-out.jpg";
function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-2">
      <div className="left row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
        <img
          className="w-full"
          src={StandOut}
          alt="Stand out to the right audience"
        />
      </div>
      <div className="right row-start-1 row-end-2 flex justify-center items-center p-[5rem]">
        <div>
          <h3 className="text-5xl font-bold">
            Stand out to the right audience
          </h3>
          <p className=" text-gray-500 my-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            veritatis itaque. Architecto illo non est a in rerum asperiores,
            quod at ex labore quas.
          </p>
          <a href="#" className="border-b-4 border-b-rose-400 ">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
