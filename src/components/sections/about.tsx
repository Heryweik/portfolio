/* import Image from "next/image"; */
import Button from "@/components/button";
import Circle from "@/components/circle";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import RowTriangle from "@/components/rowTriangle";

export default function About({ language }: { language: string }) {
  return (
    <>
      <div className="relative px-5 lg:px-16 py-10 w-full flex-1 flex flex-col ">
        <div className="flex justify-between w-full">
          <h1 className="font-bold flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1.5rem] text-center md:text-left"
          data-aos="fade-up-right">
            <span
              className="bg-gradient-to-r from-purple to-pink text-transparent inline-block m-auto"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {language === 'es' ? 'Acerca de mí' : 'About Me'}
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
              <Circle Icon={FaGithub} />
              <Circle Icon={FaLinkedinIn} />
            </div>
          </div>

          <div className=" xl:col-span-3 w-full h-full flex flex-col justify-evenly gap-4"
          >
            <div className="text-left p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl"
            data-aos="fade-up">
              <p>
                ¡Hola! Soy{" "}
                <span className="font-bold text-pink dark:text-purple">
                  Yhonny
                </span>
                , un apasionado desarrollador web con un fuerte enfoque en el
                frontend. Mi creatividad se
                refleja en mi experiencia con herramientas como Figma y
                Procreate, permitiéndome no solo crear soluciones funcionales,
                sino también estéticamente atractivas. 
                </p>
                <br />
                <p>Tengo una sólida base en
                tecnologías como React, Next.js, Angular, y he trabajado tanto
                con JavaScript como con TypeScript. Mi destreza en CSS y
                frameworks como Tailwind y Bootstrap me permiten diseñar
                interfaces atractivas y altamente responsivas. Soy un
                comunicador efectivo, trabajador en equipo y me adapto
                rápidamente a nuevas tecnologías. 
                </p>
                <br />
                <p>En mi búsqueda continua de
                crecimiento profesional, estoy emocionado por contribuir con mis
                habilidades y conocimientos a proyectos innovadores.
              </p>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">Age:</span>
                <span className="col-span-3">24</span>
              </div>

              <div className="grid grid-cols-5 py-2 px-10">
                <span className="col-span-2">Residence:</span>
                <span className="col-span-3">Honduras</span>
              </div>
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">Address:</span>
                <span className="col-span-3">Tegucigalpa, Col. Miraflores</span>
              </div>
              <div className="grid grid-cols-5 py-2 px-10">
                <span className="col-span-2">E-mail:</span>
                <span className="col-span-3">yhonny296@gmail.com</span>
              </div>
              <div className="grid grid-cols-5 border-2 border-purple/30 dark:border-pink/30 py-2 px-10 rounded-2xl font-semibold">
                <span className="col-span-2">Phone:</span>
                <span className="col-span-3">+504 8883-9705</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:justify-evenly"
            data-aos="fade-up">
              <Button name="Download CV" Icon={FaFileDownload} />
              <Button name="Watch CV" Icon={FaEye} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
