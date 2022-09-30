import React from "react";
import Milkbottle from "../assets/img/desktop/image-gallery-milkbottles.jpg";
import Orange from "../assets/img/desktop/image-gallery-orange.jpg";
import Cone from "../assets/img/desktop/image-gallery-cone.jpg";
import SugarCubes from "../assets/img/desktop/image-gallery-sugarcubes.jpg";
function Gallery() {
  return (
    <div className="grid grid-cols-4">
      <img src={Milkbottle} alt="Milkbottle" />
      <img src={Orange} alt="Orange" />
      <img src={Cone} alt="Cone" />
      <img src={SugarCubes} alt="SugarCubes" />
    </div>
  );
}

export default Gallery;
