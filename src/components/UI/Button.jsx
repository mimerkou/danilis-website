import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ children, path, darkBg }) => {
  return (
    <Link
      to={path}
      smooth={true}
      spy={true}
      offset={-80}
      className={`${
        darkBg
          ? 'border border-[#a4190f]'
          : 'hover:border hover:border-[#a4190f]'
      } cursor-pointer bg-[#a4190f] border border-[#a4190f] text-white px-6 py-4 inline-block transition-all duration-300 hover:bg-white hover:text-[#a4190f]`}
    >
      {children}
    </Link>
  );
};

export default Button;
