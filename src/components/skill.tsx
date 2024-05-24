import { useState } from "react";

export default function Skill({ skill }: any) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="p-1 rounded-lg border-[2px] border-pink dark:border-purple text-5xl md:text-6xl lg:text-7xl relative z-10
    flex justify-center items-center overflow-hidden group">
  {/* Icono de la tecnología */}
  <span
    className={`${
      isActive ? "blur-sm" : ""
    } group-hover:blur-sm transition-all duration-300 group-hover:text-white dark:group-hover:text-black`}
  >
    {skill.icon}
  </span>

  <span
    className={`text-xs lg:text-base absolute w-full h-full bg-gradient-to-r from-purple/20 to-pink/20 rounded-lg grid place-content-center font-bold  ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'}  transition-all duration-300 z-10 group-hover:opacity-100 group-hover:translate-x-0 text-dark`}
  >
    {skill.name}
  </span>
</div>

    </div>
  );
}
