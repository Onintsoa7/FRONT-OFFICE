import React, { useEffect, useState } from 'react';
import "../App.css"
import { RiMenuLine } from "react-icons/ri";
function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId);
            const nav = document.getElementById(navId);

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show');
                    setIsMenuVisible(!isMenuVisible);
                });
            }
        };

        showMenu('nav__toggle', 'nav-menu');
    }, [isMenuVisible]);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Repr' Izy
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="" className="nav__link">Models</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Brand</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Store</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Experience</a></li>
                    </ul>
                </div>
                <RiMenuLine className="nav__toggle" id="nav__toggle" />
            </nav>
        </header>
    )
}

export default Header