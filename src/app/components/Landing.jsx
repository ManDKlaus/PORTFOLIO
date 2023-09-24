import Image from 'next/image';
import Nicolas from "../../../public/Nicolas.jpeg"
import Banner from "../../../public/img/dev2.png"
import LinkedInW from "../../../public/img/LinkedInW.png"
import GitHubW from "../../../public/img/GitHubW.png"
import GmailW from "../../../public/img/GmailW.png"

import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Landing({ show, showFull }) {
    return (
        <div
            className={`absolute left-0 z-50 h-full ${show ? "w-[calc(100vw-64px)]" : "w-[calc(25vw)]"} text-white rounded-tr-[15px] rounded-br-[15px] transition-width ease-in-out duration-700 cursor-pointer flex flex-col justify-center `}
            onClick={showFull}
        >
            <div className='absolute top-0 right-0 w-full h-1/6 z-50 flex' >
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
                    <div className='h-full py-4 absolute top-0 right-[-40px] flex flex-col justify-between z-50'>
                        <a href="https://www.linkedin.com/in/nicol%C3%A1sdanielmansilla/" target="_blank">
                            <Image
                                src={LinkedInW}
                                alt="LinkedIn"
                                height={25}
                                className='drop-shadow cursor-pointer'
                            />
                        </a>
                        <a href="https://github.com/ManDKlaus" target="_blank">
                            <Image
                                src={GitHubW}
                                alt="GitHub"
                                height={25}
                                className='drop-shadow cursor-pointer'
                            />
                        </a>
                        <a href="mailto:mansilland@gmail.com" target="_blank">
                            <Image
                                src={GmailW}
                                alt="Gmail"
                                height={25}
                                className='drop-shadow cursor-pointer'
                            />
                        </a>
                    </div>
                </div>
                <h1 className={`my-4 text-lg ${emblemaOne.className} md:text-xl lg:text-3xl`} >
                    <span className="text-yellow-400">Nicol&aacute;s Daniel </span>
                    Mansilla
                </h1>
                <h2 className=''>
                    <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer</h2>
            </div>
            <Image
                src={Banner}
                alt="Developer"
                layout="fill"
                objectFit={`${show ? "fill" : "cover"}`}
                objectPosition="center center"
                className={`absolute left-0 ${show ? "h-auto w-full" : "h-full w-screen"} rounded-tr-[15px] rounded-br-[15px] brightness-[.9]`}
            />
            <div className='absolute bottom-0 right-0 w-full h-1/6 z-50 flex' >
                <div className='w-3/5 h-[1px] bg-yellow-400 z-50 rounded shadow-lg' />
            </div>
        </div>
    );
}

export default Landing;
