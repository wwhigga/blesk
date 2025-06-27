import React, { useState } from 'react';
import './Hero.css';

const Hero = ({ title, price, total }) => {
  const [area, setArea] = useState(60);
  const [calculatedPrice, setCalculatedPrice] = useState(8000);

  const calculatePrice = (inputArea) => {
    const basePrice = parseInt(price.replace(/[^0-9]/g, ''));
    const pricePerSqm = basePrice / 60; // базовая цена за 60 кв.м
    return Math.round(inputArea * pricePerSqm + 1000); // +1000 за дополнительные услуги
  };

  const handleAreaChange = (e) => {
    const newArea = parseInt(e.target.value) || 60;
    setArea(newArea);
    setCalculatedPrice(calculatePrice(newArea));
  };

  const scrollToCalculator = () => {
    const calculatorElement = document.querySelector('.calculator-form');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero" id="calculator">
      <div className="container">
        <h1>{title}</h1>
        <p className="price">{price}</p>
        <div className="calculator-form">
          <div className="calculator-row">
            <span>Введите площадь:</span>
            <input 
              type="number" 
              value={area} 
              onChange={handleAreaChange}
              min="20"
              max="500"
            />
            <span>м²</span>
          </div>
          <button className="service-button" onClick={scrollToCalculator}>
            Рассчитать {title.toLowerCase()}
          </button>
        </div>
        <div className="total">
          Итого от {calculatedPrice} р.
        </div>
      </div>
    </div>
  );
};

export default Hero; 