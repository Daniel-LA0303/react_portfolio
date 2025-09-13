import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleDrop = () => {
    setIsDropOpen(!isDropOpen);
  };

  return (
    <>
      {/* New navbar */}
      <header className='bg-black-card'>

        <div className=' text-color text-base sm:text-2xl'>Daniel-LA | Developer</div>

        <ul className={`navbar flex items-center ${menuAbierto ? 'open' : ''}`}>
          <li>
            <Link
              className=' cursor-pointer'
              to='about-me'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                menuAbierto && setMenuAbierto(false);
                isDropOpen && setIsDropOpen(false);
              }}
            >About me</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='experience'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                menuAbierto && setMenuAbierto(false);
                isDropOpen && setIsDropOpen(false);
              }}
            >Experience</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='projects'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                menuAbierto && setMenuAbierto(false);
                isDropOpen && setIsDropOpen(false);
              }}
            >Projects</Link>
          </li>
          <li>
            <Link
              className=' cursor-pointer'
              to='contact'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                menuAbierto && setMenuAbierto(false);
                isDropOpen && setIsDropOpen(false);
              }}
            >Contact</Link>
          </li>
          <li className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md hover:text-color text-white shadow-sm px-4 py-1 dropdown-bg text-sm font-medium  focus:outline-none  active:text-gray-800 transition ease-in-out duration-150"
                onClick={toggleDrop}
              >
                Language
                <svg className="-mr-1 ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            <div
              className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-300 ${isDropOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } bg-gray-500 bg-opacity-75`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <button 
                  onClick={() => {
                    menuAbierto && setMenuAbierto(false);
                    isDropOpen && setIsDropOpen(false)}}
                  className="flex justify-between  px-4 py-4 rounded-md text-center text-sm text-white hover:text-color transition-transform transform hover:scale-110 " role="menuitem" tabIndex="-1" id="menu-item-0">
                  <span >Spanish</span>
                  <img src="/images/spain.png" alt="spain" width={20} />
                </button>
                <button 
                  onClick={() => {
                    menuAbierto && setMenuAbierto(false);
                    isDropOpen && setIsDropOpen(false)}}
                  className="flex justify-between  px-4 py-4 rounded-md text-center text-sm text-white hover:text-color transition-transform transform hover:scale-110" role="menuitem" tabIndex="-1" id="menu-item-1">
                  <span>English</span>
                  <img src="/images/usa.png" alt="usa" width={20} />
                </button>
                <button 
                  onClick={() => {
                    menuAbierto && setMenuAbierto(false);
                    isDropOpen && setIsDropOpen(false)}}
                  className="flex justify-between  px-4 py-4 rounded-md text-center text-sm text-white hover:text-color transition-transform transform hover:scale-110" role="menuitem" tabIndex="-1" id="menu-item-2">
                  <span>French</span>
                  <img src="/images/france.png" alt="france" width={20} />
                </button>
              </div>
            </div>
          </li>
        </ul>



        <div class="main">
          <div className={'menu-icon'} id="" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuAbierto ? faClose : faBars} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
