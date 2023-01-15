import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
