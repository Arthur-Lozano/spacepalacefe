import React from 'react';
import { Link } from 'react-router-dom'
import Cart from "../components/Cart";

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                <Cart />
                    {/* <ul className="right">
                      <li><Link to="/cart">My cart</Link></li>
                       
                    </ul> */}
                </div>
            </nav>  
    )
}

export default Navbar;