import React from 'react';
import './VacanciesPage.css';
import ContactForm from '../components/ContactForm/ContactForm';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const VacanciesPage = () => {
  return (
    <AnimatedPage>
      <div className="vacancies-page">
        <div className="container">
          <h2 className="vacancies-title">Мы предлагаем:</h2>
          <div className="vacancies-offers-block">
            <div className="vacancies-offers-list">
              <ul>
                <li>— Ежедневные выплаты</li>
                <li>— Опыт не важен, мы вас обучим</li>
                <li>— Заработок от 70 до 100 тыс.</li>
                <li>— Гибкий график</li>
                <li>— Обеспечим формой и средствами</li>
                <li>— Много заказов</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vacancies-form-block">
          <h2 className="vacancies-form-title">ИЩЕМ ИСПОЛНИТЕЛЕЙ</h2>
          <p className="vacancies-form-subtitle">Оставьте заявку и наш менеджер свяжется с вами</p>
          <ContactForm />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default VacanciesPage;
