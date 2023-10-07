import React, { useState } from 'react';
import NavButton from './NavButton';

function NavBar({ falseFull, dark }) {

    const navItems = [
        {
            id: 'About Me',
            text: 'About',
            iconSrc: 'https://img.icons8.com/pastel-glyph/24/user-male-circle.png',
        },
        {
            id: 'Projects',
            text: 'Projects',
            iconSrc: 'https://img.icons8.com/pastel-glyph/24/laptop-coding--v1.png',
        },
        {
            id: 'Technologies',
            text: 'Technologies',
            iconSrc: 'https://img.icons8.com/pulsar-line/24/laptop-settings.png',
        },
        {
            id: 'Contact',
            text: 'Contact',
            iconSrc: 'https://img.icons8.com/pulsar-line/24/paper-plane.png',
        },
    ];

    return (
        <ul
            className={`fixed z-40 bottom-0 lg:relative h-16 w-full lg:h-full lg:w-16 lg:py-[calc(100vh/10)]
            
            bg-gradient-to-r lg:bg-gradient-to-t ${!dark && "from-slate-950 via-slate-600 to-slate-500"} dark:from-gray-300 dark:via-gray-200 dark:to-white dark:text-gray-950 
            
            text-gray-300 flex lg:flex-col justify-center`}
        >
            {navItems.map((item) => (
                <NavButton
                    key={item.id}
                    falseFull={falseFull}
                    item={item}
                    dark={dark}
                />
            ))}
        </ul>
    );
}

export default NavBar;
