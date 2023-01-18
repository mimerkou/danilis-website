import React from 'react';
import AboutImage from '../assets/pyrosvestires-resized.jpg';
import Button from './UI/Button';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-80px)] overflow-hidden flex justify-center items-center"
    >
      <div className="container mx-auto max-w-[1240px] py-16 lg:pt-24 mb-12">
        <div className="flex flex-col lg:flex-row gap-8 mx-8">
          <div
            className="order-2 lg:order-1 flex items-center justify-center lg:w-2/4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={AboutImage}
              alt="About us"
              className="object-cover h-full w-[580px] mx-4 sm:w-[480px] sm:mx-auto md:mx-auto lg:mx-0 border border-[#a4190f]"
            />
          </div>

          <div
            className="order-1 flex flex-col items-center lg:items-start lg:w-2/4"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="flex flex-col">
              <h3 className="text-[#a4190f] text-2xl font-medium lg:font-extrabold text-center mb-4">
                Η Εταιρεία μας
              </h3>
              <div className="w-[100px] h-[1px] mx-auto bg-[#a4190f] mb-12"></div>
              <p className="mb-4 text-gray-600 leading-7 text-center lg:text-left">
                Η Μεσογειακή Πυροπροστασία ιδρύθηκε το 1983 από τον κ. Μιχάλη
                Δανίλη και δραστηριοποιείται στην εμπορία, επανέλεγχο, αναγόμωση
                και υδραυλική δοκιμή πυροσβεστήρων, καθώς και στην εγκατάσταση
                συστημάτων πυρασφάλειας. Σήμερα αποτελεί μία από τις πιο
                ταχύτατα αναπτυσσόμενες και πλέον αξιόπιστες ελληνικές
                επιχειρήσεις στον συγκεκριμένο κλάδο.
              </p>
              <p className="mb-8 text-gray-600 leading-7 text-center lg:text-left">
                Πλέον η Μεσογειακή Πυροπροστασία δραστηριοποιείται και στον
                τομέα της προμήθειας και εγκατάστασης μόνιμων συστημάτων
                πυρανίχνευσης-πυρόσβεσης, καθώς επίσης και στον ετήσιο έλεγχο
                και συντήρηση των παραπάνω συστημάτων. Η εταιρεία μας μάλιστα
                διαθέτει όλα τα συστήματα και υλικά πυρόσβεσης.
              </p>
            </div>
            <Button path="services" darkBg={false}>
              Οι Υπηρεσίες μας
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
