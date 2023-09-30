import React, { useState } from 'react';
import Image from 'next/image'

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink, dark, onPrevPage, onNextPage }) => {

  const [showDescription, setShowDescription] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showTrial, setShowTrial] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-between items-center p-4 z-10">

      <div className='absolute top-[-32px] right-24 flex gap-2 ml-3 z-40'>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline relative">
          {showTrial && (
            <p className="indent-0 text-[12px] px-2 py-1 rounded bg-slate-800 text-white dark:bg-white dark:text-slate-950 absolute bottom-full right-[-15px] w-auto " >
              Trial Version
            </p>
          )}
          <img
            src="https://img.icons8.com/pulsar-line/25/trial-version.png"
            alt="Trial Version"
            className={`dark:invert ${showTrial ? "" : "opacity-30"}`}
            onMouseEnter={() => setShowTrial(true)}
            onMouseLeave={() => setShowTrial(false)} />
        </a>

        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline relative">
          {showCode && (
            <p className="indent-0 text-[12px] px-2 py-1 rounded bg-slate-800 text-white dark:bg-white dark:text-slate-950 absolute bottom-full right-[-14px]" >
              Source Code
            </p>
          )}
          <img
            src="https://img.icons8.com/pulsar-line/25/code.png"
            alt="Source Code"
            className={`dark:invert ${showCode ? "" : "opacity-30"}`}
            onMouseEnter={() => setShowCode(true)}
            onMouseLeave={() => setShowCode(false)} />
        </a>
      </div>
      <div className='absolute left-0 flex items-center'>
        <Image
          width="112"
          height="112"
          src="https://img.icons8.com/pulsar-line/200/forward.png"
          onClick={onPrevPage}
          alt="Arrow Left"
          className="cursor-pointer h-28 mt-1 z-40 dark:invert rotate-180"
        />

        <h3
          className="text-5xl indent-0 font-bold mt-2 z-40 drop-shadow-lg"
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)} >
          {title}
        </h3>
      </div>
      <div className='h-full w-full relative'>
        <ul className='absolute bottom-0 w-1/2 h-10 flex flex-wrap gap-1 ml-24 items-end z-10'>
          {technologies.map((tech) => (
            <li key={tech} className="bg-slate-700 dark:bg-white rounded-md text-[12px]  dark:text-slate-950 text-white px-2 indent-0 shadow-inner shadow-black dark:shadow-slate-700 ">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className='absolute right-32 h-full w-auto' >
        {showDescription && (
          <p className="indent-0 rounded text-white absolute left-1/3 top-1/2 z-40 custom-shadow-text w-1/2"
            style={{
              transform: 'translate(10%, -50%) skewX(-15deg)', // Esto centra la descripción
            }}>
            {description}
          </p>
        )}
        <Image
          src={imageUrl}
          alt={title}
          className={`h-full w-full rounded-md z-0 border border-yellow-400 ${showDescription && "grayscale opacity-30"}`}
          style={{
            transform: 'skewX(-15deg)',
            backgroundImage: 'linear-gradient(to right, transparent, white, rgba(255, 255, 255, 1))',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black, black)',
            maskImage: 'linear-gradient(to right, transparent, black, black)'
          }}
        />
      </div>
      <Image
        width="112"
        height="112"
        src="https://img.icons8.com/pulsar-line/200/forward.png"
        onClick={onNextPage}
        alt="Arrow Right"
        className="cursor-pointer h-28 mt-1 z-40 dark:invert "
      />

    </div>
  );
};

export default ProjectCard;
