import React, { useState } from 'react';
import Image from 'next/image'

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink, dark, onPrevPage, onNextPage }) => {

  const [showCode, setShowCode] = useState(false);
  const [showTrial, setShowTrial] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center z-10">

      <div className='absolute top-[-32px] right-20 flex gap-2 lg:ml-3 z-40'>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline relative z-40">
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

        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline relative z-40">
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
      <div className='relative w-full flex justify-center items-center'>
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
        <p
          className={`indent-0 rounded absolute -bottom-48 z-40 custom-shadow-text w-2/3 h-auto`}
        >
          {description}
        </p>
      </div>
      <div className='absolute right-20 lg:right-28 h-full w-auto' >
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
      </div>

    </div>
  );
};

export default ProjectCard;



{/* <ul className='w-3/4 lg:w-1/2 h-10 flex flex-wrap gap-1 items-end z-10'>
{technologies.map((tech) => (
  <li key={tech} className="bg-slate-700 dark:bg-white rounded-md text-[12px]  dark:text-slate-950 text-white px-2 indent-0 shadow-inner shadow-black dark:shadow-slate-700 ">
    {tech}
  </li>
))}
</ul> */}