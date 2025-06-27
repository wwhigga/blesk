import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewServices.css';

const services = [
  {
    title: 'Генеральная уборка',
    description: 'Удаляем на всех поверхностях сложные загрязнения',
    price: 'от 7000 р.',
    link: '/general-cleaning'
  },
  {
    title: 'Уборка запущенных квартир',
    description: 'Комплексная уборка для очень грязных помещений',
    price: 'от 10000 р.',
    link: '/deep-cleaning'
  },
  {
    title: 'Поддерживающая уборка',
    description: 'Регулярная уборка для поддержания чистоты',
    price: 'от 3000 р.',
    link: '/maintenance-cleaning'
  },
  {
    title: 'Профессиональная уборка',
    description: 'Специализированные услуги с проф. оборудованием',
    price: 'от 9000 р.',
    link: '/professional-cleaning'
  },
  {
    title: 'Химчистка',
    description: 'Профессиональная химчистка мебели и ковров',
    price: 'от 5000 р.',
    link: '/dry-cleaning'
  },
  {
    title: 'Мойка окон',
    description: 'Качественная мойка окон с внутренней и внешней стороны',
    price: 'от 2000 р.',
    link: '/window-cleaning'
  },
];

const NewServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentServices = () => {
    const start = currentSlide * itemsPerSlide;
    return services.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="new-services-section">
      <div className="container">
        <h2>УСЛУГИ</h2>
        <div className="services-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            &#8249;
          </button>
          <div className="services-container">
            {getCurrentServices().map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-price">{service.price}</span>
                <Link to={service.link} className="service-button-link">
                  Рассчитать стоимость
                </Link>
              </div>
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
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

export default NewServices; 