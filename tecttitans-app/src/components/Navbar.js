import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import techtitanslogo from '../images/Techwhite.png';
import Logout from "../pages/Logout.js";

function Navbar({ user }) {
    // toggle the hamburger menu and update the state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
      showButton()
    }, []);


    window.addEventListener('resize', showButton);

      // Handle user login status change
      const handleLoginStatusChange = (loggedIn) => {
        setIsLoggedIn(loggedIn);
      };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {user && <span>Welcome, {user.email}</span>}
                <Link to="/" onClick={closeMobileMenu}>
                    <img src={techtitanslogo} className="navbar-logo" alt="TechTitans Logo" />
                </Link>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    ECHTITANS
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tour' className='nav-links' onClick={closeMobileMenu}>
                            Tour
                        </Link>
                    </li>
                    {isLoggedIn ? ( // Check login status
                        <li className="nav-item">
                            <Logout onLogout={handleLoginStatusChange} /> {/* Pass callback to handle logout */}
                        </li>
                     ) : (
                        <li className="nav-item">
                            <Link to="/user/register" className="nav-links" onClick={closeMobileMenu}>
                                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                            </Link>
                        </li>
                     )}
                </ul>
                {/* <Link to='/sign-up'>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </Link> */}

            </div>
        </nav>
    );
}
// testing
export default Navbar;