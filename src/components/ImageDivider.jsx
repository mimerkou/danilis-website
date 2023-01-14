import React from 'react';
import Image from '../assets/pyro.jpg';

const ImageDivider = () => {
  return (
    <div className="relative min-h-[15vh] w-full flex items-center justify-center">
      <img
        src={Image}
        alt="Fire Extinguishers"
        className="w-full h-[35vh] lg:h-[50vh] flex self-stretch"
      />
    </div>
  );
};

export default ImageDivider;
