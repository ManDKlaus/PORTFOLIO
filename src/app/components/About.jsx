import React from 'react'

function About() {
    return (
        <section id='About' className='min-h-full h-screen w-full text-[12px] text-justify flex flex-col snap-start snap-always tracking-widest indent-8 subpixel-antialiased'>
            <div className='w-3/5 ml-[calc(100%/5+10px)] mr-auto my-auto flex flex-col gap-4'>
                <h2 className='text-3xl font-semibold'>About Me</h2>
                <p>
                    Hi there! I&apos;m a passionate Full Stack Developer, obviusly. When I&apos;m not coding and building awesome web applications, you can find me indulging in my love for series and movies. I&apos;m a huge fan of classics like Pokemon, Naruto, and Dragon Ball, and I&apos;m always excited about the latest releases from the Marvel universe.
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