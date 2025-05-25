import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gora.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-slate-950 text-white'>
      <div className='flex items-center justify-between px-4 py-3 max-w-4xl mx-auto'>
        <div className='flex items-center'>
          <img src={logo} className='w-10 h-10 sm:w-12 sm:h-12 bg-zinc-500/35 rounded-full' alt='Logo' />
        </div>
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            isMenuOpen ? 'block' : 'hidden',
            'lg:flex lg:items-center absolute lg:static top-16 left-0 right-0 bg-zinc-800 lg:bg-transparent lg:p-0 p-4'
          )}
        >
          <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8'>
            <li>
              <Link
                to='/Home'
                className='text-white font-bold hover:text-amber-400 text-base sm:text-lg'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/About'
                className='text-white font-bold hover:text-amber-400 text-base sm:text-lg'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/Deals'
                className='text-white font-bold hover:text-amber-400 text-base sm:text-lg'
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
            </li>
            <li>
              <Link
                to='/Contact'
                className='text-white font-bold hover:text-amber-400 text-base sm:text-lg'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default NavBar;