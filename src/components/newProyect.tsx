import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";



export default function NewProyect({
  name,
  image,
  onClick,
  onSelect,
  index,
  isSelected,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  description,
  date,
  link
}: {
  name: string;
  image: string;
  onClick: (index: number) => void;
  onSelect: () => void;
  index: number;
  isSelected: boolean;
  Icon1: any;
  Icon2: any;
  Icon3: any;
  Icon4: any;
  Icon5: any;
  Icon6: any;
  description: string;
  date: string;
  link: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Llamamos a la función onClick con el índice del proyecto
    onClick(index);
    // Llamamos a la función onSelect para traer el proyecto seleccionado
    onSelect();
  };

  return (
    <div
      className={`relative w-full md:w-80 h-64 border-[2px] border-pink dark:border-purple rounded-lg flex justify-center items-center cursor-pointer overflow-hidden group hover:scale-110 transition`} /* w-28 h-24  */
      onClick={handleClick}
    >
      <div
        className={`absolute w-full h-full bg-white/70 dark:bg-black/70 rounded-lg grid place-content-center gap-4 font-bold  ${
          isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"
        } transition-all duration-300 z-10 group-hover:opacity-100 group-hover:translate-x-0`}
      >
        {" "}
        {/*  ${isSelected ? 'opacity-100 translate-x-0' : ''} */}
        {name}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <Icon1 className="text-3xl" />
            <Icon2 className="text-3xl" />
            <Icon3 className="text-3xl" />
            <Icon4 className="text-3xl" />
            <Icon5 className="text-3xl" />
            <Icon6 className="text-3xl" />
          </div>

          <span>{description}</span>
          <span className="font-bold">{date}</span>
        </div>

        <button className="absolute right-2 bottom-2 rounded-md px-1 hover:bg-pink/70 dark:hover:bg-purple/70">
          <a href={link} target="_blank">
            <FaEye className="text-3xl hover:text-4xl transition" />
          </a>
        </button>
      </div>

      <img
        src={image}
        alt={`Project ${name}`}
        className={`${
          isSelected ? "blur-sm" : ""
        } group-hover:blur-sm transition-all duration-300`}
      />
    </div>
  );
}
