import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { links } from '../data';

const NavbarMobile = ({ navbarScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const liVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div className="cursor-pointer text-white z-20" onClick={toggleMenu}>
        <CgMenuRight
          className={`${
            navbarScrolled ? 'text-gray-600' : 'text-white'
          } w-10 h-10 z-20`}
        />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-[#a4190f] fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-500 overflow-hidden`}
      >
        <div
          className="cursor-pointer absolute top-8 right-8"
          onClick={toggleMenu}
        >
          <CgClose className="w-10 h-10" />
        </div>

        {links.map((link) => {
          return (
            <motion.li
              key={link.id}
              className="mb-8 cursor-pointer text-xl"
              variants={liVariants}
              initial="hidden"
            >
              <Link
                to={link.path}
                activeClass="active-mobile"
                spy={true}
                smooth={true}
                duration={750}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavbarMobile;
