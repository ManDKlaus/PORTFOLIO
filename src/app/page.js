'use client'

import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Content from './components/Content';
import NavBar from './components/NavBar';

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
    <main className={`relative h-screen w-screen flex overflow-hidden transition-dark text-sm duration-1000 select-none ${dark ? "dark text-slate-200" : "text-slate-950"}`}>
      <div className='absolute top-[-50px] right-16 w-[calc(100vw-58px-100vw/4)] h-[calc(100vh/6+50px)] z-40 flex flex-col mr-2' >
        <div className='absolute w-[calc(100%-20px)] h-[calc(100%+50px)] bg-gradient-to-l from-white via-white to-gray-300 dark:from-slate-800 dark:via-slate-950 dark:to-slate-950 blur-xl ' />
        <div className='w-2/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg mt-auto' />
      </div>
      <Landing show={show} showFull={showFull} />
      <Content dark={dark} />
      <NavBar falseFull={falseFull} showDark={showDark} dark={dark} />
      <div className='absolute bottom-[-100px] right-16 w-[calc(100vw-58px-100vw/4)] h-[calc(100vh/6+100px)] z-40 flex flex-col mr-2' >
        <div className={`absolute top-[-100px] w-[calc(100%-50px)] h-[calc(100%+100px)] ${dark ? "bg-slate-950" : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-gray-300 to-gray-500"} blur-2xl `} />
        <div className='w-2/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg ml-auto' />
      </div>
    </main>
  );
}

export default Home;
