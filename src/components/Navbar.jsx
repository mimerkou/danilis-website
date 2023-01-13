import React from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';

const Navbar = ({ navbarScrolled }) => {
  return (
    <nav>
      <ul className="flex space-x-8 uppercase">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={`${
                navbarScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-red-600 tracking-wide cursor-pointer`}
            >
              <Link
                to={link.path}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={750}
                offset={-80}
                className="transition-all duration-500"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
