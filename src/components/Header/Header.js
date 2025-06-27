import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Blesk logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title">BLESK</span>
                <span className="logo-subtitle">убираемся и радуем глаз</span>
              </div>
            </Link>
          </div>
          <nav className="nav">
            <div className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="nav-link dropdown-toggle">Уборка ▾</button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/general-cleaning" className="dropdown-item">Генеральная уборка</Link>
                  <Link to="/deep-cleaning" className="dropdown-item">Уборка запущенных квартир</Link>
                  <Link to="/maintenance-cleaning" className="dropdown-item">Поддерживающая уборка</Link>
                  <Link to="/professional-cleaning" className="dropdown-item">Профессиональная уборка</Link>
                </div>
              )}
            </div>
            <Link to="/dry-cleaning" className="nav-link">Химчистка</Link>
            <Link to="/window-cleaning" className="nav-link">Мойка окон</Link>
            <Link to="/about-us" className="nav-link">О нас</Link>
            <Link to="/vacancies" className="nav-link">Вакансии</Link>
          </nav>
          <div className="header-contact">
            <a href="tel:+74999999999">+7 (499) 999-99-99</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 