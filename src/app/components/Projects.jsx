import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from './CardContainer'
import Titles from './Titles'

function Projects({ dark }) {

  const windowHeight = useSelector(state => state.windowHeight);

  return (
    <section
      id='Projects'
      className={`relative w-full h-[${windowHeight / 2}px] md:h-[${windowHeight}px] lg:h-full lg:min-h-full
    
      snap-start snap-always`}
    >
      <Titles title="Projects" />
      <CardContainer dark={dark} />
    </section>
  )
}

export default Projects