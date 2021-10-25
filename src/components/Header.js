import React from 'react'

const Header = () => {
  const handleClickMenuBar = () => {
    const header = document.querySelector('.header')
    if (header.clientHeight === 46) header.style.height = 'auto'
    else header.style.height = '46px'
  }
  const handleHiddenMenu = () => {
    const header = document.querySelector('.header')
    header.style.height = null
  }
  let isOpen = true
  const handleMenuMore = e => {
    const header = document.querySelector('.header')
    if (isOpen) {
      e.preventDefault()
      isOpen = false
    } else {
      header.style.height = null
      isOpen = true
    }
  }
  const showNavbar = () => (
    <>
      <ul className='nav'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#band' onClick={handleHiddenMenu}>
            Band
          </a>
        </li>
        <li>
          <a href='#tour' onClick={handleHiddenMenu}>
            Tour
          </a>
        </li>
        <li>
          <a href='#contact' onClick={handleHiddenMenu}>
            Contact
          </a>
        </li>
        <li>
          <a href='#' onClick={handleMenuMore}>
            More
            <i className='nav_arrow_icon fas fa-angle-down'></i>
          </a>

          <ul className='subnav'>
            <li>
              <a href='#'>Merchandise</a>
            </li>
            <li>
              <a href='#'>Extra</a>
            </li>
            <li>
              <a href='#'>Media</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='search_btn'>
        <i className='search-icon fas fa-search'></i>
      </div>
      <div className='mobile-menu-btn' onClick={handleClickMenuBar}>
        <i className='menu-icon fas fa-bars'></i>
      </div>
    </>
  )

  return <header className='header'>{showNavbar()}</header>
}

export default Header
