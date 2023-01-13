import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ children, path }) => {
  return (
    <Link
      to={path}
      smooth={true}
      spy={true}
      offset={-80}
      className="cursor-pointer bg-[#a4190f] text-white border-[#a4190f] px-6 py-4 inline-block transition-all duration-300 hover:bg-white hover:border-white hover:text-[#a4190f]"
    >
      {children}
    </Link>
  );
};

export default Button;
