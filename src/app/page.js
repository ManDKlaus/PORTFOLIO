'use client'

import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Content from './components/Content';
import NavBar from './components/NavBar';
import ModeButton from './components/ModeButton';

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
    localStorage.theme = dark ? 'light' : 'dark';
  }, [])

  const showDark = () => {
    setTimeout(() => {
      setDark(!dark);
    }, 300);
    localStorage.theme = dark ? 'light' : 'dark';
  };

  return (
    <main
      className={`relative 
      
        h-[calc(100vh-4rem)] lg:h-screen w-screen lg:flex  mb-16 lg:mb-0 lg:mt-0 overflow-auto lg:overflow-y-hidden transition-dark text-sm duration-1000 select-none 
      
        bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]  ${dark ? "from-slate-800 via-slate-950 to-slate-950" : "from-white via-white to-gray-600"}
      
        lg:bg-gradient-to-t ${dark ? "dark text-slate-200 lg:from-gray-100 lg:to-white" : "text-slate-950 lg:from-slate-950 lg:via-slate-950 lg:to-slate-600"}`}
    >
      <div
        className={`absolute -top-16 right-16 z-50 
      
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
      <ModeButton dark={dark} showDark={showDark} />
      <Landing show={show} showFull={showFull} />
      <Content dark={dark} />
      <NavBar falseFull={falseFull} dark={dark} />
      <div
        className={`absolute bottom-0 right-16 z-40
      
          w-[calc(100vw-4rem)] h-[calc(100vh/10)] pl-[320px] pr-[6px] 

          ${dark ? "bg-slate-950" : ""}
        
          invisible lg:visible flex flex-col mr-2`}
      >
        <div
          className='w-2/5 h-[1px] z-40 
        
            ml-auto bg-yellow-400 rounded shadow-lg'
        />
        {!dark && <div 
          className="absolute w-full h-[calc(100vh/10+4.8rem)] -bottom-16 right-0 bg-gradient-to-r from-gray-500 to-gray-200 blur"
        />}
      </div>
    </main>
  );
}

export default Home;
