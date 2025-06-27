import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';

import ContactForm from '../components/ContactForm/ContactForm';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const ProfessionalCleaningMainPage = () => {
  return (
    <AnimatedPage>
      <Hero 
        title="Профессиональная уборка квартир в Москве"
        price="от 3000 р."
        total="Итого от 4000 р."
      />
      <Services />
      <div style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#333' }}>
            Почему выбирают нас?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>✓ Опыт более 5 лет</h3>
              <p>Мы знаем все тонкости профессиональной уборки</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>✓ Качественные средства</h3>
              <p>Используем только проверенные и безопасные средства</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>✓ Гарантия результата</h3>
              <p>Гарантируем качество выполненных работ</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </AnimatedPage>
  );
};

export default ProfessionalCleaningMainPage; 