import Button from "@/components/button";
import Circle from "@/components/circle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import RowCircle from "@/components/rowCircle";

export default function HomeSection() {
  return (
    <section className="relative px-5 lg:px-16 py-5 w-full flex-1 flex flex-col justify-between items-stretch md:mt-16">
      <div className="md:py-11 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-0 justify-between ">
        <div className="flex gap-5 flex-col items-start  xl:flex-row">
          <div className="flex flex-col sm:gap-6">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[1.5rem]">
              YHONNY YUPANKY
            </h1>
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[1.5rem]">
              ORTEGA APLICANO
            </h1>
          </div>

          <RowCircle />
        </div>

        <div className="flex items-center font-bold  text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem] border-l-2 border-black dark:border-white">
          <h2 style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
            <span
              className="text-black dark:text-white inline-block m-auto"
              
            >
              Developer
            </span>
          </h2>
          <h2 style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
            <span
              className="text-black dark:text-white inline-block m-auto"
              
            >
              Junior Web
            </span>
          </h2>
        </div>
      </div>

      <div className="sm:pb-32 pr-0 md:pl-16 lg:pl-32 flex items-end justify-between relative">
        <div className="flex items-center flex-col">
          <h2
            className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1rem]"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            24
          </h2>
          <h2 className="font-bold tracking-[.5rem] flex items-center  text-base sm:text-lg md:text-xl lg:text-2xl">
            YEARS
          </h2>
        </div>
      </div>

      <div className="bg-purple/30 dark:bg-pink/30 w-full sm:w-[80%] md:w-2/3 h-[18%] md:h-1/4 absolute right-0 bottom-[20%] md:bottom-1/4 sm:rounded-s-2xl rounded-e-none z-20 flex">
        <div className="flex-1 relative flex items-center ml-4 sm:ml-14 md:ml-28">
          <Button name="About me" Icon={FaArrowRight} />
        </div>
      </div>

      {/* <Image
            src="/perfil.JPG"
            width={350}
            height={50}
            alt="Imagen de perfil"
            className="absolute right-48 bottom-[2%] z-20"
          /> */}
    </section>
  );
}
