import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import ProductHighlights from './components/ProductHighlights';
import FeaturesGrid from './components/FeaturesGrid'; 
import Solution from './components/Solution';
import UseCases from './components/UseCases';
import Stats from './components/Stats';
import Team from './components/Team';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500/30 selection:text-white">
      <Header onOrderClick={() => setIsContactOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <ProductHighlights />
        <FeaturesGrid /> 
        <Solution />
        <UseCases />
        <Stats />
        <Team />
      </main>
      <Footer />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;