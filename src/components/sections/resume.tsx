import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdVideogameAsset } from "react-icons/md";
import { PiFilmStripFill } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import RowTriangle from "@/components/rowTriangle";

import Skills from "@/components/skills";
import Skill from "@/components/skill";

export default function Resume({ language }: { language: string }) {
  return (
    <>
      <div className="relative px-5 lg:px-16 py-10 w-full flex-1 flex flex-col">
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
              Resume
            </span>
          </h1>
          <div className="hidden md:grid grid-cols-6 gap-3 " data-aos="fade-up">
            <RowTriangle />
          </div>
        </div>

        <div className=" flex-1 grid lg:grid-cols-2 gap-4 py-5">
          <div className=" w-full flex flex-col items-center justify-center p-5 border-2 border-purple/30 dark:border-pink/30  rounded-2xl gap-5"
          data-aos="fade-up">
            <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
              Tecnologies
            </h2>

            <div className="flex flex-wrap w-full gap-5 justify-center items-center">
              {/*          
              <Skills
                skill={{ name: "Figma", icon: <FaFigma /> }}
                percentage={80}
              /> */}

              <Skill skill={{ name: "HTML", icon: <FaHtml5 /> }} />

              <Skill skill={{ name: "CSS", icon: <FaCss3 /> }} />
              <Skill skill={{ name: "JS", icon: <SiJavascript /> }} />
              <Skill skill={{ name: "TS", icon: <SiTypescript /> }} />
              <Skill skill={{ name: "React", icon: <FaReact /> }} />
              <Skill skill={{ name: "Angular", icon: <FaAngular /> }} />
              <Skill skill={{ name: "Next", icon: <TbBrandNextjs /> }} />
              <Skill skill={{ name: "Express", icon: <SiExpress /> }} />
              <Skill skill={{ name: "Tailwind", icon: <SiTailwindcss /> }} />
              <Skill skill={{ name: "Bootstrap", icon: <FaBootstrap /> }} />
              <Skill skill={{ name: "Figma", icon: <FaFigma /> }} />
              <Skill skill={{ name: "MySQL", icon: <GrMysql /> }} />
              <Skill skill={{ name: "MongoDB", icon: <SiMongodb /> }} />
              <Skill skill={{ name: "Firebase", icon: <IoLogoFirebase /> }} />
              <Skill skill={{ name: "Node.js", icon: <FaNode /> }} />
              <Skill skill={{ name: "Github", icon: <FaGithub /> }} />
              <Skill skill={{ name: "Postman", icon: <SiPostman /> }} />
            </div>
          </div>

          <div className=" w-full grid grid-rows-3 gap-4 "
          data-aos="fade-up">
            <div className="p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl flex flex-col items-center justify-center gap-4 w-full">
              <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
                Education
              </h2>
              <div className="flex flex-col ">
                <div className="flex gap-4">
                  <div className="p-2 min-w-[5rem]  max-w-[5rem] md:min-w-[6rem]  md:max-w-[6rem] rounded-lg border-[2px] border-pink dark:border-purple grid place-content-center  text-base md:text-lg text-center">
                    <span className="font-semibold">2017</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                      Professional computer technician
                    </span>
                    <span className=" text-sm">Tecnologico del sur</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[2px] h-3 bg-pink dark:bg-purple ml-11"></div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 rounded-lg min-w-[5rem]  max-w-[5rem] md:min-w-[6rem]  md:max-w-[6rem] border-[2px] border-pink dark:border-purple grid place-content-center text-base md:text-lg text-center">
                    <span className="font-semibold">Present</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">Software engineer</span>
                    <span className=" text-sm">
                      Universidad Nacional Autonoma de Honduras
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 sm:p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl flex flex-col items-center justify-center gap-4 w-full"
            data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
                Personal Skills
              </h2>
              <div className="flex gap-2 items-center">
                <span>Creativity</span>
                <div className="w-3 lg:w-10 h-[2px] bg-pink dark:bg-purple rounded-full"></div>
                <span>TeamWork</span>
                <div className="w-3 lg:w-10 h-[2px] bg-pink dark:bg-purple rounded-full"></div>
                <span>Organized</span>
              </div>
              <div className="flex gap-2 items-center">
                <span>Versatile</span>
                <div className="w-3 lg:w-10 h-[2px] bg-pink dark:bg-purple rounded-full"></div>
                <span>Adaptable</span>
                <div className="w-3 lg:w-10 h-[2px] bg-pink dark:bg-purple rounded-full"></div>
                <span>Disciplined</span>
              </div>
            </div>

            <div className="p-5  border-2 border-purple/30 dark:border-pink/30  rounded-2xl flex flex-col items-center justify-center gap-4 w-full "
            data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem]">
                Hobbyes
              </h2>
              <div className="flex gap-3 sm:gap-6 md:gap-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg border-[2px] border-pink dark:border-purple text-4xl">
                    <CgGym />
                  </div>
                  <span>Gym</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg border-[2px] border-pink dark:border-purple text-4xl">
                    <MdVideogameAsset />
                  </div>
                  <span>Videogames</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg border-[2px] border-pink dark:border-purple text-4xl">
                    <PiFilmStripFill />
                  </div>
                  <span>Films</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
