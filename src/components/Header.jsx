import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import { GiFlamer } from 'react-icons/gi';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';

const Header = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50
        ? setNavbarScrolled(true)
        : setNavbarScrolled(false);
    });
  });

  return (
    <header
      className={`${
        navbarScrolled ? 'bg-white h-20 shadow-md' : 'h-24 bg-black shadow-none'
      } flex items-center fixed top-0 w-full text-white px-8 z-10 transition-all duration-500`}
    >
      <div
        className="container mx-auto h-full flex items-center justify-between max-w-[1240px]"
        // data-aos="zoom-in-down"
        // data-aos-duration="1000"
        // data-aos-delay="1200"
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <Link
            to="home"
            activeClass="active"
            className="flex items-center"
            spy={true}
            smooth={true}
            offset={-80}
            duration={750}
          >
            <GiFlamer
              size={35}
              className={`${
                navbarScrolled ? 'text-gray-600' : 'text-white'
              } mr-2`}
            />
            <h1
              className={`${
                navbarScrolled ? 'block text-gray-600' : 'hidden'
              } text-lg leading-tight tracking-wide transition-all duration-300`}
            >
              ΜΕΣΟΓΕΙΑΚΗ <br /> ΠΥΡΟΠΡΟΣΤΑΣΙΑ
            </h1>
          </Link>
        </div>

        {/* Navbar */}
        <div className="hidden lg:block">
          <Navbar navbarScrolled={navbarScrolled} />
        </div>

        {/* Navbar mobile */}
        <div className="lg:hidden">
          <NavbarMobile navbarScrolled={navbarScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;
