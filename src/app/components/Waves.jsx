import React from 'react';

function Waves() {
  const numWaves = 6;
  const Waves = [];

  for (let i = 0; i < numWaves; i++) {
    const delay = i * 2.3 + "s";

    Waves.push({ i, delay });
  }

  return (
    <div id="WavesContainer" className="absolute top-0 left-0 w-full h-full z-50 overflow-hidden pointer-events-none">
      {Waves.map((wave, index) => (
        <div
          style={{ animationDelay: wave.delay }}
          className={`absolute bottom-16 px w-${wave.i} h-${wave.i} overflow-hidden transition animate-moveGout`}
        />
      ))}
    </div>
  );
}

export default Waves;


