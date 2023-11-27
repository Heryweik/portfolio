"use client";

import Image from "next/image";
import { IoMdSunny } from "react-icons/io";
import { FaChevronRight, FaMoon } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import { useEffect, useState } from "react";

import Navegation from "@/components/navegation";
import Button from "@/components/button";
import Circle from "@/components/circle";
import CircleSidebar from "@/components/cicleSidebar";
import HomeSection from "@/components/sections/home";
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaFolder } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";

// Importa la biblioteca AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  /* AOS */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  /* Theme dark */
  const [theme, setTheme] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        if (theme === "dark") {
          htmlElement.classList.add("dark");
        } else {
          htmlElement.classList.remove("dark");
        }
      }
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  /* Maneja el sidebar flotante */
  const [isVisible, setIsVisible] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Despliega el sidebar */
  const handleSidebarClick = () => {
    setIsTranslate(!isTranslate);
  };

  /* Crea animacion para le cambio de idioma */
  const [isClicked, setIsClicked] = useState(false);

  const handleArrowClick = () => {
    setIsClicked(true);

    // Después de 300ms (duración de la animación), restablecer el estado
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  /* Scroll suave a secciones */
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  /* Menu tipo modal */
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="relative dark:text-white m-auto text-sm lg:text-base">
      <div className="relative ml-0">
        <div
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 h-auto bg-gradient-to-r from-purple/40 to-pink/40 transition-all duration-300 rounded-s-2xl flex justify-center items-center z-10 
            ${
              isVisible
                ? ""
                : "opacity-0 translate-x-36 transition-all invisible "
            }
            ${
              isTranslate
                ? "opacity-0 translate-x-36 transition-all invisible "
                : ""
            }`}
        >
          <button
            className="hover:text-pink flex-1 py-7 px-[2px] z-30"
            onClick={handleSidebarClick}
          >
            <FaChevronLeft className="text-lg md:text-2xl" />
          </button>
        </div>
        <div
          className={`fixed top-1/2 right-3 transform -translate-y-1/2 h-auto bg-gradient-to-r from-purple/40 to-pink/40 transition-all duration-300 flex flex-col gap-4 justify-center items-center p-1 py-4 w-auto rounded-full z-50 element ${
            isTranslate
              ? ""
              : "opacity-0 translate-x-36 transition-all invisible "
          }`}
          /* style={{ backdropFilter: "blur(10px)" }} */
        >
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            <CircleSidebar Icon={IoMdHome} />
          </a>

          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            <CircleSidebar Icon={FaUser} />
          </a>

          <a href="#resume" onClick={(e) => scrollToSection(e, "resume")}>
            <CircleSidebar Icon={HiAcademicCap} />
          </a>

          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            <CircleSidebar Icon={FaFolder} />
          </a>

          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            <CircleSidebar Icon={RiContactsBook2Fill} />
          </a>

          <div
            className={`arrow-container ${
              isClicked ? "clicked" : ""
            } border-b-2 border-black dark:border-white`}
            onClick={handleArrowClick}
          >
            En
            <FaLongArrowAltUp className={`arrow-up ${isClicked ? "up" : ""}`} />
            <FaLongArrowAltDown
              className={`arrow-down ${isClicked ? "down" : ""} ml-[-10px]`}
            />
          </div>

          <label className="switch z-40 w-[44px] h-[20px] md:w-[64px] md:h-[34px] text-[12px] md:text-[17px] ">
            <span className="sun ">
              <IoMdSunny />
            </span>
            <span className="moon">
              <FaMoon />
            </span>
            <input
              type="checkbox"
              className="input"
              onChange={handleTheme}
              checked={theme === "dark"}
            />
            <span className="slider left-1 bottom-1 md:before:left-[2px] md:before:bottom-[2px] before:w-[20px] before:h-[20px] md:before:w-[30px] md:before:h-[30px]"></span>
          </label>

          <button className="bg-pink dark:bg-purple p-3 rounded-full hover:bg-gradient-to-r hover:from-purple hover:to-pink hover:transition-all hover:duration-300 hover:ease-in-out ">
            <FaFileDownload className="text-lg md:text-2xl" />
          </button>

          <button
            className="hover:text-pink flex-1 py-1 px-[2px] z-30"
            onClick={handleSidebarClick}
          >
            <FaChevronRight className="text-lg md:text-2xl" />
          </button>
        </div>

        <section id="home" className=" min-h-screen w-full flex flex-col">
          <nav className=" w-full h-auto p-5 flex justify-center items-center gap-5 sticky top-0 z-30 bg-white dark:bg-black transition-all duration-300 ease-in-out">
            <div className=" font-semibold flex h-10 items-center justify-center gap-5 flex-1">
              <div>
                <button
                  className="block lg:hidden text-3xl transition-transform duration-300 transform m-auto"
                  onClick={handleMenuClick}
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  {isOpen ? <MdOutlineZoomOutMap /> : <IoMenu />}
                </button>
              </div>

              <div className="hidden lg:flex items-center justify-center lg:justify-start gap-5">
                <Circle Icon={FaGithub} />
                <Circle Icon={FaLinkedinIn} />
              </div>
              <div className="hidden lg:flex  items-center justify-evenly flex-1">
                <Navegation
                  name="Home"
                  href="#home"
                  scrollToSection={scrollToSection}
                />

                <Navegation
                  name="About"
                  href="#about"
                  scrollToSection={scrollToSection}
                />

                <Navegation
                  name="Resume"
                  href="#resume"
                  scrollToSection={scrollToSection}
                />

                <Navegation
                  name="Projects"
                  href="#projects"
                  scrollToSection={scrollToSection}
                />

                <Navegation
                  name="Contact"
                  href="#contact"
                  scrollToSection={scrollToSection}
                />
              </div>

              <div className="flex items-center  md:justify-center gap-5">
                <div
                  className={`arrow-container ${
                    isClicked ? "clicked" : ""
                  } border-b-2 border-black dark:border-white`}
                  onClick={handleArrowClick}
                >
                  En
                  <FaLongArrowAltUp
                    className={`arrow-up ${isClicked ? "up" : ""}`}
                  />
                  <FaLongArrowAltDown
                    className={`arrow-down ${
                      isClicked ? "down" : ""
                    } ml-[-10px]`}
                  />
                </div>

                <label className="switch z-40 w-[44px] h-[20px] md:w-[64px] md:h-[34px] text-[12px] md:text-[17px] ">
                  <span className="sun ">
                    <IoMdSunny />
                  </span>
                  <span className="moon">
                    <FaMoon />
                  </span>
                  <input
                    type="checkbox"
                    className="input"
                    onChange={handleTheme}
                    checked={theme === "dark"}
                  />
                  <span className="slider left-1 bottom-1 md:before:left-[2px] md:before:bottom-[2px] before:w-[20px] before:h-[20px] md:before:w-[30px] md:before:h-[30px]"></span>
                </label>

                <div className="hidden md:block">
                  <Button name="Download CV" Icon={FaFileDownload} />
                </div>
                <button className="bg-pink dark:bg-purple p-3 rounded-full hover:bg-gradient-to-r hover:from-purple hover:to-pink hover:transition-all hover:duration-300 hover:ease-in-out block md:hidden">
                  <FaFileDownload className="text-lg md:text-2xl" />
                </button>
              </div>
            </div>
          </nav>

          <HomeSection />
        </section>

        {/* Navbar flotante */}
        <div
          className={`fixed top-0 left-0 w-full h-full ${
            isOpen ? "flex " : "hidden"
          } flex-col items-center justify-center bg-pink/5 dark:bg-purple/20 z-40 lg:invisible`}
        >
          <div
            className=" py-20 w-[80%] relative gap-5 rounded-2xl  animate-fade element2   bg-gradient-to-r from-purple/40 to-pink/40 transition-all duration-300 flex flex-col  justify-center items-center  elemento "
            style={{ backdropFilter: "blur(10px)" }}
          >
            <button
              className="absolute top-5 right-5 text-2xl "
              onClick={handleMenuClick}
            >
              <IoMdClose />
            </button>
            <div className="flex items-center justify-center lg:justify-start gap-5 mb-5 ">
              <Circle Icon={FaGithub} />
              <Circle Icon={FaLinkedinIn} />
            </div>
            <div className="flex flex-col items-center justify-evenly flex-1 gap-5 font-semibold">
              <Navegation
                name="Home"
                href="#home"
                scrollToSection={scrollToSection}
              />

              <Navegation
                name="About"
                href="#about"
                scrollToSection={scrollToSection}
              />

              <Navegation
                name="Resume"
                href="#resume"
                scrollToSection={scrollToSection}
              />

              <Navegation
                name="Projects"
                href="#projects"
                scrollToSection={scrollToSection}
              />

              <Navegation
                name="Contact"
                href="#contact"
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        </div>

        <section id="about" className="flex min-h-screen flex-col ">
          {" "}
          {/* border-t-[3px] border-b-[3px] border-purple/40 shadow-custom2 */}
          <About />
        </section>

        <section id="resume" className="flex min-h-screen">
          <Resume />
        </section>

        <section id="projects" className="flex min-h-screen flex-col ">
          <Projects />
        </section>

        <section id="contact" className="grid min-h-screen ">
          <Contact />
        </section>
      </div>
    </main>
  );
}
