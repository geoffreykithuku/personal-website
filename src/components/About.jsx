import React from "react";
import AboutImg from "../assets/About.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      id="about"
      className="my-[60px] flex items-center justify-center w-full about"
    >
      <div
        className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-between"
        ref={ref}
      >
        <div className="w-full text-center md:text-left gap-6 flex flex-col">
          <span
            className={`text-[36px] font-bold ${
              inView
                ? "animate__animated animate__slideInLeft animate__delay-1s"
                : ""
            }`}
          >
            <h1 className="text-[#2f2e41]">Let Me Introduce</h1>
            <h1 className="text-[#CE5A67] font-[800]">Myself</h1>
          </span>
          <p
            className={`max-w-[500px] text-[#2f2e41] text-sm md:text-base text-center md:text-left mx-auto md:mx-0
          ${
            inView ? "animate__animated animate__zoomIn animate__delay-2s" : ""
          }`}
          >
            As a junior developer, I wield a skill set encompassing JavaScript,
            ReactJS, and NextJS, driving captivating and interactive user
            interfaces. Simultaneously, my expertise in SQL, NodeJS, and Ruby on
            Rails empowers robust backend development.
          </p>
        </div>
        <div
          className={`hidden md:flex justify-center items-center max-w-[450px] mx-auto w-full ${
            inView
              ? "animate__animated animate__zoomIn animate__delay-1s"
              : ""
          }
            `}
        >
          <img src={AboutImg} alt="about" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
