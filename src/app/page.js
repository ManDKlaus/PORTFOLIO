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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  const showDark = () => {
    setDark(!dark);
  };

  return (
    <main className={`relative h-screen w-screen flex overflow-hidden transition-dark text-gray-900 text-sm duration-1000 ${dark && "dark text-white select-none"}`}>
      <Landing show={show} showFull={showFull} />
      <Content dark={dark} />
      <NavBar falseFull={falseFull} showDark={showDark} dark={dark} />
    </main>
  );
}

export default Home;
