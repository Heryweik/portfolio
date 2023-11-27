import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import Proyect from "@/components/proyect";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaNode } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import RowTriangle from "@/components/rowTriangle";

interface Project {
  name: string;
  image: string;
  Icon1: React.ElementType;
  Icon2: React.ElementType;
  Icon3: React.ElementType;
  Icon4: React.ElementType;
  Icon5: React.ElementType;
  Icon6: React.ElementType;
  description: string;
  images: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Seleccionar el primer proyecto cuando el componente se activa
    if (projects.length > 0) {
      setSelectedProject(projects[0]);
    }
  }, []);

  const projects: Project[] = [
    {
      name: "UniExchange",
      image: "/ue.PNG",
      Icon1: FaReact,
      Icon2: TbBrandNextjs,
      Icon3: IoLogoFirebase,
      Icon4: SiTailwindcss,
      Icon5: FaNode,
      Icon6: FaFigma,
      description: "Descripción detallada de UniExchange.",
      images: ["/ue1.png", "/ue2.png", "/ue3.png"],
    },
    {
      name: "CodeWeb",
      image: "/codeweb.PNG",
      Icon1: FaAngular,
      Icon2: SiExpress,
      Icon3: SiMongodb,
      Icon4: FaBootstrap,
      Icon5: FaNode,
      Icon6: FaFigma,
      description: "Descripción detallada de CodeWeb.",
      images: ["/cw1.png", "/cw2.png", "/cw3.png"],
    },
    {
      name: "DentalServices",
      image: "/ds.png",
      Icon1: FaReact,
      Icon2: SiExpress,
      Icon3: GrMysql,
      Icon4: FaBootstrap,
      Icon5: FaNode,
      Icon6: FaFigma,
      description: "Descripción detallada de DentalServices.",
      images: ["/ue1.png", "/ue2.png", "/ue3.png"],
    },
    {
      name: "504MarketPlace",
      image: "/504.PNG",
      Icon1: FaReact,
      Icon2: SiExpress,
      Icon3: GrMysql,
      Icon4: FaBootstrap,
      Icon5: FaNode,
      Icon6: FaFigma,
      description: "Descripción detallada de 504MarketPlace.",
      images: ["/ue1.png", "/ue2.png", "/ue3.png"],
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <div className="relative px-5 lg:px-16 py-10 w-full flex-1 flex flex-col text-center gap-4 justify-between">
        <div className="flex justify-between w-full">
          <h1 className="font-bold flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1.5rem] text-center md:text-left"
          data-aos="fade-up-right">
            <span
              className="bg-gradient-to-r from-purple to-pink text-transparent inline-block"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h1>
          <div className="hidden md:grid grid-cols-6 gap-3 " data-aos="fade-up">
            <RowTriangle />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className=" w-full flex flex-col items-center p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl gap-4"
          data-aos="fade-up">
            <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
              Explore my projects
            </h2>
            <div className="flex flex-1 flex-wrap gap-5 lg:gap-20 justify-center">
              {projects.map((project) => (
                <Proyect
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>

          {selectedProject && (
            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4"
            data-aos="fade-up">
              <div className=" w-full p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl lg:col-span-2 flex flex-col justify-center items-center gap-4">
                <span className="font-bold text-base lg:text-lg">
                  {selectedProject.name}
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 justify-center">
                    <selectedProject.Icon1 className="text-3xl" />
                    <selectedProject.Icon2 className="text-3xl" />
                    <selectedProject.Icon3 className="text-3xl" />
                    <selectedProject.Icon4 className="text-3xl" />
                    <selectedProject.Icon5 className="text-3xl" />
                    <selectedProject.Icon6 className="text-3xl" />
                  </div>

                  <span>{selectedProject.description}</span>
                </div>
              </div>

              <div className="flex-1 flex col-span-3 border-2 border-purple/30 dark:border-pink/30 rounded-2xl"
              data-aos="fade-up">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full h-[12rem] sm:h-[18rem] md:h-[20rem] lg:h-[20rem] xl:h-[25rem] "
                >
                  {selectedProject.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        className="block m-auto object-cover h-full border-[2px]  rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
