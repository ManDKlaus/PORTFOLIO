import React, { useState, useEffect, useRef } from 'react';
import LandingButton from "./LandingButton";
import Image from 'next/image';
import PhotoCV from "../../../public/Nicolas.jpeg";
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

    // Estado y referencias para controlar el desplazamiento horizontal y el arrastre
    const [bgX, setBgX] = useState(50); // Posición inicial en 50% (centrado)
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startBgX = useRef(50);
    const hasDragged = useRef(false);
    
    // Referencias para suavizar el movimiento sin lag
    const targetBgX = useRef(50);
    const animationFrameId = useRef(null);
    
    // 1. Iniciar arrastre (mouse o touch)
    const handleStart = (e) => {
        if (e.target.closest('button')) return;

        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
        }

        isDragging.current = true;
        hasDragged.current = false;
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
        startBgX.current = bgX;
        targetBgX.current = bgX;
    };

    // Función de interpolación suave (lerp) ejecutada en el frame del navegador
    const updateSmoothBg = () => {
        setBgX((prevBgX) => {
            const diff = targetBgX.current - prevBgX;
            // Factor de suavizado: 0.25 responde al instante sin retraso pero amortigua los saltos del cursor
            if (Math.abs(diff) > 0.01) {
                return prevBgX + diff * 0.25;
            }
            return targetBgX.current;
        });

        if (isDragging.current) {
            animationFrameId.current = requestAnimationFrame(updateSmoothBg);
        }
    };

    // 2. Mover la imagen mientras se arrastra
    const handleMove = (e) => {
        if (!isDragging.current) return;

        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = currentX - startX.current;

        if (Math.abs(deltaX) > 5) {
            hasDragged.current = true;
        }

        const sensitivity = 0.8; 
        const newBgX = startBgX.current - (deltaX * sensitivity);

        // Actualizamos el objetivo instantáneamente
        targetBgX.current = Math.min(Math.max(newBgX, 0), 100);

        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(updateSmoothBg);
        }
    };

    // 3. Finalizar arrastre y decidir si fue Clic o Drag
    const handleEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
        }

        if (!hasDragged.current) {
            dispatch(showLanding());
        }
    };

    return (
        <section
            id='Landing'
            className={`relative z-50 
            
            h-full w-full ${!show && "lg:w-[25vw] lg:min-w-[400px]"}
            
            shadow lg:shadow-md dark:shadow-2xl shadow-slate-900 text-white transition-[width]
            
            ease-in-out duration-700 lg:cursor-grab active:cursor-grabbing bg-cover`}
            
            style={{
                backgroundImage: `url(${Banner.src})`,
                backgroundPosition: `${bgX}% center`,
            }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
        >
            <div className={` w-full h-full 

            py-[10svh] bg-black/30 hover:bg-black/50
                    
            flex flex-col justify-center items-center`} >
                <InOut />
                <div
                    className='absolute top-[10svh] right-0 z-40

                        w-3/5 h-[1px] 
        
                        bg-yellow-400 rounded shadow-lg'
                />
                <div
                    className={`w-[75vw] lg:w-[25vw] z-50 
                
                flex flex-col justify-center items-center text-center 
                
                custom-shadow-text `}
                >
                    <div className='w-auto lg:relative flex justify-center'>
                        <Image
                            src={PhotoCV}
                            alt="Nicolás Daniel Mansilla"
                            className='h-[20svh] w-auto shadow-lg rounded-lg z-50 select-none'
                        />
                        <div
                            className={`h-[50svh] lg:h-full
                        
                            fixed lg:absolute left-0 top-[25svh] lg:top-0 lg:left-[14.5svh] select-none
                            
                            flex flex-col justify-between z-40
                            
                            text-black dark:text-white `}
                        >
                            {navLanding.map((item) => (
                                <LandingButton
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                    <h1 className={`my-4 ${emblemaOne.className} text-4xl`} >
                        <span className="text-yellow-400">Nicolás Daniel </span>
                        Mansilla
                    </h1>
                    <h2 className='mx-4 text-sm sm:text-base md:text-lg tracking-widest'>
                        <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer
                    </h2>
                </div>
                <div
                    className='absolute bottom-[10svh] left-0 z-40

                    w-3/5 h-[1px] 
        
                    bg-yellow-400 rounded shadow-lg'
                />
            </div>
        </section>
    );
}

export default Landing;
