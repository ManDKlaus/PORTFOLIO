import React, { useState, useEffect } from 'react';
import LandingButton from "./LandingButton";
import Image from 'next/image';
import Nicolas from "../../../public/Nicolas.jpeg";
import Banner from "../../../public/img/dev2.png";
import InOut from "../components/InOut";
import { useDispatch, useSelector } from 'react-redux';
import { showLanding } from '../redux/actions';

import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Landing() {

    const dispatch = useDispatch();

    const showFull = () => {
        dispatch(showLanding());
    };

    const show = useSelector(state => state.showLanding);
    const navLanding = useSelector(state => state.navLanding);
    const dashboard = useSelector(state => state.dashboard);

    const [altoVentana, setAltoVentana] = useState(0);

    useEffect(() => {
        // Función para actualizar la altura de la ventana
        const handleResize = () => {
            setAltoVentana(window.innerHeight);
        };

        // Inicialización de la altura de la ventana
        setAltoVentana(window.innerHeight);

        // Agregar el evento de cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Cuando cambia el altoVentana, actualiza el estilo de la sección
        document.getElementById('Landing').style.height = `${altoVentana}px`;
    }, [altoVentana]);

    return (
        <section
            id='Landing'
            className={`relative z-50 
            
            h-[${altoVentana}px] lg:h-full w-full ${!show && "lg:w-[410px]"}
            
            flex flex-col justify-center py-24 lg:py-0
            
            shadow lg:shadow-md dark:shadow-2xl shadow-slate-900 text-white transition-width ease-in-out duration-700 lg:cursor-pointer bg-cover bg-center`}
            style={{
                backgroundImage: `url(${Banner.src})`,
            }}
            onClick={showFull}
        >
            <div className='absolute top-0 right-0 w-full h-[calc(10%)] z-50 flex flex-col items-end justify-end' >
                <div className='hidden lg:block'>
                    <InOut />
                </div>
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg ml-auto' />
            </div>
            <div className={`h-[${altoVentana}px] w-80 mx-auto z-50 flex flex-col justify-center items-center text-center custom-shadow-text`} >
                <div className='w-auto relative flex justify-center'>
                    <Image
                        src={Nicolas}
                        alt="Nicol&aacute;s Daniel Mansilla"
                        width="auto"
                        height={185}
                        className='shadow-lg rounded-lg z-50'
                    />
                    <div className='h-full absolute top-0 left-[133px] flex flex-col justify-between z-40 text-black dark:text-white'>
                        {navLanding.map((item) => (
                            <LandingButton
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                    <button
                        className={`h-full w-16 hover:w-auto absolute top-0 right-[133px] pr-6 pl-4 flex flex-row-reverse items-center group
                        z-40
                    
                        text-black dark:text-white ${dashboard ? "bg-green-50/50 dark:bg-neutral-600/70" : "bg-white/40 dark:bg-slate-600/70"}
                        
                        rounded-l-lg shadow-lg`}
                    >
                        <Image
                            src="https://img.icons8.com/pulsar-line/48/resume.png"
                            alt="cv"
                            width="24"
                            height="24"
                            className='dark:invert'
                        />
                        <span className='hidden group-hover:inline pr-4 pl-6' >CV</span>
                    </button>
                </div>
                <h1 className={`my-4 text-lg ${emblemaOne.className} md:text-xl lg:text-3xl`} >
                    <span className="text-yellow-400">Nicol&aacute;s Daniel </span>
                    Mansilla
                </h1>
                <h2 className='mx-4 backdrop-blur-[1.3px]'>
                    <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer</h2>
            </div>
            <div className='absolute bottom-0 right-0 w-full h-[calc(10%)] z-50 flex' >
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg' />
            </div>
        </section>
    );
}

export default Landing;
