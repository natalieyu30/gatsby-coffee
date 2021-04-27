import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Img from 'gatsby-image'

const SingleProduct = ({product}) => {
  const image = getImage(product.image)
  return (
    <div className='col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3'>
      <div className="card">
        {/* <Img fluid={product.image.fluid} className='card-img-top' /> */}
        <div style={{height:'230px', overflow:'hidden'}}>
          <GatsbyImage image={image} alt={product.title} className='card-img-top' />
        </div>
        <div className="card-body text-center">
          <h6 className='text-capitalize fw-bold title'>{product.title}</h6>
          <p className=''>${product.price}</p>
          <button 
            className="snipcart-add-item btn btn-point mt-1 fw-bold"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-image={product.image.fluid.src}
            data-item-url='https://gatsby-coffee2021.netlify.com/'
            data-item-quantity="1"
            // data-item-taxes={tva}
            // disabled={_stock === 0 ? true : false}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
