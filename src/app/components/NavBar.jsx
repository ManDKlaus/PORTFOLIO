import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavButton from './NavButton';
import ModeButton from './ModeButton';

function NavBar() {

    const dashboard = useSelector(state => state.dashboard);

    const navPortfolio = [
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

    const navDashboard = [
        {
            id: 'Global',
            text: 'Global',
            iconSrc: "https://img.icons8.com/pulsar-line/48/geography.png",
        },
        {
            id: 'Likes',
            text: 'Likes',
            iconSrc: "https://img.icons8.com/pulsar-line/48/like.png",
        },
        {
            id: 'Comments',
            text: 'Comments',
            iconSrc: "https://img.icons8.com/pulsar-line/48/comments.png",
        },
        {
            id: 'Contact',
            text: 'Contact',
            iconSrc: 'https://img.icons8.com/pulsar-line/24/paper-plane.png',
        },
    ];

    return (
        <div className='relative h-full flex items-center'>
            <ModeButton />
            <ul
                className={`fixed lg:relative bottom-0 h-16 lg:h-2/5 dark:text-gray-950 z-40 
            
                text-gray-300 flex lg:flex-col justify-center `}
            >
                {!dashboard ? navPortfolio.map((item) => (
                    <NavButton
                        key={item.id}
                        item={item}
                    />
                )) : navDashboard.map((item) => (
                    <NavButton
                        key={item.id}
                        item={item}
                    />
                ))
                }
            </ul>
        </div>
    );
}

export default NavBar;
