import React, { useState } from 'react';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink, dark, onPrevPage, onNextPage }) => {

  const dashboard = useSelector(state => state.dashboard);

  return (
    <div className=" w-3/4 h-auto flex flex-col items-center gap-8 z-10">

      <div className="relative w-full h-72 flex flex items-center" >

        <div className='relative w-full flex items-center'>
          <Image
            width="112"
            height="112"
            src="https://img.icons8.com/pulsar-line/200/forward.png"
            onClick={onPrevPage}
            alt="Arrow Left"
            className="cursor-pointer h-16 w-16 md:h-28 md:w-28 mt-1 z-40 dark:invert rotate-180"
          />
          <h3
            className="w-full text-3xl lg:text-5xl indent-0 font-bold mt-2 z-40 drop-shadow-lg"
          >
            {title}
          </h3>
          <Image
            width="112"
            height="112"
            src="https://img.icons8.com/pulsar-line/200/forward.png"
            onClick={onNextPage}
            alt="Arrow Right"
            className="cursor-pointer h-16 w-16 md:h-28 md:w-28 mt-1 z-40 dark:invert "
          />
        </div>
        <div className='absolute right-20 lg:right-28 h-full w-auto flex' >
          <Image
            src={imageUrl}
            alt={title}
            className={`h-full w-full rounded-md z-0 border border-yellow-400 `}
            style={{
              transform: 'skewX(-15deg)',
              backgroundImage: 'linear-gradient(to right, transparent, white, rgba(255, 255, 255, 1))',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black, black)',
              maskImage: 'linear-gradient(to right, transparent, black, black)'
            }}
          />
          <div
            className='h-full w-16
          
            flex-col 
          
            z-40'
            style={{
              transform: 'skewX(-15deg)',
            }}
          >
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className={`h-1/2 w-full flex items-center justify-center text-white-500 ${ dashboard ? "bg-emerald-100/50 dark:bg-neutral-500/70" : "bg-white/50 dark:bg-white/20"} rounded-tr-lg shadow-md`} >
              <img
                src="https://img.icons8.com/pulsar-line/25/trial-version.png"
                alt="Trial Version"
                className={`dark:invert`} />
            </a>

            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className={`h-1/2 w-full flex items-center justify-center text-blue-500 ${ dashboard ? "bg-emerald-100/50 dark:bg-neutral-500/70" : "bg-white/50 dark:bg-white/20"} rounded-br-lg shadow-md`}>
              <img
                src="https://img.icons8.com/pulsar-line/25/code.png"
                alt="Source Code"
                className={`dark:invert `} />
            </a>
          </div>
        </div>
      </div>
      <p
        className={`rounded w-2/3 h-auto`}
      >
        {description}
      </p>

    </div>
  );
};

export default ProjectCard;