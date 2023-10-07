import React, { useState } from 'react';
import Image from 'next/image';

function ModeButton({ dark, showDark }) {

  const [showSharingan, setShowSharingan] = useState(false);
  const [jutsu, setJutsu] = useState(false);

  const handleJutsu = () => {
      showDark();
      setJutsu(!jutsu);
      setShowSharingan(true);
      setTimeout(() => {
          setShowSharingan(false);
          setJutsu(false);
      }, 300);
  };

  return (
    <button className="fixed top-[calc(100vh/10)] lg:top-0 right-0 w-16 h-16 z-50 bg-slate-500 dark:bg-white rounded-l-lg lg:bg-transparent" onClick={handleJutsu}>
      <Image
        width="25"
        height="25"
        src={dark ? 'https://img.icons8.com/pulsar-line/48/full-moon.png' : 'https://img.icons8.com/pulsar-line/25/sun.png'}
        alt="Select Mode"
        className={`m-auto ${ dark ? '' : 'invert'} ${jutsu ? 'hidden' : ''}`}
      />
      {showSharingan && (
        <Image
          width="25"
          height="25"
          src="https://img.icons8.com/ios/25/sharingan.png"
          alt="Sharingan"
          className={`animate-spin m-auto ${jutsu ? '' : 'hidden'} ${dark ? '' : 'invert'}`}
        />
      )}
    </button>
  );
}

export default ModeButton;
