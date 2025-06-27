import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const dryCleaningData = {
  title: 'Что входит в химчистку?',
  services: {
    kitchen: [
      { name: 'Химчистка кухонной мебели', included: true },
      { name: 'Удаление пятен с текстиля', included: true },
    ],
    rooms: [
      { name: 'Химчистка ковров и паласов', included: true },
      { name: 'Чистка мягкой мебели', included: true },
    ],
    bathrooms: [
      { name: 'Обработка текстильных штор', included: true },
      { name: 'Удаление запахов', included: true },
    ]
  }
};

const DryCleaningPage = () => {
  return (
    <AnimatedPage>
      <Hero 
        title="Химчистка"
        price="от 2000 р."
        total="Итого от 2500 р."
      />
      <About title={dryCleaningData.title} data={dryCleaningData} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default DryCleaningPage;
