import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import ContactForm from '../components/ContactForm/ContactForm';
import { cleaningData } from '../data/cleaningData';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const HomePage = () => {
  const generalCleaning = cleaningData.general;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scrollTo');
    
    if (scrollTarget) {
      // Добавляем задержку для полной загрузки компонентов
      setTimeout(() => {
        let targetElement = null;
        
        if (scrollTarget === 'calculator') {
          targetElement = document.querySelector('#calculator');
        } else if (scrollTarget === 'contact-form') {
          targetElement = document.querySelector('#contact-form');
        }
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [searchParams]);

  return (
    <AnimatedPage>
      <Hero 
        title="Генеральная уборка квартир"
        price="от 7000 р."
        total="Итого от 8000 р."
      />
      <Services />
      <About title={generalCleaning.title} data={generalCleaning} />
      <ContactForm />
    </AnimatedPage>
  );
};

export default HomePage; 