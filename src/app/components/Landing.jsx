import React, { useState } from 'react';
import Image from 'next/image';
import Nicolas from "../../../public/Nicolas.jpeg"
import Banner from "../../../public/img/dev2.png"

import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Landing({ show, showFull }) {
    return (
        <section
            id='Landing'
            className={`relative lg:absolute left-0 right-0 top-0 bottom-0 z-50 
            
            h-[calc(100vh-4rem)] lg:h-full w-full ${show ? "lg:w-[calc(100vw-4rem)]" : "lg:w-[410px]"}
            
            flex flex-col justify-center py-24 lg:py-0
            
            text-white transition-width ease-in-out duration-700 lg:cursor-pointer bg-cover bg-center`}
            style={{
                backgroundImage: `url(${Banner.src})`,
            }}
            onClick={showFull}
        >
            <div className='absolute top-0 right-0 w-full h-[calc(100vh/10)] z-50 flex' >
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg mt-auto ml-auto' />
            </div>
            <div className={`w-80 mx-auto z-50 flex flex-col justify-center items-center text-center custom-shadow-text`} >
                <div className='w-auto relative flex justify-center'>
                    <Image
                        src={Nicolas}
                        alt="Nicol&aacute;s Daniel Mansilla"
                        height={150}
                        className='rounded-lg'
                    />
                    <div className='h-full py-2 absolute top-0 right-[-40px] flex flex-col justify-between z-50'>
                        <a href="https://www.linkedin.com/in/nicol%C3%A1sdanielmansilla/" target="_blank">
                            <Image
                                src="https://img.icons8.com/pulsar-line/25/linkedin.png"
                                alt="LinkedIn"
                                width={25}
                                height={25}
                                className='drop-shadow cursor-pointer invert'
                            />
                        </a>
                        <a href="https://github.com/ManDKlaus" target="_blank">
                            <Image
                                src="https://img.icons8.com/pulsar-line/48/github.png"
                                alt="GitHub"
                                width={25}
                                height={25}
                                className='drop-shadow cursor-pointer invert'
                            />
                        </a>
                        <a href="mailto:mansilland@gmail.com" target="_blank">
                            <Image
                                src="https://img.icons8.com/pulsar-line/25/gmail-new.png"
                                alt="Gmail"
                                width={25}
                                height={25}
                                className='drop-shadow cursor-pointer invert'
                            />
                        </a>
                        <a href="https://wa.me/qr/2X77DSSQIW2EO1" target="_blank">
                            <Image
                                src="https://img.icons8.com/pulsar-line/25/whatsapp.png"
                                alt="WhatsApp"
                                width={25}
                                height={25}
                                className='drop-shadow cursor-pointer invert'
                            />
                        </a>
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
