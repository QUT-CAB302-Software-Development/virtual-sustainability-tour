import React from 'react';
import './navbar.css';

// TODO: enhance menu bar (i.e. adding dropdowns to home, about, and contact)
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">TechTitans</div>
            <div className="navbar__menu">
                <div className="navbar__menu-item"><a href="/home">Home</a></div>
                <div className="navbar__menu-item"><a href="/about">About</a></div>
                <div className="navbar__menu-item"><a href="/contact">Contact</a></div>
            </div>
        </nav>
    );
}
// testing
export default Navbar;