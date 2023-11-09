import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-[100px] ">
      <h1 className="text-[32px] font-bold mr-10">
        Geoff<span className="text-[#002265]">rey.</span>
      </h1>
      <ul className="flex gap-8 lg:gap-10 text-2xl items-center mr-5 md:mr-0">
        <li>Home</li>
        <li>Skills</li>
        <li>About</li>
        <li>Projects</li>
        <li className="">
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar