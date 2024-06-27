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
                <h3>AgriApex AI</h3>
                <ul id='navbar'>
                    <li>
                        <Link 
                            to="/" 
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/calculate" 
                            className={activeLink === 'calculate' ? 'active' : ''}
                            onClick={() => handleLinkClick('calculate')}
                        >
                            Compute
                        </Link>
                    </li>
                </ul>
                <GoogleTranslate />
            </nav>
        </>
    );
}

export default Navbar;
