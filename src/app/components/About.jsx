import React from 'react'
import Titles from './Titles'

function About() {
    return (
        <section id='About' className='relative h-full w-full py-10 lg:py-0 lg:min-h-full w-full text-[12px] flex flex-col items-center justify-center snap-start snap-always tracking-widest indent-8 subpixel-antialiased z-40'>
                <Titles title="About Me" />
                <p className='z-40 lg:w-2/3 w-4/5' >
                    Hi there! I&apos;m a passionate <span className='text-yellow-400'>Full Stack Developer</span>, obviusly. When I&apos;m not coding and building awesome web applications, you can find me indulging in my love for series and movies. I&apos;m a huge fan of classics like Pokemon, Naruto, and Dragon Ball, and I&apos;m always excited about the latest releases from the Marvel universe.
                </p>
                <p className='z-40 lg:w-2/3 w-4/5' >
                    Besides my love for technology, I&apos;m also an avid artist and designer. I enjoy sketching, drawing, and creating digital art. Designing beautiful and intuitive user interfaces is one of my favorite parts of the development process.
                </p>
                <p className='z-40 lg:w-2/3 w-4/5' >
                    My journey as a Full Stack Developer has been a thrilling one, and I&apos;m constantly seeking opportunities to learn and grow. I believe in the power of technology to make a positive impact on people&apos;s lives, and that&apos;s what drives me to work hard and deliver exceptional solutions.
                </p>
                <p className='z-40 lg:w-2/3 w-4/5' >
                    Let&apos;s connect and explore the possibilities of collaborating on exciting projects. Feel free to reach out to me anytime!
                </p>
        </section>
    )
}

export default About