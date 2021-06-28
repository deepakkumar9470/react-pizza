import React from 'react'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const cartStyle = {
        background : "#ffa502",
        display  : "flex",
        padding  : "5px 10px",
        borderRadius : "50px"
    }
    return (
        <>
             <nav className="container nav_div flex mx-auto items-center justify-between py-3">
    
                 <Link to='/'>
                     <img src={logo} alt="logo" style={{ height :  45}}/>
                 </Link>

                 <ul className="flex items-center">
                     <li><Link to="/">Home</Link></li>
                     <li className="ml-5"><Link to="/products">Products</Link></li>
                     <li className="ml-5 mr-4"><Link to="/cart">Cart</Link></li>
                     <li>
                          <Link to="/cart">
                            <div style={cartStyle}>
                                <span className="text-white">10</span>
                                <img className="ml-1" src={cart} alt="cart" />
                            </div>
                            </Link>
                     </li>
                 </ul>

   
              </nav> 
        </>
    )
}

export default Navbar
