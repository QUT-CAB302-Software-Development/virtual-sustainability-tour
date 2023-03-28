import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">TechTitans</div>
            <div className="navbar__menu">
                <div className="navbar__menu-item">Home</div>
                <div className="navbar__menu-item">About</div>
                <div className="navbar__menu-item">Contact</div>
            </div>
        </nav>
    );
}
// testing
export default Navbar;