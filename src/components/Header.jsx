import React, { useState } from 'react';
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import Logo from '../images/onlyDevs.png';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex items-center justify-between mx-auto px-4 py-2.5">
        <a href="/" className="flex-shrink-0">
          <img src={Logo} className="h-10 sm:h-12" alt="OnlyDevs Logo" />
        </a>
        <button
          onClick={toggleNav}
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Toggle navigation</span>
          {navOpen ? <TfiClose className="w-6 h-6" /> : <TfiMenu className="w-6 h-6" />}
        </button>
        <div className={`md:flex ${navOpen ? 'block' : 'hidden'} md:block md:items-center md:justify-end`}>
          <ul className="mt-4 flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/aboutUs" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/forum" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-white">Forums</a>
            </li>
            <li>
              <a href="/resources" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-white">Resources</a>
            </li>
            <li>
              <a href="/contributors" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-white">Contributors</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
