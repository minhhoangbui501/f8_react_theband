import React from 'react'
import place1 from '../assets/img/place1.jpg'
import place2 from '../assets/img/place2.jpg'
import place3 from '../assets/img/place3.jpg'

const Tour = () => {
  const showBuyTicket = () => {
    const modalQuery = document.querySelector('.modal')
    modalQuery.classList.add('open')
  }
  const handleClick = e => {
    e.preventDefault()
    showBuyTicket()
  }

  const showTour = () => (
    <div className='tour-section' id='tour'>
      <div className='content-section'>
        <h2 className='section-heading text-white'>TOUR DATES</h2>
        <p className='section-sub-heading text-white'>
          Remember to book your tickets!
        </p>
        <ul className='tickets-list'>
          <li>
            September <span className='sold-out'>Sold out</span>
          </li>
          <li>
            October <span className='sold-out'>Sold out</span>
          </li>
          <li>
            November <span className='quantity'>3</span>
          </li>
        </ul>
        <div className='row places-list'>
          <div className='s-col-full mt-16 col-third  col'>
            <img src={place1} alt='' className='place-img' />
            <div className='place-body'>
              <h3 className='place-heading'>New York</h3>
              <p className='place-time'>Fri 27 Nov 2016</p>
              <p className='place-description'>
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <a href='#' className='btn s-full-width' onClick={handleClick}>
                Buy tickets
              </a>
            </div>
          </div>
          <div className='s-col-full mt-16 col-third  col'>
            <img src={place2} alt='' className='place-img' />
            <div className='place-body'>
              <h3 className='place-heading'>Paris</h3>
              <p className='place-time'>Sat 28 Nov 2016</p>
              <p className='place-description'>
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <a href='#' className='btn s-full-width' onClick={handleClick}>
                Buy tickets
              </a>
            </div>
          </div>
          <div className='s-col-full mt-16 col-third  col'>
            <img src={place3} alt='' className='place-img' />
            <div className='place-body'>
              <h3 className='place-heading'>San Francisco</h3>
              <p className='place-time'>Sun 29 Nov 2016</p>
              <p className='place-description'>
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <a href='#' className='btn s-full-width' onClick={handleClick}>
                Buy tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return showTour()
}

export default Tour
