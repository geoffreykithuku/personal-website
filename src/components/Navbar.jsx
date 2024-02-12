import React from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function checkWindowSize() {
    const isGreaterThan758px = window.innerWidth > 758;

    if (isGreaterThan758px) {
      setIsMobileMenuOpen(false);
    } else {
      return;
    }
  }

  window.addEventListener("resize", checkWindowSize);

  return (
    <nav
      className="flex justify-between items-center flex-wrap md:flex-nowrap w-full h-[100px]  px-5 sm:px-10 lg:px-[100px] py-5"
      style={{ fontFamily: "Poppins Sans" }}
    >
      <h1 className="text-[32px] font-bold mr-2 md:mr-10 text-[#2f2e41]">
        Geoff<span className="text-[#CE5A67]">rey.</span>
      </h1>
      <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X size={32} color="#CE5A67" strokeWidth={3} />
        ) : (
          <Menu size={32} color="#CE5A67" strokeWidth={3} />
        )}
      </button>
      <div className="relative w-full mx-auto">
        <ul
          className={`${
            isMobileMenuOpen
              ? "flex flex-col justify-center items-center absolute  w-full mx-auto gap-3 bg-white py-5 rounded"
              : "hidden md:flex  gap-4 lg:gap-10 text-xl  md:justify-end items-center ml-auto w-full"
          } `}
        >
          <li className="hover:text-[#CE5A67] duration-300 ">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-[#CE5A67] duration-300 ">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#CE5A67] duration-300 ">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-[#CE5A67] duration-300 ">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#CE5A67] duration-300 ">
            <a href="#contact">Contact</a>
          </li>

          <li className="bg-[#CE5A67] text-[#FCF5ED] px-4 py-2 rounded-full">
            <a
              href="https://drive.google.com/file/d/1k1YyS-V6_KdoI9kjAOLM2qehvRJP8jzv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
