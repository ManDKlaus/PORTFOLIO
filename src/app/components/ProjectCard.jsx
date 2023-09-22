import React, { useState } from 'react';
import Image from 'next/image'

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink, dark, onPrevPage, onNextPage }) => {

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="relative w-full h-auto flex justify-between items-center p-4 z-10">

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
      {showDescription && (
        <p className="indent-0 px-2 py-1 rounded-md bg-white text-slate-950 absolute top-0 left-1/2 z-40">{description}</p>
      )}

      <div className='w-full h-full flex ml-20 justify-between items-end z-10'>
        <div className='flex  items-center'>
          <div className="h-auto flex ml-4">
            {technologies.map((tech) => (
              <span key={tech} className="bg-gray-400 dark:bg-gray-300 rounded-md text-sm dark:text-slate-950 text-white px-2 py-1 mr-2 indent-0 shadow-inner shadow-slate-900 dark:shadow-slate-700 ">
                {tech}
              </span>
            ))}
          </div>

          <div className='flex flex-col justify-between'>
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Live Demo
            </a>
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Source Code
            </a>
          </div>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        className="absolute right-32 h-full w-auto rounded-md z-0 "
        style={{
          transform: 'skewX(-15deg)',
          backgroundImage: 'linear-gradient(to right, transparent, white, rgba(255, 255, 255, 1))',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black, black)',
          maskImage: 'linear-gradient(to right, transparent, black, black)'
        }}
      />


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
