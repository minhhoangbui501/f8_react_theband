import React from 'react'

const Modal = () => {
  const closeBuyTicket = () => {
    const modalQuery = document.querySelector('.modal')
    modalQuery.classList.remove('open')
  }
  const handleModal = () => {
    const modalQuery = document.querySelector('.modal')
    modalQuery.classList.remove('open')
  }
  const handleModalContainer = e => {
    e.stopPropagation()
  }
  return (
    <div className='modal' onClick={handleModal}>
      <div className='modal-container ' onClick={handleModalContainer}>
        <div className='modal-close' onClick={closeBuyTicket}>
          <i className='fas fa-times'></i>
        </div>
        <header className='modal-header'>
          <i className='fas modal-heading-icon fa-briefcase'></i>
          Tickets
        </header>
        <div className='modal-body'>
          <label htmlFor='quantity' className='modal-label'>
            <i className='fas fa-shopping-cart'></i>
            Tickets, $15 per person
          </label>
          <input
            type='text'
            id='quantity'
            className='modal-input'
            placeholder='How many?'
          />

          <label htmlFor='email' className='modal-label'>
            <i className='fas fa-user'></i>
            Send To
          </label>
          <input
            id='email'
            type='email'
            className='modal-input'
            placeholder='Enter your email....'
          />

          <button className='buy-tickets'>
            Pay
            <i className='fas fa-check'></i>
          </button>
        </div>
        <footer className='modal-footer'>
          <p className='modal-help'>
            Need <a href=''>help?</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Modal
