import React from 'react'
import CardContainer from './CardContainer'
import Titles from './Titles'

function Projects({ dark }) {

  return (
    <section
      id='Projects'
      className={`relative w-full h-[50svh] md:h-[100svh] lg:h-full lg:min-h-full
    
      snap-start snap-always`}
    >
      <Titles title="Projects" />
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects