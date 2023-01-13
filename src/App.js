import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div id="services" style={{ height: '2000px' }}>
        Products
      </div>
    </div>
  );
};

export default App;
