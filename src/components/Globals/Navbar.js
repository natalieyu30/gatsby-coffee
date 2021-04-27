import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { MdShoppingCart } from "react-icons/md";

const links = [
  {
    id: 1, 
    path: '/',
    text: 'Home'
  },
  {
    id: 2, 
    path: '/about',
    text: 'About'
  },
]
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [css, setCss] = useState('collapse navbar-collapse')

  const navbarHandler = () => {
    if (navOpen) {
      setNavOpen(false)
      setCss('collapse navbar-collapse')
    } else {
      setNavOpen(true)
      setCss('collapse navbar-collapse show')
    }
  }
  return (
    <nav className='navbar navbar-expand-sm bg-light navbar-light text-light'>
      <div className="container">
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt="logo"/>
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/webalys  */}
        </Link>
        <button type='button' className="navbar-toggler" onClick={navbarHandler}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={css}>
          <ul className="navbar-nav nav-expand">
            {links.map(link => {
              return (
                <li key={link.id} className='nav-item'>
                  <Link to={link.path} className='nav-link text-uppercase fw-bold'>
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-5">
              <MdShoppingCart className='cart-icon snipcart-checkout' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
