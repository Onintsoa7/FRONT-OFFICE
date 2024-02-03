import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Header() {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({});

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const Navbar = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Profil',
            link: '/profil',
        },
        {
            name: 'Services',
            submenu: [
                { name: 'Service 1', link: '/services/service1' },
                { name: 'Service 2', link: '/services/service2' },
                // Add more submenu items as needed
            ],
        },
        {
            name: 'Portfolio',
            submenu: [
                { name: 'Portfolio 1 zertyuiopmlkjhg', link: '/Portfolios/Portfolio1' },
                { name: 'Portfolio 2', link: '/Portfolios/Portfolio2' },
                // Add more submenu items as needed
            ],
        },
        {
            name: 'Contact',
            link: '/contact',
        },
    ];

    const toggleSubmenu = (index) => {
        setSubmenuOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <>
            <nav className={`lg:px-24 md:px-1 sm:px-14 px-8 py-2 shadow-md bg-black/80 rounded-br-full fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-black/60  text-black" : "text-black"
                }`}>
                <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="mx-7">
                                <h4 className="text-4xl uppercase font-bolder text-white">
                                    Rep<span className="text-pink-500 text-5xl" >'R</span>Izy
                                </h4>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-500 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <RiArrowDropDownLine
                                            className="text-gray-500 cursor-pointer"
                                            size={24}
                                        />
                                    ) : (
                                        <RiArrowDropDownLine
                                            className="text-gray-500 cursor-pointer"
                                            size={24}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`leading-10 flex justify-between items-center md:block ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="list-none lg:flex md:flex sm:block block gap-x-8 gap-y-16">
                            {Navbar.map((item, index) => (
                                <li key={index} >
                                    <div className="flex items-center"
                                        onClick={() => toggleSubmenu(index)}>
                                        <Link
                                            to={item.link}
                                            className="text-white text-[1.15rem] font-medium tracking-wider hover:text-white ease-out duration-700"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <RiArrowDropDownLine
                                                className="ml-1 size-7 text-white cursor-pointer"
                                            />
                                        )}
                                        {item.submenu && submenuOpen[index] && (
                                            <ul className="absolute mt-52 space-y-2 bg-transparent text-gray-500 text-pink-500">
                                                {item.submenu.map((subitem, subindex) => (
                                                    <li key={subindex}>
                                                        <Link
                                                            to={subitem.link}
                                                            className="block px-4 py-2 text-xl text-pink-500"
                                                        >
                                                            {subitem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                            <Link to={'/login'}
                                className="bg-pink-400 text-[1.1rem] font-normal text-white px-4 py-1 rounded lg:ml-10 md:ml-2 sm:ml-0 ml-0 w-28  text-center"
                                type='submit' >
                                Connexion
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
