import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import smImg from "../images/small_img.jpg";
import bgImg from "../images/big_img.jpg";
import img_1 from "../images/grid_img/img_1.jpg";
import img_2 from "../images/grid_img/img_2.jpg";
import img_3 from "../images/grid_img/img_3.jpg";
import img_4 from "../images/grid_img/img_4.jpg";
import img_5 from "../images/grid_img/img_5.jpg";
import img_6 from "../images/grid_img/img_6.jpg";

const Hero = () => {
  return (
    <div className="w-full  bg-zinc-100 flex flex-col justify-between pt-28">
      
      <div className="mt-4 ">
        <img className="hidden md:flex w-{85%} m-auto" src={bgImg} />
        <img className="md:hidden w-full" src={smImg} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-10 pt-28">
        <img className=" block" src={img_1} alt="grid_img" />
        <img className=" block" src={img_2} alt="grid_img" />
        <img className=" block" src={img_3} alt="grid_img" />
        <img className=" block" src={img_4} alt="grid_img" />
        <img className= "block" src={img_5} alt="grid_img" />
        <img className=" block" src={img_6} alt="grid_img" />
      </div>
      </div>
 
  );
};

export default Hero;
