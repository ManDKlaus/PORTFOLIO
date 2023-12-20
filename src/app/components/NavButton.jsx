import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavButton({ item }) {
    const { id, text, iconSrc } = item;

    return (
            <Link
                href={`#${text}`}
                className={`h-full w-1/4 lg:h-1/4 lg:w-16 hover:w-auto shadow-md z-40 px-5
        
                group bg-white/10 flex items-center text-black dark:text-white
                
                ${text == "Global" && "rounded-tr-lg"}
                ${text == "About" && "rounded-tr-lg"} ${text == "Contact" && "rounded-br-lg"} hover:rounded-r-lg`}
            >
                <Image
                    width="24"
                    height="24"
                    src={iconSrc}
                    alt={id}
                    className="dark:invert"
                />
                <span className='hidden group-hover:block pl-4'>{text}</span>
            </Link>
    );
}

export default NavButton;
