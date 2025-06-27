import React from 'react';
import './OurAdvantages.css';

const advantages = [
  {
    title: 'Проверенные исполнители',
    description: 'К нам пришли проверенные исполнители',
    icon: '✓'
  },
  {
    title: 'Контроль качества',
    description: 'Осматриваем квартиру как в программе «Ревизорро»',
    icon: '✓'
  },
  {
    title: 'Профессиональная химия и оборудование',
    description: 'Используем только, качественную продукцию',
    icon: '✓'
  },
  {
    title: 'Работаем по договору',
    description: 'Работа с заключением договора и в соответствии с регламентом',
    icon: '✓'
  }
];

const OurAdvantages = () => {
  return (
    <div className="our-advantages-section">
      <div className="container">
        <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages; 