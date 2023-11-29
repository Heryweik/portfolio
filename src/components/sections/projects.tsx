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
  description: (lang: string) => string;
  images: string[];
  date: string;
}

export default function Projects({ language }: { language: string }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

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
      description: (lang: string) =>
      lang === 'es'
        ? 'UniExchange es una plataforma educativa y social diseñada para conectar a estudiantes, docentes y universidades. Ofrece un espacio de administración para universidades; Los estudiantes tienen la capacidad de unirse a facultades, realizar publicaciones y calificar a sus profesores.'
        : 'UniExchange is an educational and social platform designed to connect students, teachers, and universities. It provides an administration space for universities, while students have the ability to join faculties, make posts, and rate their teachers. ',
      images: ["/ue1.png", "/ue2.png", "/ue3.png"],
      date: "28/11/2023",
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
      description: (lang: string) =>
      lang === 'es'
        ? 'CodeWeb es una plataforma de programación colaborativa para crear proyectos con HTML, CSS y JavaScript. Permite compartir y visualizar proyectos con otros usuarios, y cuenta con un espacio de administración.'
        : 'CodeWeb is a collaborative programming platform for creating projects with HTML, CSS and JavaScript. It allows you to share and view projects with other users, and has an administration space.',
      images: ["/cw1.png", "/cw2.png", "/cw3.png"],
      date: "22/08/2023",
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
      description: (lang: string) =>
      lang === 'es'
        ? 'DentalServices es una plataforma SaaS para la gestión de materiales y herramientas dentales. Incluye un sistema de ventas y un área de administración para los propietarios.'
        : 'DentalServices is a SaaS platform for the management of dental materials and tools. It includes a sales system and an administration area for owners.',
      images: ["/ds1.JPG", "/ds2.JPG", "/ds3.JPG"],
      date: "03/07/2023",
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
      description: (lang: string) =>
      lang === 'es'
        ? '504MarketPlace es una plataforma tipo MarketPlace, donde cualquier usuario puede comprar y vender productos. Cuenta con un sistema de filtros, denuncias y otros aspectos clave de una plataforma de su tipo.'
        : '504MarketPlace is a MarketPlace type platform, where any user can buy and sell products. It has a system of filters, complaints and other key aspects of a platform of its type.',
      images: ["/mp1.png", "/mp2.png", "/mp3.png"],
      date: "16/03/2023",
    },
  ];

  const handleProjectClick = (index: number) => {
    // Si el índice actual es diferente al índice activo, actualizamos el estado
    if (selectedProjectIndex !== index) {
      setSelectedProjectIndex(index);
    }
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  /* Le decimos que por defecto deje el primer proyecto seleccionado */
  useEffect(() => {
    if (projects.length > 0) {
      setSelectedProjectIndex(0); 
      setSelectedProject(projects[0]);
    }
  }, []);

  return (
    <>
      <div className="relative px-5 lg:px-16 py-10 w-full flex-1 flex flex-col text-center gap-4 justify-between">
        <div className="flex justify-between w-full">
          <h1
            className="font-bold flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1.5rem] text-center md:text-left"
            data-aos="fade-up-right"
          >
            <span
              className="bg-gradient-to-r from-purple to-pink text-transparent inline-block"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </span>
          </h1>
          <div className="hidden md:grid grid-cols-6 gap-3 " data-aos="fade-up">
            <RowTriangle />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div
            className=" w-full flex flex-col items-center p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl gap-4"
            data-aos="fade-up"
          >
            <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
            {language === 'es' ? 'Explora mis proyectos' : 'Explore my projects'}
            </h2>
            <div className="flex flex-1 flex-wrap gap-5 lg:gap-20 justify-center">
              {projects.map((project, index) => (
                <Proyect
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  onClick={() => handleProjectClick(index)}
                  onSelect={() => handleProjectSelect(project)}
                  index={index}
                  isSelected={selectedProjectIndex === index}
                />
              ))}
            </div>
          </div>

          {selectedProject && (
            <div
              className="flex flex-col lg:grid lg:grid-cols-5 gap-4"
              data-aos="fade-up"
            >
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

                  <span>{selectedProject.description(language)}</span>
                  <span className="font-bold">{selectedProject.date}</span>
                </div>
              </div>

              <div
                className="flex-1 flex justify-center items-center col-span-3 border-2 border-purple/30 dark:border-pink/30 rounded-2xl"
                data-aos="fade-up"
              >
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
