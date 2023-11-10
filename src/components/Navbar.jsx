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
    <nav className="flex justify-between items-center flex-wrap md:flex-nowrap w-full h-[100px] " style={{ fontFamily: 'Poppins Sans' }}>
      <h1 className="text-[32px] font-bold mr-2 md:mr-10">
        Geoff<span className="text-[#ff2e63]">rey.</span>
      </h1>
      <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X size={32} color="#ff2e63" strokeWidth={3} />
        ) : (
          <Menu size={32} color="#ff2e63" strokeWidth={3} />
        )}
      </button>
      <div className="relative w-full mx-auto">
        <ul
          className={`${
            isMobileMenuOpen
              ? "flex flex-col justify-center items-center absolute  w-full mx-auto gap-3 bg-white"
              : "hidden md:flex  gap-4 lg:gap-10 text-xl  md:justify-end items-center ml-auto w-full"
          } `}
        >
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Projects</li>
          <li className="">Contact</li>

          <li className="bg-[#ff2e63] text-white px-4 py-2 rounded-full">
            Resume
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
