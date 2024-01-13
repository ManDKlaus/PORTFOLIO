import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

function NavButton({ item }) {
    const { id, text, linkSrc, iconSrc, objSrc } = item;
    const dashboard = useSelector(state => state.dashboard);

    const stop = (e) => {
        e.stopPropagation();
    }

    return (
        <a
            id={id}
            href={linkSrc}
            target="_blank"
            onClick={stop}
            download={objSrc}
            className={`w-16 hover:w-auto h-1/5 shadow-lg

                ${dashboard ? "bg-green-50/80 dark:bg-neutral-500/70" : "bg-white/80 dark:bg-slate-500/70"}
                
                px-5 lg:pl-6 lg:pr-4 
                
                flex items-center 
                
                ${text === "GitHub" && "rounded-tr-lg"} ${text === "Download CV" && "rounded-br-lg"} hover:rounded-r-lg group`}
        >
            <Image
                src={iconSrc}
                alt={text}
                width="24"
                height="24"
                className='w-6 dark:invert'
            />
            <span 
                className='hidden group-hover:block 
                
                pl-5 lg:pl-4 lg:pr-6 
                
                whitespace-nowrap'
            >
                {text}
            </span>
        </a>
    );
}

export default NavButton;
