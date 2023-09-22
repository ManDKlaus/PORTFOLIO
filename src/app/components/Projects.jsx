import React from 'react'
import CardContainer from './CardContainer'

function Projects({ dark }) {
  return (
    <section id='Projects' className='min-h-screen w-full py-28 pl-[calc(12%)] pr-[calc(10%)] flex flex-col justify-center items-center gap-4 snap-start snap-always'>
      <CardContainer dark={dark} />
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects