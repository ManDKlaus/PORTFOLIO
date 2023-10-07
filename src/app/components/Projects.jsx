import React from 'react'
import CardContainer from './CardContainer'
import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Projects({ dark }) {
  return (
    <section id='Projects' className='relative lg:min-h-[calc(100vh-4rem)] h-auto lg:min-h-screen w-full mx-16 lg:mx-0 flex flex-col justify-center gap-4 snap-start snap-always indent-8' >
      <h2 className={`indent-0 text-white dark:text-slate-950 opacity-70 text-4xl lg:text-[80px] text-center font-semibold ${emblemaOne.className} leading-[100px] custom-text-shadow`} >
          Projects
      </h2>
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects