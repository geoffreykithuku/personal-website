import React from "react";
import Hero from "../assets/Hero.svg";
import { ArrowDownToLine } from "lucide-react";
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full mt-[60px] justify-between home mx-auto items-center mb-24">
      <div className="text-[32px] md:text-[60px] font-bold text-[#606060] flex flex-col w-full mx-auto items-start mt-10 md:mt-0 flex-nowrap">
        <h1>Hello!</h1>
        <h2>
          I'm {}
          <span className="text-[40px] md:text-[78px] text-[#ff2e63]">
            Geoffrey
          </span>
        </h2>
        <h2 className="flex-nowrap text-[#ff2e63] md:text-[40px] flex">
          Software Developer.
        </h2>
        <button className="bg-[#ff2e63] text-white px-5 py-2 rounded-[50px] mt-8 text-[22px] font-[400] flex items-center gap-4">
          <p>Download CV</p>
          <ArrowDownToLine size={20} color="#fff" />
        </button>
      </div>

      <div className="w-full max-w-[450px] max-h-[450px] h-full flex items-center justify-center">
        <img src={Hero} alt="home" className="w-full" />
      </div>
    </div>
  );
};

export default Home;


