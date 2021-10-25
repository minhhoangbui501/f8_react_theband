import React from 'react'
import memberImg from '../assets/img/bandmember.jpg'

const About = () => {
  const showAbout = () => (
    <div className='content-section' id='band'>
      <h2 className='section-heading'>THE BAND</h2>
      <p className='section-sub-heading'>We love music</p>
      <p className='about-text'>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='row members-list'>
        <div className='s-col-full mt-32 col col-third text-center'>
          <p className='member-name'>Name</p>
          <img src={memberImg} alt='img not found' className='member-avatar' />
        </div>
        <div className='s-col-full mt-32 col col-third text-center'>
          <p className='member-name'>Name</p>
          <img src={memberImg} alt='img not found' className='member-avatar' />
        </div>
        <div className='s-col-full mt-32 col col-third text-center'>
          <p className='member-name'>Name</p>
          <img src={memberImg} alt='img not found' className='member-avatar' />
        </div>
        <div className='clear'></div>
      </div>
    </div>
  )

  return showAbout()
}

export default About
