import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div id="about" style={{ height: '2000px' }}></div>
    </div>
  );
};

export default App;
