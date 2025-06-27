import React, { useState } from 'react';
import './RequestForm.css';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки заявки
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="request-form-section">
      <div className="container">
        <h2>Оставить заявку</h2>
        <div className="request-form-container">
          <div className="request-form-content">
            <p>Заполните форму ниже, и мы свяжемся с вами для уточнения деталей заказа</p>
            <form onSubmit={handleSubmit} className="request-form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о ваших потребностях в уборке"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="request-form-button">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm; 