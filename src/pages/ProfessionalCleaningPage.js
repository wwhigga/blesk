import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import { cleaningData } from '../data/cleaningData';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const ProfessionalCleaningPage = () => {
  const professionalCleaning = cleaningData.professional;
  return (
    <AnimatedPage>
      <Hero 
        title="Профессиональная уборка"
        price="от 9000 р."
        total="Итого от 10000 р."
      />
      <About title={professionalCleaning.title} data={professionalCleaning} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default ProfessionalCleaningPage; 