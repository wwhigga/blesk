import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import { cleaningData } from '../data/cleaningData';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const MaintenanceCleaningPage = () => {
  const maintenanceCleaning = cleaningData.maintenance;
  return (
    <AnimatedPage>
      <Hero 
        title="Поддерживающая уборка"
        price="от 3000 р."
        total="Итого от 3500 р."
      />
      <About title={maintenanceCleaning.title} data={maintenanceCleaning} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default MaintenanceCleaningPage; 