import React from 'react'
import CardContainer from './CardContainer'

function Projects({ dark }) {
  return (
    <section id='Projects' className='relative min-h-screen w-full flex flex-col justify-center gap-4 snap-start snap-always indent-8' >
      <h2 className="ml-[calc(100%/5+10px)] text-3xl font-semibold">
        Projects
      </h2>
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects