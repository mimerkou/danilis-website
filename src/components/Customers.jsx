import React from 'react';
import Slider from './Slider';
import { AiOutlineCheck } from 'react-icons/ai';
import { brandsListOne, brandsListTwo } from '../data';

const Customers = () => {
  return (
    <section
      id="customers"
      className="text-white min-h-[calc(100vh-80px)] bg-black opacity-95"
    >
      <div className="container mx-auto max-w-[1240px] py-16 lg:pt-24">
        <div className="flex flex-col items-center text-center mx-8">
          <h3 className="text-white text-2xl font-medium lg:font-extrabold text-center mb-4">
            Οι Πελάτες μας
          </h3>

          <div className="w-[100px] h-[1px] mx-auto bg-white mb-12"></div>

          <p className="mb-4 text-white leading-7 text-center">
            Για περισσότερα από 40 χρόνια η Μεσογειακή Πυροπροστασία χτίζει
            σχέσεις εμπιστοσύνης και σεβασμού με τους πελάτες της, οι οποίοι
            εξακολουθούν να στηρίζονται στις αξιόπιστες υπηρεσίες της εταιρείας
            μας για την παροχή λύσεων πυρασφάλειας.
          </p>

          <p className="mb-12 text-white leading-7 text-center">
            Παρακάτω μπορείτε να δείτε κάποια σχόλια ικανοποιημένων πελατών μας,
            καθώς και ενδεικτικό δείγμα του πελατολογίου μας.
          </p>
        </div>

        <Slider />

        <h5 className="mt-12 mb-4 text-center text-lg underline">
          Ενδεικτικό Πελατολόγιο
        </h5>
        <div className="container mx-auto px-12 max-w-[500px] lg:max-w-[750px] grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center">
            {brandsListOne.map((item) => (
              <ul key={item.id}>
                <li className="flex items-center justify-center m-2">
                  <AiOutlineCheck className="mr-2" /> {item.name}
                </li>
              </ul>
            ))}
          </div>

          <div className="text-center">
            {brandsListTwo.map((item) => (
              <ul key={item.id}>
                <li className="flex items-center justify-center m-2">
                  <AiOutlineCheck className="mr-2" /> {item.name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
