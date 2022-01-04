import React, { FC, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { NavbarItem } from './NavbarItem';
import { routes } from '../../constants/routes';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-light px-2 sm:px-4 py-2.5 dark:bg-primary dark:border-secondary border-primary border-b">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href={ routes.HOME }>
          <a className="flex">
            <Image src={ '/images/fb.png' } width={ '30px' } height={ '30px' } alt="Fapte bune logo"/>
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-light ml-2">Fapte bune</span>
          </a>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" onClick={ () => setIsOpen(!isOpen) }
                className="inline-flex items-center p-2 ml-3 text-sm text-dark dark:text-light rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className={ `${ isOpen ? 'hidden' : '' } w-6 h-6` } fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"/>
          </svg>
          <svg className={ `${ isOpen ? '' : 'hidden' } w-6 h-6` } fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
          </svg>
        </button>
        <div className={ `${ !isOpen ? 'hidden' : '' } w-full md:block md:w-auto` } id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium items-center">
            <NavbarItem to={ routes.HOME } name="Acasa" setIsOpen={ setIsOpen }/>
            <NavbarItem to={ routes.ABOUT_US } name="Despre noi" setIsOpen={ setIsOpen }/>
            <NavbarItem to={ routes.HOW_IT_WORKS } name="Cum functioneaza?" setIsOpen={ setIsOpen }/>
            <NavbarItem to={ routes.CONTACT } name="Contact" setIsOpen={ setIsOpen }/>
            <NavbarItem to={ routes.AUTH_LOGIN } name="Autentificare" type="button" setIsOpen={ setIsOpen }/>
            <NavbarItem to={ routes.AUTH_REGISTER } name="Inregistrare" type="button-outlined" setIsOpen={ setIsOpen }/>
            <DarkModeToggle/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;