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

  const lumos = [6, 3, 1.8, 1.5, 1.2];

  return (
    <main
      className={`relative 
      
        h-screen w-screen 
        
        lg:flex lg:pl-[400px] mb-16 lg:mb-0 lg:mt-0 

        ${dark ? "dark text-white" : "text-slate-950"}
        
        overflow-auto lg:overflow-y-hidden transition-dark text-sm duration-1000 select-none
      `}
      style={{
        cursor: `url("/img/Cursor.png"), auto`,
      }}
    >
      <div
        className={`absolute -top-16 right-16 z-40 
      
          w-[calc(100vw-4rem)] h-[calc(100vh/10+4rem)] pl-[400px] pr-[6px]
      
          invisible lg:visible
        
          
          flex flex-col`}
      >
        <div
          className='w-2/5 h-[1px] z-50 
        
          mt-auto bg-yellow-400 rounded shadow-lg'
        />
      </div>
      {dark && <Clouds />}

      <Landing show={show} showFull={showFull} />
      <div
        className={`lg:w-[calc(100vw-400px)] h-auto lg:h-screen
        lg:overflow-auto

        ${!dark && "transition animate-bg"}
        
        bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${dark ? "from-slate-800 via-slate-950 to-slate-950 lg:from-slate-800 lg:via-slate-950 lg:to-slate-950" : "from-white via-white to-gray-600 lg:from-white lg:via-white lg:to-gray-500"}`}
      >
        {lumos.map((lumos, index) => (
          <Cursor
            key={index}
            transparent={lumos}
          />
        ))}
        <Content dark={dark} />
      </div>
      <ModeButton dark={dark} showDark={showDark} />
      <NavBar falseFull={falseFull} dark={dark} />
      <div
        id='este'
        className={`absolute bottom-0 right-16 z-40
      
          w-[calc(100vw-4rem-400px)] h-[calc(100vh/10)] ml-[400px]
        
          invisible lg:visible flex flex-col mr-2`}
        style={dark ? {} : { mask }}
      >
        <div
          className='w-2/5 h-[1px]
        
            ml-auto bg-yellow-400 rounded shadow-lg'
        />
      </div>
    </main >
  );
}

export default Home;