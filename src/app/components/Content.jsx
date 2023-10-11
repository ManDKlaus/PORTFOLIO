import React from 'react'
import About from './About'
import Projects from './Projects'
import Technologies from './Technologies'
import Contact from './Contact'


function Content({ dark }) {
    return (
        <section
            id='Content'
            className={`

            w-full lg:w-[calc(100vw-4rem+10px)]
            
            bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${dark ? "from-slate-800 via-slate-950 to-slate-950 lg:from-slate-800 lg:via-slate-950 lg:to-slate-950" : "from-white via-white to-gray-600 lg:from-white lg:via-white lg:to-gray-500"}

            lg:rounded-r-xl z-40
        
            flex flex-col items-center

            overflow-hidden lg:overflow-y-auto custom-scrollbar lg:scroll-smooth lg:snap-mandatory lg:snap-y`}
        >
            <About />
            <Projects />
            <Technologies dark={dark} />
            <Contact />
        </section>
    )
}

export default Content