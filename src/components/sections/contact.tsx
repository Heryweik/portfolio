import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Circle from "@/components/circle";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import RowCircle from "@/components/rowCircle";

export default function Contact() {
  return (
    <>
      <div className="relative px-5 lg:px-16 py-5 w-full  flex flex-col  gap-14 ">
        <div className="relative "
        data-aos="fade-up-right">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[1.5rem] text-center md:text-left  mt-4 md:ml-28 md:mt-8 lg:ml-40 lg:mt-11"
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
              Contact Me
            </span>
          </h1>
          <h1 className="font-extrabold tracking-[1.5rem] absolute top-2 sm:top-1 md:top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 text-black/5 dark:text-white/10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
          >
            CONTACT
          </h1>
        </div>
        <h2
          className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[.5rem] text-center md:text-left lg:ml-6"
          data-aos="fade-up"
        >
          YHONNY YUPANKY ORTEGA APLICANO
        </h2>

        <div className="absolute right-10 lg:right-40 top-[65%]" data-aos="fade-up">
          <RowCircle />
        </div>
      </div>

      <div className="flex-1 bg-purple/30 dark:bg-pink/30 rounded-t-2xl relative grid place-content-center md:grid-cols-2   font-semibold mt-40"
      >
        <div className="absolute left-1/2 -translate-x-1/2  top-[-110px] sm:top-[-125px] md:top-[-145px] bg-white dark:bg-black border-[8px] border-white dark:border-black flex rounded-full w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 ">
          <div
            className="flex-1 rounded-full overflow-hidden  border-[5px] border-pink dark:border-purple"
            data-aos="fade-up"
          >
            <img
              src="/footer.JPG"
              alt=""
              className="object-cover mt-[-15px] sm:mt-[-20px] md:mt-[-30px]"
            />
          </div>
        </div>

        <div className="relative col-span-1 md:pt-10 pb-3 flex flex-col items-center justify-between gap-2 "
        >
          <div className="flex items-center gap-5 mt-28 sm:mt-32 md:mt-20">
            <Circle Icon={FaGithub} />
            <Circle Icon={FaLinkedinIn} />
          </div>

          <div className="flex gap-2 flex-col justify-center ">
            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <FaLocationDot />
              </div>
              <span>Honduras, Francisco Morazan, Tegucigalpa</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <FaPhoneAlt />
              </div>
              <span>+504 8883-9705</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <IoMail />
              </div>
              <span>yhonny296@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 md:pt-10 pb-3 flex flex-col items-center justify-between gap-2 "
        >
          <div className="flex items-center gap-5 md:mt-20">
            <Circle Icon={FaGithub} />
            <Circle Icon={FaLinkedinIn} />
          </div>

          <div className="flex gap-2 flex-col justify-center ">
            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <FaLocationDot />
              </div>
              <span>Honduras, Francisco Morazan, Tegucigalpa</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <FaPhoneAlt />
              </div>
              <span>+504 8883-9705</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full border-[2px] border-pink dark:border-purple ">
                <IoMail />
              </div>
              <span>yhonny296@gmail.com</span>
            </div>
          </div>
        </div>

        <div className=" mb-2 text-center  md:col-span-2">
          <span className="">Copyright @ 2023 - Yhonny Aplicano</span>
        </div>
      </div>
    </>
  );
}
