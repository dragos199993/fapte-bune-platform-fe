import React, { FC } from 'react';
import Link from 'next/link';

type NavbarItemProps = {
  to: string,
  name: string,
  type?: 'link' | 'button' | 'button-outlined',
  setIsOpen?: (open: false) => void
}

export const NavbarItem: FC<NavbarItemProps> =
  ({ to, name, type = 'link', setIsOpen }) => {
    let className = 'block border-2 border-transparent py-2 pr-4 pl-3 mx-4 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-light'

    if (type === 'button') {
      className = 'bg-secondary md:my-0 mt-4 mb-2 block border-transparent border-2 text-light mx-1 py-2 px-4 rounded'
    }

    if (type === 'button-outlined') {
      className = 'border-secondary border-2 md:my-0 mt-2 mb-4 block text-light mx-1 py-2 px-4 rounded text-dark dark:text-light'
    }

    return (
      <li>
        <Link href={ to }>
          <a onClick={ () => setIsOpen(false) }
             className={ className }
             aria-current="page">{ name }</a>
        </Link>
      </li>
    );
  };
