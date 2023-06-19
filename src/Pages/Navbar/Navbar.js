import React, { useState } from 'react';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import AnalogWatch from './Analog';
import './button.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-100 py-2 px-6 fixed top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className='flex'>
                        <p>
                            <AnalogWatch></AnalogWatch>
                        </p>
                        <p className="text-Black text-3xl font-bold  animate-pulse">
                            Tawheed
                        </p>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-black focus:outline-none focus:text-black"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <VscChromeClose className="h-6 w-6" />
                            ) : (
                                <VscMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                    <div className="hidden md:flex">
                        <ul className="ml-4 flex space-x-4">
                            <li>
                                <NavLink
                                    to='/'
                                    className="button text-red-600">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/About'
                                    className="button text-red-600">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className="button text-red-600">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/services'
                                    className="button text-red-600">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/player'
                                    className="button text-red-600">
                                    Player
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    {(ref) => (
                        <div className="md:hidden" ref={ref}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div>
                                    <NavLink
                                        to='/'
                                        className="mbutton"
                                        onClick={toggleMenu}>
                                        Home
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink
                                        to='/About'
                                        className="mbutton"
                                        onClick={toggleMenu}>
                                        About Me
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink
                                        to='/contact'
                                        className="mbutton"
                                        onClick={toggleMenu}>
                                        Contact
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink
                                        to='/services'
                                        className="mbutton"
                                        onClick={toggleMenu}>
                                        Services
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink
                                        to='/player'
                                        className="mbutton"
                                        onClick={toggleMenu}>
                                        Player
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav >
    );
};

export default Navbar;

