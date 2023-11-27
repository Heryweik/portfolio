export default function Navegation({ name, href, scrollToSection }: { name: string, href: string, scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;}) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.substring(1); // Obtener la sección desde el atributo href
    scrollToSection(e, sectionId);
  };
  
  return (
    <a href={href} onClick={handleClick}>
      <span className="hover:border-b-[3px] hover:border-pink dark:hover:border-purple hover:transition-all hover:duration-200 hover:ease-in-out cursor-pointer px-5 hover:shadow-custom dark:hover:shadow-customDark">
      {name}
    </span>
    </a>
    
  );
}
