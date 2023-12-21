import React, { useState } from 'react';
import LandingButton from "./LandingButton";
import Image from 'next/image';
import Nicolas from "../../../public/Nicolas.jpeg"
import Banner from "../../../public/img/dev2.png"
import InOut from "../components/InOut"
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

    const navLanding = [
        {
            id: 'GitHub',
            text: 'GitHub',
            linkSrc: "https://github.com/ManDKlaus",
            iconSrc: "https://img.icons8.com/pulsar-line/48/github.png",
        },
        {
            id: 'LinkedIn',
            text: 'LinkedIn',
            linkSrc: "https://www.linkedin.com/in/nicol%C3%A1sdanielmansilla/",
            iconSrc: "https://img.icons8.com/pulsar-line/48/linkedin.png" ,
        },
        {
            id: 'Gmail',
            text: 'Gmail',
            linkSrc: "mailto:mansilland@gmail.com",
            iconSrc: "https://img.icons8.com/pulsar-line/48/gmail-new.png",
        },
        {
            id: 'WhatsApp',
            text: 'WhatsApp',
            linkSrc: "https://wa.me/qr/2X77DSSQIW2EO1",
            iconSrc: "https://img.icons8.com/pulsar-line/48/whatsapp.png",
        },
    ];

    return (
        <section
            id='Landing'
            className={`relative z-50 
            
            h-[calc(100vh-4rem)] lg:h-full w-full ${!show && "lg:w-[410px]"}
            
            flex flex-col justify-center py-24 lg:py-0
            
            shadow-md dark:shadow-2xl shadow-slate-900 text-white transition-width ease-in-out duration-700 lg:cursor-pointer bg-cover bg-center`}
            style={{
                backgroundImage: `url(${Banner.src})`,
            }}
            onClick={showFull}
        >
            <div className='absolute top-0 right-0 w-full h-[calc(100vh/10)] z-50 flex flex-col items-end justify-end' >
                <InOut />
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg ml-auto' />
            </div>
            <div className={`w-80 mx-auto z-50 flex flex-col justify-center items-center text-center custom-shadow-text`} >
                <div className='w-auto relative flex justify-center'>
                    <Image
                        src={Nicolas}
                        alt="Nicol&aacute;s Daniel Mansilla"
                        width="auto"
                        height={150}
                        className='shadow-lg rounded-lg z-50'
                    />
                    <div className='h-full absolute top-0 left-[105px] flex flex-col justify-between z-40 shadow-lg text-black dark:text-white'>
                        {navLanding.map((item) => (
                            <LandingButton
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
                <h1 className={`my-4 text-lg ${emblemaOne.className} md:text-xl lg:text-3xl`} >
                    <span className="text-yellow-400">Nicol&aacute;s Daniel </span>
                    Mansilla
                </h1>
                <h2 className='mx-4'>
                    <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer</h2>
            </div>
            <div className='absolute bottom-0 right-0 w-full h-[calc(100vh/10)] z-50 flex' >
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg' />
            </div>
        </section>
    );
}

export default Landing;
