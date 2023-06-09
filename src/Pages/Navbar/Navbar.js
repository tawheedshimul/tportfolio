import React, { useState } from 'react';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import SimpleClock from './SimpleClock';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className='flex'>
                    <p className="text-white text-3xl font-bold  animate-pulse">
                    Tawheed
                    </p>
                    <p className='px-3'><SimpleClock></SimpleClock></p>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
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
                                <Link
                                    to='/'
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/About'
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/contact'
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/services'
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Services
                                </Link>
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
                                <Link
                                    to='/'
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/about'
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About Me
                                </Link>
                                <Link
                                    to='/contact'
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </Link>
                                <Link
                                    to='/services'
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    );
};

export default Navbar;

