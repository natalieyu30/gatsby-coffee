import React from 'react'
import Title from '../Globals/Title'



const Contact = () => {
  return (
    <section className='contact py-5'>
      <Title title='contact us' />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/mayaydqa" method='POST'>
            {/* name */}
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" className='form-control' name='name' id='name' placeholder='John Smith'/>
            </div>
            {/* email */}
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className='form-control' name='email' id='email' placeholder='email@email.com'/>
            </div>
            {/* description */}
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description"className='form-control' rows='5' placeholder='Your description here...'></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-point btn-block fw-bold mt-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
