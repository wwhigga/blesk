import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Blesk logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title">BLESK</span>
                <span className="logo-subtitle">убираемся и радуем глаз</span>
              </div>
            </Link>
          </div>
          <div className="footer-links">
            <h4>Услуги</h4>
            <Link to="/general-cleaning">Генеральная уборка</Link>
            <Link to="/deep-cleaning">Уборка запущенных квартир</Link>
            <Link to="/maintenance-cleaning">Поддерживающая уборка</Link>
            <Link to="/professional-cleaning">Профессиональная уборка</Link>
            <Link to="/dry-cleaning">Химчистка</Link>
            <Link to="/window-cleaning">Мойка окон</Link>
            <span className="disabled-link">Дезинфекция</span>
          </div>
          <div className="footer-contacts">
            <h4>Контакты</h4>
            <p>Ежедневно с 9:00 до 20:00</p>
            <p>+7 (495) 999 89 89</p>
            <p>г. Москва, ул. Пушкина, д. 1</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Обращаем ваше внимание на то, что данный интернет-сайт, а также вся информация об услугах и ценах, предоставленная на нём, носит исключительно информационный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
          <p>Создал Георгий Белов</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;