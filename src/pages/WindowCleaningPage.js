import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const windowCleaningData = {
  title: 'Что входит в мойку окон?',
  services: {
    kitchen: [
      { name: 'Мойка окон с двух сторон', included: true },
      { name: 'Мойка подоконников и откосов', included: true },
    ],
    rooms: [
      { name: 'Мойка оконных рам', included: true },
      { name: 'Удаление пыли и грязи с фурнитуры', included: true },
    ],
    bathrooms: [
      { name: 'Мойка стеклянных перегородок', included: true },
      { name: 'Обработка парогенератором', included: true },
    ]
  }
};

const WindowCleaningPage = () => {
  return (
    <AnimatedPage>
      <Hero 
        title="Мойка окон"
        price="от 2000 р."
        total="Итого от 2500 р."
      />
      <About title={windowCleaningData.title} data={windowCleaningData} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default WindowCleaningPage;
