import React from "react";

function SectionThree() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-2 h-[700px]">
      <div className="left flex justify-center items-end bg-sec-three-left bg-cover text-center">
        <div className="m-[6rem] w-[450px] opacity-60">
          <h3 className="text-3xl font-bold pb-[2rem]">Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            veritatis itaque. Architecto illo non est a in rerum asperiores,
            quod at ex labore quas.
          </p>
        </div>
      </div>
      <div className="right flex justify-center items-end bg-sec-three-right bg-cover text-center">
        <div className="m-[6rem] w-[450px] opacity-60">
          <h3 className="text-3xl font-bold pb-[2rem]">Photography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            veritatis itaque. Architecto illo non est a in rerum asperiores,
            quod at ex labore quas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
