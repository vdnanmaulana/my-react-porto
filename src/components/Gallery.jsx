import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="flex flex-row overflow-x-auto md:overflow-hidden overflow-y-hidden gap-16 py-5 px-[60px]">
          <img
            src={img1}
            className="rotate-[3deg] w-[250px] h-[330px] rounded-lg object-cover"
          />
          <img
            src={img2}
            className="rotate-[-9deg] w-[250px] h-[330px] rounded-lg object-cover"
          />
          <img
            src={img3}
            className="rotate-[6deg] w-[250px] h-[330px] rounded-lg object-cover"
          />

          <img
            src={img4}
            className="rotate-[-11deg] w-[250px] h-[330px] rounded-lg object-cover"
          />

          <img
            src={img5}
            className="rotate-[6deg] w-[250px] h-[330px] rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
