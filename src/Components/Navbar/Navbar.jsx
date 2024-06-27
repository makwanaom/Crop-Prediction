import React, { useState } from 'react';
import "./Navbar.css";
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <nav>
                <h3>AgriApex AI</h3>
                <ul id='navbar'>
                    <li>
                        <a 
                            className={activeLink === 'home' ? 'active' : ''} 
                            href='/'
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === 'howto' ? 'active' : ''} 
                            href='#howto'
                            onClick={() => handleLinkClick('howto')}
                        >
                            How to calculate?
                        </a>
                    </li>
                </ul>
                <GoogleTranslate />
            </nav>
        </>
    );
}

export default Navbar;
