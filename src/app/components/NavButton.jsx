import React from 'react';
import Image from 'next/image';

function NavButton({ item }) {
  const { text, iconSrc } = item;

  const scrollToSection = () => {
    // Buscar la sección correspondiente en el DOM
    const section = document.getElementById(text);
    
    // Verificar si se encontró la sección y hacer scroll
    section && section.scrollIntoView({ behavior: 'smooth' });    
  };

  return (
    <button
      type="button"
      className={`h-full w-1/4 lg:h-1/4 lg:w-16 hover:w-auto shadow-md z-40 px-5
        
        group bg-white/10 flex items-center text-black dark:text-white
        
        ${text === "Global" && "rounded-tr-lg"}
        ${text === "About" && "rounded-tr-lg"} ${text === "Contact" && "rounded-br-lg"} hover:rounded-r-lg`}
      onClick={scrollToSection}
    >
      <Image
        width="24"
        height="24"
        src={iconSrc}
        alt={text}
        className="dark:invert"
      />
      <span className='hidden group-hover:block pl-4'>{text}</span>
    </button>
  );
}

export default NavButton;
