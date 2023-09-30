import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Sharingan from "../../../public/img/Sharingan.png"

function NavBar({ falseFull, showDark, dark }) {
    const [showSharingan, setShowSharingan] = useState(false);
    const [jutsu, setJutsu] = useState(false);

    const handleJutsu = () => {
        setJutsu(!jutsu);
        setShowSharingan(true);
        setTimeout(() => {
            setShowSharingan(false);
            setJutsu(false);
        }, 300);
    };

    return (
        <div className={`bg-gradient-to-t ${!dark && "from-slate-950 via-slate-600 to-slate-500"} dark:from-gray-300 dark:via-gray-200 dark:to-white dark:text-gray-950 h-full w-full p-[calc(100vh/10)]`} >
            {showSharingan && <div className=' animate-ping absolute top-0 left-0 h-full w-[calc(100vw-64px)] z-50 bg-white' />}

            <button className="absolute top-0 right-0 w-16 h-16 z-50 flex items-center justify-center " onClick={showDark}>
                <Image
                    width="25"
                    height="25"
                    src={dark ? 'https://img.icons8.com/pulsar-line/48/full-moon.png' : 'https://img.icons8.com/pulsar-line/25/sun.png'}
                    alt="Select Mode"
                    className={`${dark ? '' : 'invert'} ${jutsu ? 'hidden' : ''}`}
                    onClick={handleJutsu}
                />
                {showSharingan && (
                    <Image
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/sharingan.png"
                        alt="Sharingan"
                        className={`animate-spin ${jutsu ? '' : 'hidden'} ${dark ? '' : 'invert'}`}
                    />
                )}
            </button>

            <ul className="absolute right-0 h-4/5 w-16 text-gray-300 flex flex-col justify-center" >

                <li className='h-1/4 w-16 shadow-md z-40'>
                    <a href="#About" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <Image
                            width="24"
                            height="24"
                            src="https://img.icons8.com/pastel-glyph/24/user-male-circle.png"
                            alt="Link about me"
                            className={dark ? "" : "invert"}
                        />
                    </a>
                </li>


                <li className='h-1/4 w-16 shadow-md z-30' >
                    <a href="#Projects" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <Image
                            width="24"
                            height="24"
                            src="https://img.icons8.com/pastel-glyph/24/laptop-coding--v1.png"
                            alt="Link projects"
                            className={dark ? "" : "invert"}
                        />
                    </a>
                </li>

                <li className='h-1/4 w-16 shadow-md z-20' >
                    <a href="#Technologies" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <Image
                            width="24"
                            height="24"
                            src="https://img.icons8.com/pulsar-line/24/laptop-settings.png"
                            alt="Link tecnologies"
                            className={dark ? "" : "invert"}
                        />
                    </a>
                </li>

                <li className='h-1/4 w-16 shadow-md z-10' >
                    <a href="#Contact" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <Image
                            width="24"
                            height="24"
                            src="https://img.icons8.com/pulsar-line/24/paper-plane.png"
                            alt="Link contact"
                            className={dark ? "" : "invert"}
                        />
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default NavBar