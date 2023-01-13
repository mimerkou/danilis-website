import React from 'react';
// import HeroImage from '../assets/hero.jpg';
import HeroImage from '../assets/fire-alarm.jpg';

const Hero = () => {
  // return (
  //   <section
  //     id="home"
  //     // style={{
  //     //   background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${HeroImage}) no-repeat fixed center`,
  //     //   backgroundSize: 'cover',
  //     // }}
  //     className="h-screen flex items-center bg-fixed bg-black bg-cover md:bg-center md:bg-no-repeat md:py-0 overflow-hidden"
  //   >
  //     <div className="container mx-auto text-white max-w-[1240px]">
  //       <div className="grid grid-rows-1 grid-cols-2 items-center h-full pt-8 px-10">
  //         {/* Left */}
  //         <div className="flex-1 flex flex-col h-full">
  //           <h1 className="leading-tight tracking-wide mb-8 mt-8 xs:text-lg sm:text-xl">
  //             Μεσογειακή <br /> Πυροπροστασία
  //           </h1>
  //           <h2 className="text-[1.4rem] text-gray-300 leading-tight tracking-wide mb-8">
  //             Λύσεις πυρασφάλειας <br /> στα Μεσόγεια και την Αττική.
  //           </h2>
  //           <button className="mb-8 border">Ποιοι είμαστε</button>
  //         </div>

  //         {/* Right */}
  //         <div className="flex flex-1 justify-end items-end h-full">
  //           <img src={HeroImage} alt="Hero" className="border" />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section
      id="home"
      className="h-[calc(100vh-80px)] mt-[80px] flex items-center bg-fixed bg-black bg-cover md:bg-center md:bg-no-repeat md:py-0 overflow-hidden"
    >
      <div className="max-w-[1240px] w-[80%] mx-auto grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-2">
        <div className="text-white">
          <h1 className="leading-tight tracking-wide mb-4 mt-8 text-3xl lg:text-4xl">
            Μεσογειακή <br /> Πυροπροστασία
          </h1>
          <h2 className="text-[1.2rem] text-gray-300 leading-tight tracking-wide mb-8 text-xl lg:text-2xl">
            Λύσεις πυρασφάλειας <br /> στα Μεσόγεια και την Αττική.
          </h2>
        </div>

        <div className="overflow-hidden">
          <img
            src={HeroImage}
            alt="Fire Alarm system"
            className="w-auto h-auto object-cover border mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
