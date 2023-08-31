import React from 'react'
import CardContainer from './CardContainer'

function Projects() {
  return (
    <section id='Projects' className='min-h-screen w-full pl-[calc(12%)] pr-[calc(10%)] flex flex-col justify-center items-center gap-4 snap-start snap-always'>
      <CardContainer />
      <CardContainer />
    </section>
  )
}

export default Projects