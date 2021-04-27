import React from 'react'

const Footer = () => {
  return (
    <footer className='footer py-3'>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto py-3 col-md-6 text-center text-capitalize">
            <h3>all right reserved &copy; {new Date().getFullYear()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
