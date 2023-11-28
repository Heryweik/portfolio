/* import Image from "next/image"; */
import Button from "@/components/button";
import Circle from "@/components/circle";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import RowTriangle from "@/components/rowTriangle";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function About({ language }: { language: string }) {
  /* Modal CV */
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative px-5 lg:px-16 py-10 w-full flex-1 flex flex-col ">
        <div className="flex justify-between w-full">
          <h1
            className="font-bold flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1.5rem] text-center md:text-left"
            data-aos="fade-up-right"
          >
            <span
              className="bg-gradient-to-r from-purple to-pink text-transparent inline-block m-auto"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {language === "es" ? "Acerca de mí" : "About Me"}
            </span>
          </h1>
          <div className="hidden md:grid grid-cols-6 gap-3 " data-aos="fade-up">
            <RowTriangle />
          </div>
        </div>

        <div className=" flex-1 flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-5  pt-8">
          <div className="xl:col-span-2 w-56 md:w-80 h-auto flex flex-col gap-11  lg:ml-[2rem]">
            <div
              className="relative bg-pink dark:bg-purple rounded-2xl w-full  h-64 md:h-96"
              data-aos="fade-up"
            >
              <div className="absolute overflow-hidden border-[3px] bg-white dark:bg-black border-purple dark:border-pink rounded-2xl w-full h-full left-4 top-4 md:left-8 md:top-8 ">
                <img
                  src="/about.JPG"
                  width={350}
                  height={50}
                  alt="Imagen de about"
                  className="object-cover rounded-2xl mt-[-2rem] md:mt-[-3rem]"
                />
              </div>
            </div>

            <div className="flex w-full gap-5 justify-center">
              <a href="https://github.com/Heryweik">
                <Circle Icon={FaGithub} />
              </a>
              <a href="https://www.linkedin.com/in/yhonny-yupanky-aplicano">
                <Circle Icon={FaLinkedinIn} />
              </a>
            </div>
          </div>

          <div className=" xl:col-span-3 w-full h-full flex flex-col justify-evenly gap-4">
            <div
              className="text-left p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl"
              data-aos="fade-up"
            >
              <p>
                {language === "es" ? "¡Hola! Soy" : `Hello! I'm`}{" "}
                <span className="font-bold text-pink dark:text-purple">
                  Yhonny
                </span>
                ,{" "}
                {language === "es"
                  ? "un apasionado desarrollador web con un fuerte enfoque en el frontend. Mi creatividad se refleja en mi experiencia con herramientas como Figma y Procreate, permitiéndome no solo crear soluciones funcionales, sino también estéticamente atractivas."
                  : "a passionate web developer with a strong focus on the frontend. My creativity is reflected in my experience with tools like Figma and Procreate, allowing me to not only create functional solutions, but also aesthetically appealing ones."}
              </p>
              <br />
              <p>
                {language === "es"
                  ? "Tengo una sólida base en tecnologías como React, Next.js, Angular, y he trabajado tanto con JavaScript como con TypeScript. Mi destreza en CSS y frameworks como Tailwind y Bootstrap me permiten diseñar interfaces atractivas y altamente responsivas. Soy un comunicador efectivo, trabajador en equipo y me adapto rápidamente a nuevas tecnologías."
                  : "I have a solid foundation in technologies such as React, Next.js, Angular, and have worked with both JavaScript and TypeScript. My skills in CSS and frameworks such as Tailwind and Bootstrap allow me to design attractive and highly responsive interfaces. I am an effective communicator, team player and I quickly adapt to new technologies."}
              </p>
              <br />
              <p>
                {language === "es"
                  ? "En mi búsqueda continua de crecimiento profesional, estoy emocionado por contribuir con mis habilidades y conocimientos a proyectos innovadores."
                  : "In my continued pursuit of professional growth, I am excited to contribute my skills and knowledge to innovative projects."}
              </p>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">
                  {language === "es" ? "Edad" : "Age"}:
                </span>
                <span className="col-span-3">24</span>
              </div>

              <div className="grid grid-cols-5 py-2 px-10">
                <span className="col-span-2">
                  {language === "es" ? "Residencia" : "Residence"}:
                </span>
                <span className="col-span-3">Honduras</span>
              </div>
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">
                  {language === "es" ? "Dirección" : "Address"}:
                </span>
                <span className="col-span-3">Tegucigalpa, Col. Miraflores</span>
              </div>
              <div className="grid grid-cols-5 py-2 px-10">
                <span className="col-span-2">
                  {language === "es" ? "Correo" : "E-mail"}:
                </span>
                <span className="col-span-3">yhonny296@gmail.com</span>
              </div>
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">
                  {language === "es" ? "Teléfono" : "Phone"}:
                </span>
                <span className="col-span-3">+504 8883-9705</span>
              </div>
            </div>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:justify-evenly"
              data-aos="fade-up"
            >
              <button
                  className=" bg-pink dark:bg-purple flex justify-center items-center  whitespace-nowrap rounded-2xl p-[3px] font-semibold hover:bg-gradient-to-r hover:from-purple hover:to-pink dark:hover:bg-purple/60 hover:transition-all hover:duration-300 hover:ease-in-out "
                >
                
            <a href={language === "es" ? "/CVES.pdf" : "/CVEN.pdf"} download="YhonnyAplicanoCV.pdf"
            className="flex flex-1">
                  <span className="bg-white dark:bg-black flex-1 lg:px-5 lg:py-2 p-2 rounded-xl rounded-e-none">
                  {language === "es" ? "Descargar CV" : "Download CV"}
                  </span>

                  <div className=" p-2 lg:px-4 rounded-2xl">
                    <FaFileDownload className="m-auto text-lg lg:text-2xl" />
                  </div>
                  
              </a>
                </button>


                <button
                  className=" bg-pink dark:bg-purple flex justify-center items-center  whitespace-nowrap rounded-2xl p-[3px] font-semibold hover:bg-gradient-to-r hover:from-purple hover:to-pink dark:hover:bg-purple/60 hover:transition-all hover:duration-300 hover:ease-in-out "
                  /* onClick={handleMenuClick} */
                >
                  
              <a href={language === "es" ? "/CVES.pdf" : "/CVEN.pdf"} target="_blank" rel="noopener noreferrer"
              className="flex flex-1">
                  <span className="bg-white dark:bg-black flex-1 lg:px-5 lg:py-2 p-2 rounded-xl rounded-e-none">
                    {language === "es" ? "Ver CV" : "Watch CV"}
                  </span>

                  <div className=" p-2 lg:px-4 rounded-2xl">
                    <FaEye className="m-auto text-lg lg:text-2xl" />
                  </div>
                  
              </a>
                </button>
            </div>
          </div>
        </div>
        {/* <div
          className={`fixed top-0 left-0 w-full h-full ${
            isOpen ? "flex " : "hidden"
          } flex-col items-center justify-center bg-pink/5 dark:bg-purple/20 z-50 p-5`}
        >
          <div
            className=" pt-11 relative rounded-2xl  animate-fade element2   bg-gradient-to-r from-purple/40 to-pink/40 transition-all duration-300 flex flex-col  justify-center items-center  elemento w-96 h-full"
            style={{ backdropFilter: "blur(10px)" }}
          >

            <button
              className="absolute top-3 right-3 text-2xl "
              onClick={handleMenuClick}
            >
              <IoMdClose />
            </button>
            <div className="flex  items-center justify-center  overflow-hidden">
            <img
                src="/CVES.pdf"
                alt="Imagen de about"
                className="h-full rounded-b-2xl"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
