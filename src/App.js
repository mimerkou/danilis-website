import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <div id="certifications" style={{ height: '2000px' }}>
        Certifications
      </div>
    </div>
  );
};

export default App;
