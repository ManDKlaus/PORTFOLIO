'use client'

import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Content from './components/Content';
import NavBar from './components/NavBar';
import ModeButton from './components/ModeButton';
import Cursor from './components/Cursor';
import Clouds from './components/Clouds';

function Home() {
  const [show, setShow] = useState(true);

  const showFull = () => {
    setShow(!show);
  };

  const falseFull = () => {
    setShow(false);
  };

  const [dark, setDark] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDark(true)
      } else {
        setDark(false)
      }
    }, 300);
    localStorage.theme = dark ? 'dark' : 'light';
  }, [])

  const showDark = () => {
    setTimeout(() => {
      setDark(!dark);
    }, 300);
    localStorage.theme = dark ? 'dark' : 'light';
  };

  const mask = {
    "--mask": `linear-gradient(to top, transparent, black)`,
    WebkitMask: `var(--mask)`,
    mask: `var(--mask)`,
  };

  useEffect(() => {
    const handleMousemove = (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener('mousemove', handleMousemove);

    return () => {
      window.removeEventListener('mousemove', handleMousemove);
    };
  }, []);

  const lumos = [6, 1.8];

  return (
    <main
      className={`relative 
      
        h-[calc(100vh-4rem)] lg:h-screen w-screen 
        
        lg:flex lg:pl-[320px] mb-16 lg:mb-0 lg:mt-0 

        ${dark ? "dark text-white" : "text-slate-950"}
        
        overflow-auto lg:overflow-y-hidden transition-dark text-sm duration-1000 select-none
      `}
      style={{
        cursor: `url("/img/Cursor.png"), auto`,
      }}
    >
      {dark && <Clouds />}
      <div
        className={`absolute -top-16 right-16 z-20 
      
          w-[calc(100vw-4rem)] h-[calc(100vh/10+4rem)] pl-[320px] pr-[6px]
      
          invisible lg:visible
        
          bg-gradient-to-l ${dark ? "dark:from-slate-800 dark:via-slate-950 dark:to-slate-950" : "from-white via-white to-gray-400"} 
      
          flex flex-col`}
      >
        <div
          className='w-2/5 h-[1px] z-50 
        
          mt-auto bg-yellow-400 rounded shadow-lg'
        />
      </div>
      {lumos.map((lumos, index) => (
        <Cursor
          key={index}
          transparent={lumos}
        />
      ))}
      <ModeButton dark={dark} showDark={showDark} />
      <Landing show={show} showFull={showFull} />
      <Content dark={dark} />
      <NavBar falseFull={falseFull} dark={dark} />
      <div
        id='este'
        className={`absolute bottom-0 right-16 z-0
      
          w-[calc(100vw-4rem-320px)] h-[calc(100vh/10)] ml-[320px] 

          ${dark ? "bg-slate-950" : "bg-transparent"}
        
          invisible lg:visible flex flex-col mr-2`}
        style={dark ? {} : { mask }}
      >
        <div
          className='w-2/5 h-[1px] z-40 
        
            ml-auto bg-yellow-400 rounded shadow-lg'
        />
      </div>
    </main >
  );
}

export default Home;

/* bg-gradient-to-r from-[#7A808D] to-gray-200 */