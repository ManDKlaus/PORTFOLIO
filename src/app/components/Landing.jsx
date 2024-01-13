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

    return (
        <section
            id='Landing'
            className={`relative z-50 
            
            h-full w-full ${!show && "lg:w-[25vw] lg:min-w-[400px]"}
            
            shadow lg:shadow-md dark:shadow-2xl shadow-slate-900 text-white transition-width ease-in-out duration-700 lg:cursor-pointer bg-cover bg-center`}
            style={{
                backgroundImage: `url(${Banner.src})`,
            }}
            onClick={showFull}
        >
            <div className={` w-full h-full 

            py-24 bg-black/30 hover:bg-black/50
                    
            flex flex-col justify-center items-center`} >
                <InOut />
                <div
                    className='absolute top-[10svh] right-0 z-40
          
                        hidden lg:block

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
                            src={Nicolas}
                            alt="Nicol&aacute;s Daniel Mansilla"
                            width="auto"
                            height={200}
                            className='h-[20svh] w-auto shadow-lg rounded-lg z-50'
                        />
                        <div
                            className={`h-[50svh] lg:h-full
                        
                            fixed lg:absolute left-0 top-[25svh] lg:top-0 lg:left-[14.5svh] 
                            
                            flex flex-col justify-between z-40
                            
                            text-black dark:text-white`}
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
                        <span className="text-yellow-400">Nicol&aacute;s Daniel </span>
                        Mansilla
                    </h1>
                    <h2 className='mx-4 text-lg tracking-widest'>
                        <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer</h2>
                </div>
                <div
                    className='absolute bottom-[10svh] left-0 z-40
          
                    hidden lg:block

                    w-3/5 h-[1px] 
        
                    bg-yellow-400 rounded shadow-lg'
                />
            </div>
        </section>
    );
}

export default Landing;
