import React from 'react';
import ContactImage from '../assets/fire-hose.jpg';
import { FiPhone, FiSmartphone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="container mx-auto max-w-[1240px] py-16 lg:pt-24 mb-12">
        <div className="flex flex-col lg:flex-row gap-8 mx-8">
          <div className="order-2 lg:order-1 flex items-center justify-center lg:w-2/4">
            <img
              src={ContactImage}
              alt="Fire extinguisher and fire hose next to a door"
              className="object-cover h-full w-[580px] mx-4 sm:w-[480px] sm:mx-auto md:mx-auto lg:mx-0 border border-[#a4190f]"
            />
          </div>

          <div className="order-1 flex flex-col items-center lg:items-start lg:w-2/4">
            <div className="flex flex-col">
              <h3 className="text-[#a4190f] text-2xl font-medium lg:font-extrabold text-center mb-4">
                Επικοινωνήστε μαζί μας
              </h3>
              <div className="w-[100px] h-[1px] mx-auto bg-[#a4190f] mb-12"></div>
              <p className="mb-8 text-gray-600 leading-7 text-center lg:text-left">
                Η Μεσογειακή Πυροπροστασία βρίσκεται στο 1,5 χλμ Λεωφόρου
                Κορωπίου-Μαρκοπούλου στο Κορωπί. Μπορείτε να περάσετε από τις
                εγκαταστάσεις μας για να μας συμβουλευτείτε για τις λύσεις
                πυρασφάλειας που σας ενδιαφέρουν ή να επικοινωνήσετε μαζί μας
                στα παρακάτω τηλέφωνα ή μέσω email στο sales@danilis.gr
              </p>
              <div className="flex items-center justify-start text-gray-600 mb-4">
                <FiPhone size={30} className="mr-4" /> Σταθερό/fax: 210 66 24
                687
              </div>
              <div className="flex items-center justify-start text-gray-600 mb-4">
                <FiSmartphone size={30} className="mr-4" /> Κινητό: 6944 357 297
              </div>
              <div className="flex items-center justify-start text-gray-600 mb-4">
                <RxEnvelopeClosed size={30} className="mr-4" />
                <a
                  href="mailto:sales@danilis.gr"
                  className="transition-all duration-300 hover:text-[#a4190f]"
                >
                  sales@danilis.gr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
