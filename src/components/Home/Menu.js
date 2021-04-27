import React, { useState } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category;
  })
  let tempCategories = ['all', ...new Set(tempItems)]
  return tempCategories
}

const Menu = ({ items }) => {
  const [ coffeeItems, setCoffeeItems ] = useState(items)
  const [ categories, setCategories ] = useState(getCategories(items))
  // console.log(categories)

  const handleItems = (category) => {
    let tempItems = [...items]
    if (category === 'all') {
      setCoffeeItems(tempItems)
    } else {
      items = tempItems.filter(item => item.category === category)
      setCoffeeItems(items)
    }
  }

  if (coffeeItems.length === 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title='best of our menu' />
          <div className="row">
            <div className="col-10 col-smm-6 mx-auto text-center text-muted">
              <h3>There are no items to display</h3>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title='best of our menu' />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => (
                <button type='button' key={index} 
                  className="btn btn-point text-capitalize fw-bold m-3"
                  onClick={() => handleItems(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* items */}
          <div className="row">
            {coffeeItems.map(item =>(
              <div key={item.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                <div style={{width: '80px', height:'80px'}}>
                  <Img fixed={item.image.fixed} />
                </div>
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className='mb-0 text-capitalize'><small>{item.title}</small></h6>
                    <h6 className='mb-0 text-point'><small>${item.price}</small></h6>
                  </div>
                  <p className="text-muted"><small>{item.description.description}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
