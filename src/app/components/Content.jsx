import React from 'react'
import About from './About'
import Projects from './Projects'
import Technologies from './Technologies'
import Contact from './Contact'


function Content({ dark }) {
    return (
        <div className='absolute top-0 right-16

        w-[calc(100vw-50px-calc(100vw/4))] h-full

        rounded-tr-[15px] rounded-br-[15px]

        bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-white to-gray-500 dark:from-slate-800 dark:via-slate-950 dark:to-slate-950
        
        flex flex-col items-center

        overflow-y-auto custom-scrollbar scroll-smooth snap-mandatory snap-y'>
            <About />
            <Projects />
            <Technologies dark={dark} />
            <Contact />
        </div>
    )
}

export default Content