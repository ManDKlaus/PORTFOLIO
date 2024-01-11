'use client'

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from './redux/actions';
import Landing from './components/Landing';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Cursor from './components/Cursor';
import Clouds from './components/Clouds';
import NavIn from './components/NavIn';

function Home() {

  const dispatch = useDispatch();

  const lightMode = useSelector(state => state.lightMode);
  const dashboard = useSelector(state => state.dashboard);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        dispatch(changeMode(false));
      } else {
        dispatch(changeMode(true));
      }
    }, 300);
    localStorage.theme = lightMode ? 'light' : 'dark';
  }, [])

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

  const show = useSelector(s => s.showLanding);

  return (
    <main
      className={`relative 
      
        h-auto lg:h-full w-full min-w-[400px]
        
        lg:flex lg:items-center

        ${lightMode ? "dark text-white" : "text-slate-950"}
        
        overflow-hidden transition-dark text-sm duration-1000 select-none
        custom-scrollbar scroll-smooth snap-mandatory snap-y
      `}
      style={{
        cursor: `url("/img/Cursor.png"), auto`,
      }}
    >
      <div
        className={`absolute -top-16 right-0 z-40 
      
          w-full h-[calc(100vh/10+4rem)] pl-[400px]
      
          hidden lg:flex flex-col`}
      >
        <div
          className='w-2/5 h-[1px] z-50 
        
          mt-auto bg-yellow-400 rounded shadow-lg'
        />
      </div>
      {lightMode && <Clouds />}

      <div 
        className={`lg:absolute left-0 top-0 h-auto lg:h-full w-full lg:w-[calc(100%+64px)]
      
        flex items-center `} >
        <Landing />
        <div className="hidden lg:block w-16 h-full" >
          <NavBar />
        </div>
      </div>
      <div
        className={`w-full lg:w-[calc(100vw-320px)] h-auto lg:h-full lg:ml-[410px]
        overflow-hidden lg:overflow-auto

        ${!lightMode && "transition animate-bg"}
        
        bg-[radial-gradient(circle_at_-100px_200px,_var(--tw-gradient-stops))] 
        
        ${dashboard ? (lightMode ? " lg:from-neutral-800/60 lg:via-neutral-950 lg:to-neutral-950" : "lg:from-green-50/80 lg:via-green-200 lg:to-green-300") : (lightMode ? "from-slate-800 via-slate-950 to-slate-950 lg:from-slate-700 lg:via-slate-800 lg:to-slate-950" : "from-white via-white to-gray-600 lg:from-white lg:via-white lg:to-gray-500")
          }
        `}
      >
        {lumos.map((lumos, index) => (
          <Cursor
            key={index}
            transparent={lumos}
          />
        ))}
        <Content dark={lightMode} />
      </div>
      <div
        id='este'
        className={`absolute bottom-0 right-0 z-40
      
          w-[calc(100vw-400px)] h-[calc(100vh/10)] ml-[400px]
        
          hidden lg:flex flex-col `}
        style={lightMode ? {} : { mask }}
      >
        <div
          className='w-2/5 h-[1px]
        
            ml-auto bg-yellow-400 rounded shadow-lg'
        />
        <NavIn />
      </div>
    </main >
  );
}

// Envuelve el componente Home con el Provider de react-redux
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

// Exporta el componente App
export default App;