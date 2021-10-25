import React from 'react'
import About from './About'
import Contact from './Contact'
import Map from './Map'
import Tour from './Tour'

const Content = () => {
  return (
    <div className='content'>
      <About />
      <Tour />
      <Contact />
      <Map />
    </div>
  )
}

export default Content
