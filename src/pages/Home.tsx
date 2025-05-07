import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import CTA from '../components/sections/CTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
{/*         <Testimonials /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
