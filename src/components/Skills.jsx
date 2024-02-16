import React from "react";
import Express from "../assets/Express.svg";
import Git from "../assets/Git.png";
import Html from "../assets/html5.png";
import Js from "../assets/Js.png";
import Mongo from "../assets/Mongo.svg";
import Node from "../assets/Nodejs.svg";
import ReactImg from "../assets/React.svg";
import Rails from "../assets/Rails.svg";
import Ruby from "../assets/Ruby.svg";
import Tailwind from "../assets/Tailwind.svg";
import Python from "../assets/Python.svg";
import Django from "../assets/Django.svg";
import Nextjs from "../assets/Nextjs.svg";
import Bootstrap from "../assets/Bootstrap.png";
import Github from "../assets/Github.svg";
import Typescript from "../assets/TypeScript.svg";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="my-20 skills" id="skills">
      <h1 className="text-[36px] font-bold text-[#2f2e41] flex flex-col w-full mx-auto items-center md:items-start mt-10 md:mt-0">
        Tools & Technologies <span className="text-[#CE5A67]">I Work With</span>
      </h1>
      <div
        ref={ref}
        className={`w-full grid gap-6 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 mt-10 ${
          inView
            ? "animate__animated animate__fadeInRight animate__delay-1s"
            : ""
        }`}
      >
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Express} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Git} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Html} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Mongo} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Node} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={ReactImg} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Js} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Rails} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Ruby} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Tailwind} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Python} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Nextjs} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Github} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Bootstrap} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Django} alt="" className="w-full" />
        </div>
        <div className="shadow bg-white max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Typescript} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
