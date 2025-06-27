import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-section" id="contact-form">
      <div className="container">
        <div className="contact-form-card">
          <h2>Рассчитать стоимость</h2>
          <p>Оставьте заявку и наш менеджер свяжется с вами</p>
          <form>
            <input type="tel" placeholder="Введите номер телефона" />
            <button type="submit">Получить СМС</button>
          </form>
          <div className="agreement">
            <input type="checkbox" id="agreement-checkbox" />
            <label htmlFor="agreement-checkbox">Принимаю <a href="/agreement">пользовательское соглашение</a></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 