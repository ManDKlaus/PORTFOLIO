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
      className={`relative h-[calc(100vh-4rem)] lg:h-screen w-screen lg:flex mb-16 lg:mb-0 lg:mt-0 overflow-auto lg:overflow-y-hidden transition-dark text-sm duration-1000 select-none 
      
      bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]  ${dark ? "from-slate-800 via-slate-950 to-slate-950" : "from-white via-white to-gray-600"}
      
      lg:bg-gradient-to-t ${dark ? "dark text-slate-200 lg:from-gray-100 lg:to-white" : "text-slate-950 lg:from-slate-950 lg:via-slate-950 lg:to-slate-600"}`}
    >
      <div className='invisible lg:visible absolute top-[-50px] right-16 w-[calc(75vw-58px)] h-[calc(100vh/10+50px)] z-40 invisible lg:visible flex flex-col mr-2' >
        <div className={`absolute right-0 w-[calc(100%-20px)] h-full bg-gradient-to-l ${ dark ? "dark:from-slate-800 dark:via-slate-950 dark:to-slate-950" : "from-white via-white to-gray-300" } blur-sm `} />
        <div className={`absolute right-0 w-[calc(100%-20px)] h-[calc(100%+50px)] bg-gradient-to-l ${ dark ? "dark:from-slate-800 dark:via-slate-950 dark:to-slate-950" : "from-white via-white to-gray-300" } blur-xl `} />
        <div className='w-2/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg mt-auto' />
      </div>
      <ModeButton dark={dark} showDark={showDark} />
      <Landing show={show} showFull={showFull} />
      <Content dark={dark} />
      <NavBar falseFull={falseFull} dark={dark} />
      <div className='invisible lg:visible absolute bottom-0 right-16 w-[calc(75vw-58px)] h-[calc(100vh/10)] z-30 invisible lg:visible flex flex-col mr-2' >
        <div className={`absolute bottom-0 right-3 w-[calc(100%-20px)] h-1/3 ${dark ? "bg-slate-950" : "bg-gradient-to-l from-gray-200  to-gray-400"} `} />
        <div className={`absolute bottom-0 right-2 w-[calc(100%-20px)] h-2/3 ${dark ? "bg-slate-950" : "bg-gradient-to-l from-gray-300  to-gray-400"} blur-sm `} />
        <div className={`absolute -top-10 right-1 w-[calc(100%-20px)] h-[calc(100%+4rem)] ${dark ? "bg-slate-950" : "bg-gradient-to-l from-gray-300 via-gray-300 to-gray-500"} blur-xl`} />
        <div className='w-2/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg ml-auto' />
      </div>
    </main>
  );
}

export default Home;
