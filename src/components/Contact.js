import React from 'react'

const Contact = () => {
  const showContact = () => (
    <div className='content-section' id='contact'>
      <h2 className='section-heading'>CONTACT</h2>
      <p className='section-sub-heading'>Fan? Drop a note!</p>
      <div className='row contact-content'>
        <div className='col col-half contact-info s-col-full'>
          <p>
            <i className='fas fa-map-marker-alt'></i> Chicago, US
          </p>
          <p>
            <i className='fas fa-phone-alt'></i> Phone:
            <a href='tel:+00 151515'>+00 151515</a>
          </p>
          <p>
            <i className='fas fa-envelope'></i> Email:
            <a href='mailto:mail@mail.com'>mail@mail.com</a>
          </p>
        </div>
        <div className='col col-half s-col-full contact-form'>
          <form action=''>
            <div className='row'>
              <div className='col col-half s-col-full'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='form-control'
                  required
                />
              </div>
              <div className='col col-half s-col-full s-mt-8'>
                <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  name='name'
                  className='form-control'
                  required
                />
              </div>
            </div>
            <div className='row mt-8'>
              <div className='col col-full'>
                <input
                  type='text'
                  name='message'
                  placeholder='Message'
                  className="form-control placeholder='Message"
                  required
                />
              </div>
            </div>
            <input
              type='submit'
              value='SEND'
              className='contact-submit-btn btn mt-16 pull-right s-full-width'
              required
            />
          </form>
        </div>
      </div>
    </div>
  )

  return showContact()
}

export default Contact
