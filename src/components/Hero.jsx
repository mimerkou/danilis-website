import React from 'react';
import HeroImage from '../assets/fire-alarm.jpg';
import Button from './UI/Button';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center bg-fixed bg-black bg-cover md:bg-center md:bg-no-repeat md:py-0 overflow-hidden"
    >
      <div className="max-w-[1240px] w-[80%] mx-auto grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-2">
        <div className="text-white h-auto flex flex-col justify-center items-center lg:items-start">
          <h1
            className="leading-tight tracking-wide font-bold mb-4 mt-2 text-3xl lg:text-4xl"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Μεσογειακή <br /> Πυροπροστασία
          </h1>
          <h2
            className="text-[1.2rem] font-thin text-gray-300 leading-tight tracking-wide mb-8 text-xl lg:text-2xl"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Λύσεις πυρασφάλειας <br /> στα Μεσόγεια και την Αττική.
          </h2>
          <div
            className="mb-6"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-once="true"
          >
            <Button path="about" darkBg={true} className="mr-2">
              Ποιοι είμαστε
            </Button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="900"
          data-aos-once="true"
        >
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
