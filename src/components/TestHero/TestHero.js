import React from 'react';
import backgroundImage from '../../assets/background.png';

const TestHero = () => {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(135deg, rgba(255, 153, 0, 0.8), rgba(255, 153, 0, 0.9)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px', 
      display: 'flex', 
      alignItems: 'center', 
      color: 'white',
      padding: '60px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '20px', 
            fontWeight: '700',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Вам нужна <span style={{ color: '#fff3cd' }}>профессиональная уборка</span> помещения прямо сейчас<span style={{ fontSize: '4rem' }}>?</span>
          </h1>
          <p style={{ 
            fontSize: '1.4rem', 
            opacity: 0.95,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            maxWidth: '600px'
          }}>
            Мы оказываем широкий спектр клининговых услуг на высоком уровне с 2014 года
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestHero; 