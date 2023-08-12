import React, { Component } from 'react';

const NavBar = props => {
    return ( 
        <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <span className="badge text-bg-primary m-2">{props.productsCount}</span>
            </div>
        </nav>
     );
}
 
export default NavBar;