import React, { useState, useEffect } from 'react';

export default function Proyect({ name, image, onClick, onSelect, index, isSelected }: { name: string, image: string, onClick: (index: number) => void, onSelect: () => void, index: number, isSelected: boolean }) {

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
      className={`relative w-28 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 border-[2px] border-pink dark:border-purple p-4 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden group`}
      onClick={handleClick}
    >
      <div
        className={`absolute w-full h-full bg-gradient-to-r from-purple/20 to-pink/20 rounded-lg grid place-content-center font-bold  ${
          isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'
        } transition-all duration-300 z-10 group-hover:opacity-100 group-hover:translate-x-0`}
      > {/*  ${isSelected ? 'opacity-100 translate-x-0' : ''} */}
        {name}
      </div>

      <img
        src={image}
        alt={`Project ${name}`}
        className={`${
          isSelected ? 'blur-sm' : ''
        } group-hover:blur-sm transition-all duration-300`}
      />
    </div>
  );
}
