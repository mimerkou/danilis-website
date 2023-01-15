import React from 'react';
import ContactImage from '../assets/fire-hose.jpg';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center md:py-0 overflow-hidden"
    >
      <div className="max-w-[1240px] w-[80%] mx-auto grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-2">
        <div className="text-gray-600 h-auto">
          <h3>Επικοινωνήστε μαζί μας</h3>
        </div>

        <div className="overflow-hidden">
          <img
            src={ContactImage}
            alt="Fire extinguisher and fire hose"
            className="w-auto h-auto object-cover border mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
