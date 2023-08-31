'use client'

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        technologies: ['React', 'Node.js', 'Express'],
        imageUrl: 'url de la imagen 1',
        liveDemoLink: 'enlace del demo 1',
        sourceCodeLink: 'enlace del código fuente 1',
    },
    {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2.',
        technologies: ['Vue.js', 'MongoDB', 'Express'],
        imageUrl: 'url de la imagen 2',
        liveDemoLink: 'enlace del demo 2',
        sourceCodeLink: 'enlace del código fuente 2',
    },
];

const CardContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 1);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const getPageData = () => {
      const startIndex = (currentPage - 1) * 1;
      const endIndex = startIndex + 1;
      return projects.slice(startIndex, endIndex);
    };

    return (
        <div className='w-full flex flex-col justify-center'>
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <div className='w-full flex flex-wrap' >
                {getPageData().map((project) => (
                    <ProjectCard {...project} key={project.id} />
                ))}
            </div>
            <div className="flex justify-center my-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`h-2 w-2 mx-1.5 rounded-full ${index + 1 === currentPage ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
