import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

const Info = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aspernatur placeat omnis dolorum vero repudiandae quam beatae ad, vel veritatis, obcaecati quia eligendi necessitatibus aut debitis praesentium harum voluptatibus impedit. Quasi nam, eos soluta officia modi voluptatem dicta repellat adipisci explicabo ratione itaque asperiores sint ex praesentium omnis quis ipsam?
            </p>
            <Link to='/about'>
              <button className="btn btn-point text-uppercase fw-bold">About page</button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Info
