'use client'

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode, updateWindowHeight } from './redux/actions';
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

  const windowHeight = useSelector(state => state.windowHeight);

  useEffect(() => {
    // Función para actualizar la altura de la ventana
    const handleResize = () => {
      dispatch(updateWindowHeight(window.innerHeight));
    };

    // Inicialización de la altura de la ventana
    dispatch(updateWindowHeight(window.innerHeight));

    // Agregar el evento de cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Cuando cambia el altoVentana, actualiza el estilo de la sección
    document.getElementById('Landing').style.height = `${windowHeight}px`;
  }, [windowHeight]);

  console.log("windowHeight", windowHeight)

  return (
    <main
      className={`relative 
      
        h-auto lg:h-[${windowHeight}px] w-full
        
        lg:flex lg:items-center

        ${lightMode ? "dark text-white" : "text-slate-950"} text-lg
        
        overflow-hidden

        transition-dark text-sm duration-1000 select-none
      `}
      style={{
        cursor: `url("/img/Cursor.png"), auto`,
      }}
    >
      {lightMode && <Clouds />}

      <div
        className={`lg:absolute left-0 top-0 
        
        w-full lg:w-[calc(100vw+4rem)]
      
        flex items-center `} >
        <Landing />
        <div className={`hidden lg:block h-screen w-16`} >
          <NavBar />
        </div>
      </div>

      <div className='hidden lg:block w-[25vw] min-w-[400px] h-full' />
      <div
        className={`relative h-auto md:h-full lg:w-[75vw]

        flex

        overflow-hidden md:overflow-y-auto custom-scrollbar scroll-smooth snap-mandatory snap-y

        ${!lightMode && "transition animate-bg"}
        
        bg-[radial-gradient(circle_at_-100px_200px,_var(--tw-gradient-stops))] 
        
        ${dashboard ? (lightMode ? "lg:from-neutral-800/60 lg:via-neutral-950 lg:to-neutral-950" : "lg:from-green-50/80 lg:via-green-200 lg:to-green-300") : (lightMode ? "from-slate-800 via-slate-950 to-slate-950 lg:from-slate-700 lg:via-slate-800 lg:to-slate-950" : "from-white via-white to-gray-600 lg:from-white lg:via-white lg:to-gray-500")}
        `}
      >
        <div
          className='absolute top-[10vh] left-0 z-40
          
          hidden lg:block

          w-2/5 h-[1px] 
        
          bg-yellow-400 rounded shadow-lg'
        />
        <Content dark={lightMode} />
        <div
          className='absolute bottom-[10vh] right-0 z-40
          
          hidden lg:block

          w-2/5 h-[1px] 
        
          bg-yellow-400 rounded shadow-lg'
        />
        <NavIn />
      </div>
      {lumos.map((lumos, index) => (
        <Cursor
          key={index}
          transparent={lumos}
        />
      ))}
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