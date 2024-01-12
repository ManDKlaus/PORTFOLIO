import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

function TechList() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de datos. Puedes reemplazar esto con tu lógica de carga real.
        setTimeout(() => {
            setIsLoading(false);
        }, 750); // Cambia el tiempo según tus necesidades
    }, []);

    const imageObject = useSelector(state => state.imageObject);

    return (
        <div className='absolute top-0 left-0 h-full w-full px-[15vw] flex flex-wrap justify-center items-center content-end md:content-center lg:content-center' >
            {isLoading ? (
                Object.keys(imageObject).map((key) => (
                    <div
                        key={key}
                        className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gray-300 rounded animate-pulse m-4"
                    />
                ))
            ) : (
                // Renderiza las imágenes y nombres cuando isLoading es false
                Object.entries(imageObject).map(([key, imageUrl]) => (
                    <div key={key} className="m-2 lg:m-4 group relative">
                        {imageUrl ? (
                            <div className="relative">
                                <Image
                                    height={25}
                                    width={25}
                                    className="w-7 md:w-8 lg:w-10"
                                    src={imageUrl}
                                    alt={key}
                                />
                                <p className="indent-0 hidden text-xs absolute bottom-[calc(100%+2px)] left-1/2 transform -translate-x-1/2 bg-slate-600 text-white dark:bg-gray-50 dark:text-gray-950 py-1 px-2 rounded group-hover:block">
                                    {key}
                                </p>
                            </div>
                        ) : (
                            <p className="indent-0">{key}</p>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}

export default TechList