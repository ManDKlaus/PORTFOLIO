import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../redux/actions';

function ModeButton() {

  const dispatch = useDispatch();

  const [showSharingan, setShowSharingan] = useState(false);
  const [jutsu, setJutsu] = useState(false);

  const lightMode = useSelector(state => state.lightMode);
  const dashboard = useSelector(state => state.dashboard);

  const handleJutsu = () => {
    setTimeout(() => {
      dispatch(changeMode(!lightMode));
    }, 300);
    localStorage.theme = lightMode ? 'dark' : 'light';
    setJutsu(!jutsu);
    setShowSharingan(true);
    setTimeout(() => {
      setShowSharingan(false);
      setJutsu(false);
    }, 300);
  };

  return (
    <button className="absolute top-[calc(100vh/10)] lg:top-40 left-0 w-16 hover:w-auto h-16 z-50 px-5
    
    bg-white/10 rounded-r-lg shadow-md group
    
    flex items-center" onClick={handleJutsu}>
      <Image
        width="25"
        height="25"
        src={dashboard ? lightMode ? "https://img.icons8.com/pulsar-line/48/darth-vader.png" : "https://img.icons8.com/pulsar-line/48/r2-d2.png" : lightMode ? 'https://img.icons8.com/pulsar-line/48/full-moon.png' : 'https://img.icons8.com/pulsar-line/25/sun.png' }
        alt="Select Mode"
        className={`m-auto dark:invert ${jutsu ? 'hidden' : ''}`}
      />
      {showSharingan && (
        <Image
          width="25"
          height="25"
          src="https://img.icons8.com/ios/25/sharingan.png"
          alt="Sharingan"
          className={`animate-spin m-auto ${jutsu ? '' : 'hidden'} dark:invert`}
        />
      )}
      <span className='hidden group-hover:block w-20 pl-4'>{dashboard ?lightMode ? "Dark Side" : "Light Side" : lightMode ? "Dark Mode" : "Light Mode" }</span>
    </button>
  );
}

export default ModeButton;
