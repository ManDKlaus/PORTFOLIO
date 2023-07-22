import Image from 'next/image';
import Nicolas from "../../../public/Nicolás.jpeg"

import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight:["400"] })

function Landing({ show, showFull }) {
    return (
        <div className={`absolute left-0 z-50 h-full ${show ? "w-[calc(100vw-62px)]" : "w-1/4"} bg-cover bg-center bg-no-repeat bg-banner rounded-tr-[15px] rounded-br-[15px] transition-width ease-in-out duration-700 flex justify-center items-center saturate-[.2] `} onClick={showFull} >
            <div className="w-80 flex flex-col justify-center items-center text-center">
                <Image
                    src={Nicolas}
                    alt="Nicolás Daniel Mansilla"
                    height={200}
                    className='rounded-lg'
                />
                <h1 className={`my-4 text-x1 ${emblemaOne.className} text-gray-900 dark:text-white md:text-2xl lg:text-4xl`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-yellow-200">Nicolás Daniel</span> Mansilla
                </h1>
                <h2 className='' >
                    <span className='font-bold'>Passionate Full Stack Developer</span> | Crafting Innovative Solutions for Seamless User Experiences | JS | HTML | CSS | React | Redux | NextJS | TailwindCSS | NodeJS | Express | PostgreSQL | Passport | Cloudinary | Multer</h2>
            </div>
        </div>
    );
}

export default Landing;
