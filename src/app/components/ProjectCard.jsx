import React, { useState } from 'react';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import ProjectsButton from './ProjectsButton';

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink, onPrevPage, onNextPage }) => {

  const dashboard = useSelector(state => state.dashboard);
  const imageObject = useSelector(state => state.imageObject);

  return (
    <div className="w-[75vw] lg:w-[50vw] h-auto flex flex-col items-center gap-4 z-10">

      <div className="relative w-full h-[15vh] md:h-[30vh] lg:h-[25vh] flex flex items-center" >

        <div className='absolute left-0 top-0 w-full h-full flex justify-between items-center z-50'>
          <Image
            width="112"
            height="112"
            src="https://img.icons8.com/pulsar-line/200/forward.png"
            onClick={onPrevPage}
            alt="Arrow Left"
            className="cursor-pointer h-12 w-12 md:h-28 md:w-28 mt-1 z-40 dark:invert rotate-180"
          />
          <div className='relative basis-full'>
            <h3
              className="text-2xl lg:text-5xl indent-0 font-bold 
            
               mt-2 z-40
              
              drop-shadow-4xl dark:drop-shadow-none pointer-events-none"
            >
              {title}
            </h3>
            <ProjectsButton />
          </div>
          <Image
            width="112"
            height="112"
            src="https://img.icons8.com/pulsar-line/200/forward.png"
            onClick={onNextPage}
            alt="Arrow Right"
            className="cursor-pointer h-12 w-12 md:h-28 md:w-28 mt-1 z-40 dark:invert "
          />
        </div>
        <div
          className='absolute right-6 md:right-32 
          
            h-full w-[50vw] md:w-[35vw]
        
            flex flex-row'
        >
          <Image
            src={imageUrl}
            alt={title}
            className={`h-full w-[calc(100%-4rem)]
            
            rounded-md z-0 border border-yellow-400 -skew-x-[15deg] `}
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, white, rgba(255, 255, 255, 1))',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black, black)',
              maskImage: 'linear-gradient(to right, transparent, black, black)'
            }}
          />
          <div
            className='h-full w-10 lg:w-16 z-50 
          
            flex-col 
          
            -skew-x-[15deg]'
          >
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className={`h-1/2 w-full flex items-center justify-center text-white-500 ${dashboard ? "bg-emerald-100/50 dark:bg-neutral-500/70" : "bg-white/50 dark:bg-white/20"} rounded-tr-lg shadow-md`} >
              <img
                src="https://img.icons8.com/pulsar-line/25/trial-version.png"
                alt="Trial Version"
                className={`dark:invert`} />
            </a>

            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className={`h-1/2 w-full flex items-center justify-center text-blue-500 ${dashboard ? "bg-emerald-100/50 dark:bg-neutral-500/70" : "bg-white/50 dark:bg-white/20"} rounded-br-lg shadow-md`}>
              <img
                src="https://img.icons8.com/pulsar-line/25/code.png"
                alt="Source Code"
                className={`dark:invert `} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
        {technologies.map((tech, index) => (
          <div key={index} className="group relative">
            {imageUrl ? (
              <div className="relative">
                <Image
                  height={25}
                  width={25}
                  src={imageObject[tech]}
                  alt={tech}
                />
                <p className="indent-0 hidden text-xs absolute bottom-[calc(100%+2px)] left-1/2 transform -translate-x-1/2 bg-slate-600 text-white dark:bg-gray-50 dark:text-gray-950 py-1 px-2 rounded group-hover:block">
                  {tech}
                </p>
              </div>
            ) : (
              <p className="indent-0">{tech}</p>
            )}
          </div>
        ))}
      </div>
      <p
        className={`rounded w-2/3 h-auto max-md:line-clamp-3 max-lg:line-clamp-4`}
      >
        {description}
      </p>

    </div>
  );
};

export default ProjectCard;