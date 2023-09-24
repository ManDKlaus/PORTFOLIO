'use client'

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Banner from "../../../public/img/NDM-Portfolio.png"

const projects = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'Descripción del proyecto 1.',
        technologies: ['Next.js', 'Tailwind CSS', 'Express'],
        imageUrl: Banner,
        liveDemoLink: 'https://portfolio-git-master-mandklaus.vercel.app',
        sourceCodeLink: 'https://github.com/ManDKlaus/PORTFOLIO',
    },
    {
        id: 2,
        title: '1337 Hardware',
        description: 'Descripción del proyecto 2.',
        technologies: ['Vue.js', 'MongoDB', 'Express'],
        imageUrl: { Banner },
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

    const handlePrevPage = () => {
        if (currentPage === 1) {
            setCurrentPage(projects.length); // Vuelve al último proyecto si ya estás en el primero
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage === projects.length) {
            setCurrentPage(1); // Vuelve al primer proyecto si ya estás en el último
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='w-full h-auto pl-[calc(12%)] pr-[calc(10%)] flex flex-col gap-4 justify-center'>
            <div className='w-full h-[calc(100vh/4)] flex flex-wrap' >
                {getPageData().map((project) => (
                    <ProjectCard
                        {...project}
                        key={project.id}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrevPage={handlePrevPage}
                        onNextPage={handleNextPage}
                    />
                ))}
            </div>
            <div className="flex justify-center my-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`h-2 w-2 mx-1.5 rounded-full ${index + 1 === currentPage ? 'dark:bg-gray-300 bg-slate-800' : 'dark:bg-slate-800 bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
