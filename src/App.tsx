import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ContactInfo } from './types';

function App() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    ceo1: {
      name: 'ESRAA EL-TAKY',
      phone: '+20 100 543 4157'
    },
    ceo2: {
      name: 'ESLAM EL-ASYOTE',
      phone: '+20 100 543 5177'
    },
    social: {
      instagram: '2emprint',
      facebook: '2em print',
      tiktok: '2emprint'
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleUpdateContactInfo = (newInfo: ContactInfo) => {
    setContactInfo(newInfo);
  };

  return (
    <div className="font-cairo">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact 
          contactInfo={contactInfo}
          onUpdateContactInfo={handleUpdateContactInfo}
        />
      </main>
      <Footer contactInfo={contactInfo} />
    </div>
  );
}

export default App