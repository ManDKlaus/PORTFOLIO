import Image from 'next/image';
import Nicolas from "../../../public/Nicolas.jpeg"
import Banner from "../../../public/img/dev2.png"

import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Landing({ show, showFull }) {
    return (
        <div className={`absolute left-0 z-50 h-full ${show ? "w-[calc(100vw-64px)]" : "w-[calc(25vw)]"} text-white rounded-tr-[15px] rounded-br-[15px] transition-width ease-in-out duration-700 cursor-pointer flex justify-center items-center `} onClick={showFull} >
            <div className="w-80 z-50 flex flex-col justify-center items-center text-center " style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                <Image
                    src={Nicolas}
                    alt="Nicol&aacute;s Daniel Mansilla"
                    height={150}
                    className='rounded-lg'
                />
                <h1 className={`my-4 text-lg ${emblemaOne.className} md:text-xl lg:text-3xl`} >
                    <span className="text-yellow-400">Nicol&aacute;s Daniel </span>
                    Mansilla
                </h1>
                <h2 className='px-8'>
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
        </div>
    );
}

export default Landing;
