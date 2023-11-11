import React from 'react'
import Express from '../assets/Express.svg'
import Git from '../assets/Git.png'
import Html from '../assets/html5.png'
import Js from '../assets/Js.png'
import Mongo from '../assets/Mongo.svg'
import Node from '../assets/Nodejs.svg'
import ReactImg from '../assets/React.svg'
import Rails from '../assets/Rails.svg'
import Ruby from '../assets/Ruby.svg'
import Tailwind from '../assets/Tailwind.svg'
import Python from '../assets/Python.svg'
import Django from '../assets/Django.svg'
import Nextjs from '../assets/Nextjs.svg'
import Bootstrap from '../assets/Bootstrap.png' 
import Github from '../assets/Github.svg'
import Typescript from '../assets/TypeScript.svg'


const Skills = () => {

  return (
    <div className="my-20 skills">
      <h1 className="text-[45px] text-[#2c3333] font-bold text-center md:text-left">
        Tools & Technologies <span className="text-[#ff2e63]">I Work With</span>
      </h1>
      <div className="w-full grid gap-6 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 mt-10">
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Express} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Git} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Html} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Mongo} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Node} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={ReactImg} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Js} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Rails} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Ruby} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Tailwind} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Python} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Nextjs} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Github} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Bootstrap} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Django} alt="" className="w-full" />
        </div>
        <div className="shadow max-w-[60px] w-full flex justify-center items-center max-h-[60px] p-2 mx-auto hover:translate-y-[-5px] duration-300">
          <img src={Typescript} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Skills