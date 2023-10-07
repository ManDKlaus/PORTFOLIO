import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavButton({ item, falseFull, dark }) {
    const { id, text, iconSrc } = item;


    return (
        <li className='h-full w-1/4 lg:h-1/4 lg:w-16 shadow-md z-40'>
            <Link
                href={`#${text}`}
                className='h-full w-full flex items-center justify-center'
                onClick={falseFull}
            >
                <Image
                    width="24"
                    height="24"
                    src={iconSrc}
                    alt={id}
                    className={dark ? '' : 'invert'}
                />
            </Link>
        </li>
    );
}

export default NavButton;
