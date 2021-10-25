import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-list'>
        <a href='#'>
          <i className='fab fa-facebook-square'></i>
        </a>

        <a href='#'>
          <i className='fab fa-instagram-square'></i>
        </a>
        <a href='#'>
          <i className='fab fa-youtube-square'></i>
        </a>
        <a href='#'>
          <i className='fab fa-pinterest-p'></i>
        </a>
        <a href='#'>
          <i className='fab fa-twitter-square'></i>
        </a>
        <a href='#'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <p className='copy-right'>
        Powered by
        <a href='#'> w3.css</a>
      </p>
    </div>
  )
}

export default Footer
