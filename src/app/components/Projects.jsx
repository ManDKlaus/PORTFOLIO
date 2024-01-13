import React from 'react'
import CardContainer from './CardContainer'
import Titles from './Titles'

function Projects({ dark, altoVentana }) {
  console.log("altoVentana", altoVentana)
  return (
    <section
      id='Projects'
      className={`relative w-full h-[${altoVentana / 2}px] md:h-[${altoVentana}px] lg:h-full lg:min-h-full
    
      snap-start snap-always`}
    >
      <Titles title="Projects" />
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects