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
            
            py-24
            
            flex flex-col justify-center items-center
            
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
            <div
                className={`w-2/3 lg:w-80 z-50 
                
                flex flex-col justify-center items-center text-center 
                
                custom-shadow-text`}
            >
                <div className='w-auto relative flex justify-center'>
                    <Image
                        src={Nicolas}
                        alt="Nicol&aacute;s Daniel Mansilla"
                        width="auto"
                        height={200}
                        className='h-[20vh] w-auto shadow-lg rounded-lg z-50'
                    />
                    <div className='h-full absolute top-0 left-[14.5vh] flex flex-col justify-between z-40 text-black dark:text-white'>
                        {navLanding.map((item) => (
                            <LandingButton
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
                <h1 className={`my-4 ${emblemaOne.className} text-6xl lg:text-3xl`} >
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
