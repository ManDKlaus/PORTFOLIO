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

            w-full lg:h-[calc(100vh/10*8)] z-0
            
            lg:my-[calc(100vh/10)]
        
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