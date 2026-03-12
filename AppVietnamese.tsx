import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductHighlights from './components/ProductHighlights';
import Services from './components/Services';
import Methodology from './components/Methodology';
import FeaturesGrid from './components/FeaturesGrid';
import Solution from './components/Solution';
import UseCases from './components/UseCases';
import Stats from './components/Stats';
import Team from './components/Team';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const AppVietnamese: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const locale = 'vi';

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500/30 selection:text-white">
      <Header locale={locale} onOrderClick={() => setIsContactOpen(true)} />
      <main>
        <Hero locale={locale} />
        <ProductHighlights locale={locale} />
        <Services locale={locale} />
        <Methodology locale={locale} />
        <FeaturesGrid locale={locale} />
        <Solution locale={locale} />
        <UseCases locale={locale} />
        <Stats locale={locale} />
        <Team locale={locale} />
      </main>
      <Footer locale={locale} />
      <ContactForm
        locale={locale}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default AppVietnamese;
