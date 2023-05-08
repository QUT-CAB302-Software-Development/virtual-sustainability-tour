import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import techtitanslogo from '../images/techtitanslogo.png';

function Navbar() {
    // toggle the hamburger menu and update the state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

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
    return (
        <nav className="navbar">
            <div className="navbar-container">
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
                    <li className='nav-item'>
                        <Link to='/testing' className='nav-links' onClick={closeMobileMenu}>
                            Testing
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                        </Link>
                    </li>
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