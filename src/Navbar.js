import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className='navbar'>
            <h1>BookHeaders 📖</h1>
            <div className='links'>
            <Link to ="/">Home</Link>
            <Link to ="/contact">Reviews</Link>
            <Link to ='/create'>New Blog</Link>
            </div> 
        </nav>
    )
}

export default Navbar;
