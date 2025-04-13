import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <LoadingScreen />
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
