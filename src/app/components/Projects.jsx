import React from 'react'
import CardContainer from './CardContainer'
import Titles from './Titles'

function Projects({ dark }) {
  return (
    <section id='Projects' className='relative lg:min-h-full h-[50vh] md:h-screen w-full 
    
    flex items-center justify-center gap-4 
    
    snap-start snap-always' >
      <Titles title="Projects" />
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects