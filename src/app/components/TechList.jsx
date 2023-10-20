import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function TechList({ dark }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de datos. Puedes reemplazar esto con tu lógica de carga real.
        setTimeout(() => {
            setIsLoading(false);
        }, 750); // Cambia el tiempo según tus necesidades
    }, []);

    const imageObject = {
        HTML: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
        CSS: "https://cdn.iconscout.com/icon/free/png-256/css-alt-3628710-3029935.png",
        TailwindCSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
        JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "Next.js": "https://i.postimg.cc/h40tbYqT/NextJS.png",
        "Next-Auth": "https://next-auth.js.org/img/logo/logo-xs.png",
        Redux: "https://img.icons8.com/color/48/redux.png",
        "NodeJS": "https://img.icons8.com/fluency/48/node-js.png",
        Express: "https://upload.wikimedia.org/wikipedia/commons/8/88/Status_iucn_EX_icon.svg",
        Passport: "https://images.ctfassets.net/vwq10xzbe6iz/tnwT7PN9aBmT7vgkTtGhV/940f001eb249a42904cd40e64d13c7e9/passportJS-300x300.png?h=250",
        "JSON Web Tokens": "https://img.icons8.com/color/48/java-web-token.png",
        PostgreSQL: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        Cloudinary: "https://i.postimg.cc/mZV8fbsD/cloudinary.png",
        Multer: "",
        Illustrator: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
        InDesign: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
        Photoshop: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        "Clip Studio Paint": "https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png",
        Blender: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
    };

    return (
        <div className='absolute top-0 left-0 h-full w-full px-12 lg:px-32 flex flex-wrap justify-center items-center content-center' >
            {isLoading ? (
                Object.keys(imageObject).map((key) => (
                    <div key={key} className="w-10 h-10 bg-gray-300 rounded animate-pulse m-4" />
                ))
            ) : (
                // Renderiza las imágenes y nombres cuando isLoading es false
                Object.entries(imageObject).map(([key, imageUrl]) => (
                    <div key={key} className="m-4 group relative">
                        {imageUrl ? (
                            <div className="relative">
                                <Image height={25} width={25} className="w-10" src={imageUrl} alt={key} />
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