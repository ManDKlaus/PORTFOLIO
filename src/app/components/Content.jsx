import React from 'react'
import About from './About'
import Projects from './Projects'
import Technologies from './Technologies'
import Contact from './Contact'


function Content({ dark }) {
    return (
        <section
            id='Content'
            className={`lg:ml-[320px]

            w-full lg:w-[calc(100vw-4rem+10px)]

            lg:rounded-r-xl z-40

            lg:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${dark ? "lg:from-slate-800 lg:via-slate-950 lg:to-slate-950" : "lg:from-white lg:via-white lg:to-gray-500" }
        
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