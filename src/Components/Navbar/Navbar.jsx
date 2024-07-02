import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "./Navbar.css";
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <nav>
                <h3>
                        <Link   
                            to="/" 
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}
                            style={{color:"white"}}
                        >
                            <img src="/wheat.png" width={30} alt="" />
                            AgriApex AI
                        </Link>
                    </h3>
                <ul id='navbar'>
                    {/* <li>
                        <Link 
                            to="/" 
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </Link>
                    </li> */}
                    <li>
                        <Link 
                            to="/calculate" 
                            className={activeLink === 'calculate' ? 'active' : ''}
                            onClick={() => handleLinkClick('calculate')}
                        >
                            Measure Parameters
                        </Link>
                    </li>
                    <li>
                        <GoogleTranslate /> 
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
