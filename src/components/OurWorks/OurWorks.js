import React, { useState } from 'react';
import './OurWorks.css';

// Заглушки для изображений - в реальном проекте здесь будут настоящие фото
const workImages = [
  {
    before: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=До+уборки',
    after: 'https://via.placeholder.com/300x200/32CD32/FFFFFF?text=После+уборки',
    title: 'Уборка кухни'
  },
  {
    before: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=До+уборки',
    after: 'https://via.placeholder.com/300x200/32CD32/FFFFFF?text=После+уборки',
    title: 'Уборка ванной'
  },
  {
    before: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=До+уборки',
    after: 'https://via.placeholder.com/300x200/32CD32/FFFFFF?text=После+уборки',
    title: 'Уборка квартиры'
  }
];

const OurWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workImages.length) % workImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="our-works-section">
      <div className="container">
        <h2>НАШИ РАБОТЫ</h2>
        <div className="works-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            &#8249;
          </button>
          <div className="works-container">
            <div className="work-images">
              <div className="before-after-container">
                <div className="image-box">
                  <img 
                    src={workImages[currentSlide].before} 
                    alt="До уборки" 
                    className="work-image"
                  />
                  <span className="image-label">ДО</span>
                </div>
                <div className="image-box">
                  <img 
                    src={workImages[currentSlide].after} 
                    alt="После уборки" 
                    className="work-image"
                  />
                  <span className="image-label">ПОСЛЕ</span>
                </div>
              </div>
            </div>
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        <div className="slider-dots">
          {workImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks; 