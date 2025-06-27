import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    // Переходим на страницу генеральной уборки с параметром для скролла к форме
    navigate('/general-cleaning?scrollTo=contact-form');
  };

  return (
    <div className="top-banner">
      <div className="container banner-content">
        <div className="banner-text">
          <p>ЗАКАЖИ УБОРКУ ПРЯМО СЕЙЧАС И ПОЛУЧИТЕ МОЙКУ ОКОН ВНУТРИ</p>
          <p className="free">БЕСПЛАТНО</p>
        </div>
        <div className="banner-action">
          <button onClick={handleOrderClick} className="order-button-banner">ЗАКАЗАТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner; 