import React from 'react';

const Footer = () => {
  return (
    <section className="text-white min-h-[35vh] bg-black opacity-95">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto py-20 px-8">
        <div className="text-center">
          <h1 className="text-lg uppercase">Μεσογειακη Πυροπροστασια</h1>
          <h2 className="text-gray-300 mb-2">
            Λύσεις Πυρασφάλειας <br /> στα Μεσόγεια και την Αττική
          </h2>
          <p>210 66 24 687</p>
          <p>6944 357 297</p>
          <p>sales@danilis.gr</p>
        </div>

        <div className="text-center">
          <h5 className="text-lg uppercase">Ωρες Λειτουργιας</h5>
          <p>Δευ-Παρ: 08.00 - 17.00</p>
          <p>Σάββατο: 08.00 - 13.00</p>
        </div>

        <div className="text-center">
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
