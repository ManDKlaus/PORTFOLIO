import React from 'react'
import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function About() {
    return (
        <section id='About' className='h-auto py-10 lg:py-0 lg:min-h-full lg:h-screen w-full text-[12px] flex flex-col snap-start snap-always tracking-widest indent-8 subpixel-antialiased'>
            <div className="w-3/5 m-auto lg:ml-[calc(100%/5+10px)] flex flex-col gap-4">
                <h2 className={`indent-0 opacity-70 text-4xl lg:text-[80px] text-center font-semibold ${emblemaOne.className} leading-7 text-white dark:text-slate-950 custom-text-shadow`} >About Me</h2>
                <p>
                    Hi there! I&apos;m a passionate <span className='text-yellow-400'>Full Stack Developer</span>, obviusly. When I&apos;m not coding and building awesome web applications, you can find me indulging in my love for series and movies. I&apos;m a huge fan of classics like Pokemon, Naruto, and Dragon Ball, and I&apos;m always excited about the latest releases from the Marvel universe.
                </p>
                <p>
                    Besides my love for technology, I&apos;m also an avid artist and designer. I enjoy sketching, drawing, and creating digital art. Designing beautiful and intuitive user interfaces is one of my favorite parts of the development process.
                </p>
                <p>
                    My journey as a Full Stack Developer has been a thrilling one, and I&apos;m constantly seeking opportunities to learn and grow. I believe in the power of technology to make a positive impact on people&apos;s lives, and that&apos;s what drives me to work hard and deliver exceptional solutions.
                </p>
                <p>
                    Let&apos;s connect and explore the possibilities of collaborating on exciting projects. Feel free to reach out to me anytime!
                </p>
            </div>
        </section>
    )
}

export default About