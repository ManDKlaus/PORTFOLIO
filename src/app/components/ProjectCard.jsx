import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemoLink, sourceCodeLink }) => {
  return (
    <div className="w-full h-56 flex flex-col justify-between bg-gray-300 rounded-lg shadow-md p-4">

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <div className='flex justify-between'>
        <div>
          <p className="text-gray-500 mb-4">{description}</p>

          <div className="h-auto flex">
            {technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 rounded-md text-sm px-2 py-1 mr-2">
                {tech}
              </span>
            ))}
          </div>
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

      <img src={imageUrl} alt={title} className="absolute w-full h-40 object-cover rounded-md mb-4" />
    </div>
  );
};

export default ProjectCard;
