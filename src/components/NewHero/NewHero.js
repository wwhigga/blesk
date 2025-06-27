import React from 'react';
import './NewHero.css';

const NewHero = () => {
  return (
    <div className="new-hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Вам нужна <span className="highlight">профессиональная уборка</span> помещения прямо сейчас<span className="question">?</span>
          </h1>
          <p className="hero-subtitle">
            Мы оказываем широкий спектр клининговых услуг на высоком уровне с 2014 года
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewHero; 