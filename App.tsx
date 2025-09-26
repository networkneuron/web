import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';
import ScrollToTop from './components/ScrollToTop';

const Home: React.FC = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <BlogSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#0a0a0a] min-h-screen text-gray-200 overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] -z-1"></div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;