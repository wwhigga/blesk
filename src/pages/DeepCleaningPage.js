import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import { cleaningData } from '../data/cleaningData';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const DeepCleaningPage = () => {
  const deepCleaning = cleaningData.deep;
  return (
    <AnimatedPage>
      <Hero 
        title="Уборка запущенных квартир"
        price="от 10000 р."
        total="Итого от 11000 р."
      />
      <About title={deepCleaning.title} data={deepCleaning} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default DeepCleaningPage; 