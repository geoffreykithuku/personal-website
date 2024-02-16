import data from "../data/projects";
import ProjectCard from "./ProjectCard";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  

  // determine slides per view based on screen size. on small screens, show 1 slide, on medium screens, show 2 slides, on large screens, show 3 slides
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const slidesPerView = () => {
    if (windowWidth < 768) {
      return 1;
    } else if (windowWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className="w-full my-[100px] projects mx-auto " id="projects">
      <h1 className="text-[36px] font-bold text-[#2f2e41] flex flex-col w-full mx-auto items-center md:items-start mt-10 md:mt-0">
        Check Out <br />
        <span className="text-[#CE5A67]">My Work</span>
      </h1>

   

      <Swiper
        
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={slidesPerView()}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((project) => {
          return (
            <SwiperSlide key={project.id} className="my-12">
              <ProjectCard project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;
