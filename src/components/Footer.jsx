import React from 'react';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <section className="text-white min-h-[35vh] bg-black opacity-95 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto py-20 px-8">
        <div
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="text-lg uppercase">Μεσογειακη Πυροπροστασια</h1>
          <h2 className="text-gray-300 mb-2 font-thin">
            Λύσεις Πυρασφάλειας <br /> στα Μεσόγεια και την Αττική
          </h2>
          <p>210 66 24 687</p>
          <p>6944 357 297</p>
          <p>sales@danilis.gr</p>
        </div>

        <div
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h5 className="text-lg uppercase">Ωρες Λειτουργιας</h5>
          <p>Δευ-Παρ: 08.00 - 17.00</p>
          <p>Σάββατο: 08.00 - 13.00</p>
        </div>

        <div
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h5 className="text-lg uppercase">Χρησιμοι Συνδεσμοι</h5>
          <p>
            <a
              href="https://www.fireservice.gr/el"
              className="hover:text-[#a4190f] transition-all duration-300"
            >
              Πυροσβεστική
            </a>
          </p>
          <p>
            <a
              href="https://ebetam.gr/"
              className="hover:text-[#a4190f] transition-all duration-300"
            >
              ΕΒΕΤΑΜ
            </a>
          </p>
        </div>

        <div
          className="absolute bottom-24 md:bottom-20 lg:bottom-16 right-8 w-[40px] h-[40px] bg-[#1f1f1f] flex justify-center items-center p-7 cursor-pointer"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <Link to="home" smooth={true} spy={true} offset={-80}>
            TOP
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1f1f1f] text-white h-full w-full">
        <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 place-content-center">
          {/* <p className="text-center lg:text-left"> */}
          <p className="text-center text-sm h-[40px] flex items-center justify-center">
            Copyright &copy; {new Date().getFullYear()} Μεσογειακή Πυροπροστασία
          </p>
          <p className="text-center text-sm h-[40px] flex items-center justify-center">
            <span className="mr-1">Created by</span>
            <a
              href="mailto:mimerkou@gmail.com"
              className="hover:text-red-500 transition-all duration-300"
            >
              Michalis Merkouris
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
