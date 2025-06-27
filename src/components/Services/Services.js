import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

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

const Services = () => {
  return (
    <div className="services-section">
      <div className="container">
        <h2>Услуги</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>{service.price}</span>
              <Link to={service.link} className="service-button-link">
                Рассчитать стоимость
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 