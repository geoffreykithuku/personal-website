import React from "react";
import Hero from "../assets/Hero.svg";
import { ArrowDownToLine } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row w-full mt-[60px] justify-between home mx-auto items-center mb-24"
    >
      <div className="text-[36px] font-bold text-[#2f2e41] flex flex-col w-full mx-auto items-center md:items-start mt-10 md:mt-0 flex-nowrap">
        <h1>Hello!</h1>
        <h2>
          I'm <span className="text-[#CE5A67] ">Geoffrey</span>
        </h2>
        <h2 className="text-center md:text-left">Software Developer.</h2>
        <a
          href="https://drive.google.com/uc?export=download&id=133XfxszAW7dFfirsSlYoYweMiXUyNMnm"
          className="bg-[#CE5A67] text-[#FCF5ED] px-5 py-2 rounded-[50px] mt-8 text-[22px] font-[400] flex items-center gap-4 transition-all duration-300 hover:bg-[#BF4B6B] w-fit"
          download
        >
          <span className="flex items-center">
            <p>Download CV</p>
            <ArrowDownToLine size={20} color="#fff" />
          </span>
        </a>
      </div>

      <div className="w-full max-w-[450px] max-h-[450px] h-full flex items-center justify-center">
        <img src={Hero} alt="Home illustration" className="w-full" />
      </div>
    </section>
  );
};

export default Home;
