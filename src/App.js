import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Customers from './components/Customers';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Customers />
      <div id="contact" style={{ height: '2000px' }}>
        Contact
      </div>
    </div>
  );
};

export default App;
