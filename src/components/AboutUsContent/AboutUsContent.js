import React from 'react';
import './AboutUsContent.css';
import aboutImage from '../../assets/About.png';

const AboutUsContent = () => {
  return (
    <div className="about-us-content-section">
      <div className="container">
        <h2>О НАС</h2>
        <div className="about-us-image-container">
          <img src={aboutImage} alt="Our Team" />
        </div>
        <div className="about-us-text-block">
          <ul className="about-us-list">
            <li>«BLESK» - сервис заказа уборки, основными направлениями деятельности которой являются профессиональная уборка квартир и офисов, химическая чистка ковров, ковровых покрытий, мягкой мебели, матрасов, мойка окон и другие работы.</li>
            <li>Все работы выполняются в офисе и на дому с применением ведущих технологий.</li>
            <li>На протяжении многих лет работы сформировался удобный и эффективный сервис, позволяющий Вам, дорогие наши клиенты, полностью снять со своих плеч заботы по благоустройству квартири и повышению комфорта проживания.</li>
          </ul>
          <div className="about-us-contacts">
            <h4>Контакты</h4>
            <p>Ежедневно<br/>с 9:00 до 19:00</p>
            <p>+7 (499) 999-99-99</p>
            <p>г. Москва, ул. Пушкина, д. 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
