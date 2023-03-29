import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import ImageDivider from './ImageDivider';
import Button from './UI/Button';
import 'aos/dist/aos.css';

const Services = () => {
  return (
    <section
      id="services"
      className="text-white min-h-[calc(100vh-80px)] bg-black opacity-95"
    >
      <div className="container mx-auto max-w-[1240px] py-16 lg:pt-24">
        <div className="flex flex-col items-center text-center mx-8">
          <h3
            className="text-white text-2xl font-medium lg:font-extrabold text-center mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Υπηρεσίες και Προϊόντα
          </h3>

          <div
            className="w-[100px] h-[1px] mx-auto bg-white mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          ></div>

          <p
            className="mb-12 text-white leading-7 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Εδώ θα βρείτε αναλυτικά όλα τα προϊόντα της εταιρείας μας καθώς και
            τις παρεχόμενες υπηρεσίες. Οι υπηρεσίες μας είναι εμπορία,
            επανέλεγχος και αναγόμωση πυροσβεστήρων, καθώς και εγκατάσταση
            συστημάτων πυρασφάλειας. Θα θέλαμε να σας ενημερώσουμε ότι γίνονται
            τακτικοί έλεγχοι σε όλα μας τα είδη προκειμένου να διασφαλιστεί η
            άρτια λειτουργία τους.
          </p>

          {/* text-[#a4190f] */}
          <h4
            className="mb-4 text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Πυροσβεστήρες και Εξαρτήματα
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div
              className="p-4 hover:bg-[#0d0d0d] transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <h5 className="text-lg underline mb-2">Φορητοί Πυροσβεστήρες</h5>
              <ul>
                <li className="flex items-stacenterrt justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  Ξηράς σκόνης ABC
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  Αφρού AFFF
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  CO
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" size={20} />
                  Ξηράς σκόνης υψηλής κατασβεστικής ικανότητας
                </li>
              </ul>
            </div>

            <div
              className="p-4 hover:bg-[#0d0d0d] transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="750"
              data-aos-once="true"
            >
              <h5 className="text-lg underline mb-2">
                Πυροσβεστήρες Τοπικής Εφαρμογής
              </h5>
              <ul>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  Ξηράς σκόνης ABC
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" size={20} />
                  ABC με αυτόματο κλείστρο και θέση για πυροκροτητή
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" size={25} />
                  Ξηράς σκόνης PURPLE K80% υψηλής κατασβεστικής ικανότητας
                </li>
              </ul>
            </div>

            <div
              className="p-4 hover:bg-[#0d0d0d] transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <h5 className="text-lg underline mb-2">
                Τροχήλατοι Πυροσβεστήρες
              </h5>
              <ul>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  Ξηράς σκόνης ABC
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  Αφρού AFFF
                </li>
                <li className="flex items-center justify-center mb-1">
                  <AiOutlineCheck className="mr-2" />
                  CO
                </li>
              </ul>
            </div>
          </div>
          <p
            className="mb-16 leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Η Μεσογειακή Πυροπροστασία διαθέτει όλα τα παραπάνω προϊόντα, καθώς
            και πυροσβεστήρες οροφής και ειδικούς τύπους πυροσβεστήρων.
          </p>

          <h4
            className="mb-4 text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Sprinkler - Μόνιμα Συστήματα
          </h4>
          <p
            className="mb-16 leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Τα Sprinkler σε προκαθορισμένη θερμοκρασία αφήνουν την αμπούλα τους
            να λιώσει ή να σπάσει, επιτρέποντας έτσι στο κατασβεστικό υγρό να
            βγει από την οπή του. Η μορφή του κατασβεστικού υγρού είναι σαν
            σπρέυ και εξαρτάται από την κατασκευή του Sprinkler. Κάθε αυτόματο
            Sprinkler λειτουργεί αυτόνομα στην φωτιά και δεν ενεργοποιεί όλο το
            σύστημα πυρόσβεσης. Η Μεσογειακή Πυροπροστασία αναλαμβάνει εξ'
            ολοκλήρου την μελέτη και την τοποθέτηση ενός τέτοιου συστήματος.
          </p>

          <h4
            className="mb-4 text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Πυροσβεστικές Φωλιές - Εξοπλισμός Ασφαλείας
          </h4>
          <p
            className="mb-4 leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Η εταιρεία μας διαθέτει μια πληθώρα από πυροσβεστικές φωλιές
            διαφόρων τύπων, τόσο κενές όσο και πλήρεις. Επίσης, διαθέτουμε μια
            μεγάλη γκάμα εξοπλισμού, όπως σήματα ασφαλείας, πυρίμαχες πόρτες,
            εξοπλισμό Α' Βοηθειών, κλπ.
          </p>
          <p
            className="mb-12 leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Η μελέτη και η εγκατάσταση οποιουδήποτε συστήματος πυρασφάλειας
            γίνεται από την Μεσογειακή Πυροπροστασία. Εσείς μπορείτε απλά να
            επικοινωνήσετε μαζί μας ή να περάσετε από τις εγκαταστάσεις μας για
            να βρούμε μαζί την λύση που σας ταιριάζει.
          </p>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Button path="contact" darkBg={true}>
              Επικοινωνία
            </Button>
          </div>
        </div>
      </div>

      <ImageDivider />
    </section>
  );
};

export default Services;
