import React from 'react'
import SingleProduct from './SingleProduct'
import Title from '../Globals/Title'
import { useStaticQuery, graphql } from "gatsby"

const productsQuery = graphql`
  {
    allContentfulCoffeeProduct {
      nodes {
        id
        title
        price
        image {
          fluid{
            src
          }
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
const Products = () => {
  const data = useStaticQuery(productsQuery)
  const products = data.allContentfulCoffeeProduct.nodes
  console.log(data)
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='our products' />
        <div className="row">
          {products.map(product => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
