import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/Problems'; // Note: Renaming file content but keeping import simple for this xml context, effectively replacing 'Problems'
import Solution from './components/Solution';
import UseCases from './components/UseCases';
import Stats from './components/Stats';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        {/* Replaces the negative 'Problems' section with positive 'FeaturesGrid' */}
        <FeaturesGrid /> 
        <Solution />
        <UseCases />
        <Stats />
        <Dashboard />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;