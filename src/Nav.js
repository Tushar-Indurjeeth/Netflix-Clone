import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                alt="Netflix Logo"
            />

        </div>
    )
}

export default Nav
