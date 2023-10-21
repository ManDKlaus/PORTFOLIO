import React from 'react'
import CardContainer from './CardContainer'
import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Projects({ dark }) {
  return (
    <section id='Projects' className='relative h-[calc(50vh)] lg:min-h-[calc(100vh/10*8)] w-full mx-16 lg:mx-0 flex flex-col lg:justify-center gap-4 snap-start snap-always indent-8' >
      <h2 className={`indent-0 text-white dark:text-slate-950 opacity-70 text-4xl lg:text-[80px] text-center font-semibold ${emblemaOne.className} leading-[100px] custom-text-shadow z-40`} >
          Projects
      </h2>
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects