import React from 'react';
import { useSelector } from 'react-redux';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Global from './Global';
import Likes from './Likes';
import Comments from './Comments';
import Contact from './Contact';

function Content({ dark }) {
    const dashboard = useSelector(state => state.dashboard);

    return (
        <section
            id='Content'
            className={`w-full lg:w-[75vw] lg:h-[80vh] lg:my-[10vh] z-20
            
            flex flex-col items-center 
            
            overflow-hidden lg:overflow-y-auto custom-scrollbar scroll-smooth snap-mandatory snap-y`}
        >
            {dashboard ? (
                <>
                    <Global />
                    <Likes />
                    <Comments dark={dark} />
                    <Contact />
                </>
            ) : (
                <>
                    <About />
                    <Projects />
                    <Technologies dark={dark} />
                    <Contact />
                </>
            )}
        </section>
    );
}

export default Content;
