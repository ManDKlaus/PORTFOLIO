import React from 'react';
import Image from 'next/image';
import Cloud1 from "../../../public/img/cloud1.png";
import Cloud2 from "../../../public/img/cloud2.png";
import Cloud3 from "../../../public/img/cloud3.png";
import Cloud4 from "../../../public/img/cloud4.png";
import Cloud5 from "../../../public/img/cloud5.png";

function Clouds({ dark }) {
  const numClouds = 10;
  const clouds = [];

  for (let i = 0; i < numClouds; i++) {
    clouds.push({
      image: i % 5 === 0 ? Cloud1 : i % 5 === 1 ? Cloud2 : i % 5 === 2 ? Cloud3 : i % 5 === 3 ? Cloud4 : Cloud5,
      delay: i * 0.5 + "s",
    });
  }

  return (
    <div id="CloudsContainer" className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
      <div className='relative w-full lg:w-[calc(100vw-4rem-320px)] h-full lg:ml-[320px] overflow-hidden flex justify-center items-end'>
        {clouds.map((cloud, index) => (
          <Image
            key={index}
            width="100%"
            src={cloud.image}
            style={{ animationDelay: cloud.delay }}
            className={`absolute bottom-0 left-0 transition animate-moveClouds w-auto max-h-60 blur-sm opacity-0`}
          />
        ))}
      </div>
    </div>
  );
}

export default Clouds;
