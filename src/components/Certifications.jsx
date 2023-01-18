import React from 'react';
import 'aos/dist/aos.css';

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-[calc(100vh-80px)] bg-white flex justify-center items-center"
    >
      <div className="container mx-auto max-w-[1240px] py-16 lg:pt-24">
        <div className="flex flex-col items-center text-center mx-8">
          <h3
            className="text-[#a4190f] text-2xl font-medium lg:font-extrabold text-center mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Πιστοποιήσεις
          </h3>

          <div
            className="w-[100px] h-[1px] mx-auto bg-[#a4190f] mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          ></div>

          <p
            className="mb-4 text-gray-600 leading-7 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Με απόφαση του Υπουργείου Βιομηχανίας το 1998, στην εταιρεία μας
            χορηγείται Άδεια Εγκατάστασης και Λειτουργίας Εργαστηρίου αναγόμωσης
            πυροσβεστήρων υψηλής και χαμηλής πίεσης. Το Υπουργείο Εμπορικής
            Ναυτιλίας, το έτος 2000, κάνει αποδεκτά τα Πιστοποιητικά Έκδοσης,
            Επιθεώρησης και Αναγόμωσης πυροσβεστήρων πλοίων. Η ανάπτυξη της
            Μεσογειακής Πυροπροστασίας είναι γεγονός.
          </p>

          <p
            className="mb-4 text-gray-600 leading-7 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Η ΕΒΕΤΑΜ πιστοποιεί την εταιρεία και από το 2001 λειτουργεί ως
            πρότυπο κέντρο επανελέγχου χαλύβδινων φιαλών με ραφή. Οι
            πιστοποιήσεις δεν σταματούν εδώ. Το 2005 και πάλι η ΕΒΕΤΑΜ χορηγεί
            πιστοποιητικό για τις εργασίες Ελέγχου, Συντήρησης και Αναγόμωσης
            Πυροσβεστήρων.
          </p>

          <p
            className="mb-4 text-gray-600 leading-7 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-once="true"
          >
            Η ΕΒΕΤΑΜ χορηγεί στον κ. Μιχάλη Δανίλη το πιστοποιητικό επάρκειας
            αρμοδίου ατόμου και πιστοποιεί την Μεσογειακή Πυροπροστασία για την
            συμμόρφωσή της ως προς την ποιότητα των παρεχόμενων προϊόντων και
            υπηρεσιών. Η συμμόρφωση της εταιρείας ως προς την ποιότητα έχει να
            κάνει με την εμπορία πυροσβεστήρων και ειδών πυρασφάλειας και
            πυροπροστασίας, τον περιοδικό έλεγχο, τη συντήρηση και αναγόμωση
            πυροσβεστήρων.
          </p>

          <p
            className="mb-4 text-gray-600 leading-7 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-once="true"
          >
            Η πιστοποίηση του 2005 κατά ISO 9001:2000 είναι το επιστέγασμα των
            προσπαθειών μας για συνεχή πρόοδο, ανάπτυξη και παροχή ποιοτικών
            υπηρεσιών, ενώ από το 2006 επενδύουμε στην πλήρη μηχανογράφηση όλων
            των διεργασιών του προτύπου ISO 9001:2000.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
