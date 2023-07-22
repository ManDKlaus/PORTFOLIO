import React from 'react'
import Image from 'next/image'
import Tecnologies from "../../../public/img/Tecnologies.png"
import TecnologiesW from "../../../public/img/TecnologiesW.png"
import About from "../../../public/img/About.png"
import AboutW from "../../../public/img/AboutW.png"
import Contact from "../../../public/img/Contact.png"
import ContactW from "../../../public/img/ContactW.png"
import Projects from "../../../public/img/Projects.png"
import ProjectsW from "../../../public/img/ProjectsW.png"

function NavBar({ falseFull, showDark, dark }) {
    return (
        <div className={`bg-gradient-to-t ${!dark && "from-slate-950 via-slate-600 to-slate-500"} dark:from-gray-300 dark:via-gray-200 dark:to-white dark:text-gray-950 w-full`} >

            <button className="absolute top-0 right-0 w-16 h-16 z-50 flex items-center justify-center" onClick={showDark}>
                <span className="material-symbols-rounded">
                    {dark ? "dark_mode" : "light_mode"}
                </span>
            </button>

            <ul className="absolute right-0 h-full w-16 text-gray-300 flex flex-col justify-center" >

                <li className='h-32 w-16 shadow-md z-40'>
                    <a href="#About" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <div className="w-6 h-6">
                            <Image width="25" height="25" src={dark ? About : AboutW} alt="user-male-circle" />
                        </div>
                    </a>
                </li>


                <li className='h-32 w-16 shadow-md z-30' >
                    <a href="#Projects" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <div className="w-6 h-6" >
                            <Image width="25" height="25" src={dark ? Projects : ProjectsW} alt="user-male-circle" />
                        </div>
                    </a>
                </li>

                <li className='h-32 w-16 shadow-md z-20' >
                    <a href="#Tecnologies" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <div className="w-6 h-6" >
                            <Image width="25" height="25" src={dark ? Tecnologies : TecnologiesW} alt="user-male-circle" />
                        </div>
                    </a>
                </li>

                <li className='h-32 w-16 shadow-md z-10' >
                    <a href="#Contact" className='h-full w-full flex items-center justify-center' onClick={falseFull}>
                        <div className="w-6 h-6" >
                            <Image width="25" height="25" src={dark ? Contact : ContactW} alt="user-male-circle" />
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default NavBar