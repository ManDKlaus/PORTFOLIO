'use client'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

const CardContainer = () => {

    const projects = useSelector(state => state.projects);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 1);
    const [currentOffset, setCurrentOffset] = useState(0);

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
            const newOffset = currentOffset + 1;
            setCurrentOffset(newOffset > 0 ? newOffset : projects.length - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage === projects.length) {
            setCurrentPage(1); // Vuelve al primer proyecto si ya estás en el último
        } else {
            setCurrentPage(currentPage + 1);
            const newOffset = currentOffset - 1;
            setCurrentOffset(newOffset < projects.length - 1 ? newOffset : 0);
        }
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
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
            <div className="absolute bottom-20 lg:bottom-28 w-full flex justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`h-2 w-2 mx-1.5 rounded-full ${index + 1 === currentPage ? 'dark:bg-yellow-300 bg-yellow-500' : 'bg-slate-800 dark:bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
