import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Генеральная уборка', description: 'Удаляем на всех поверхностях сложные загрязнения', price: 'от 7000 р.', link: '/general-cleaning' },
  { title: 'Уборка запущенных квартир', description: 'Комплексная уборка для очень грязных помещений', price: 'от 10000 р.', link: '/deep-cleaning' },
  { title: 'Поддерживающая уборка', description: 'Регулярная уборка для поддержания чистоты', price: 'от 3000 р.', link: '/maintenance-cleaning' },
  { title: 'Профессиональная уборка', description: 'Специализированные услуги с проф. оборудованием', price: 'от 9000 р.', link: '/professional-cleaning' },
  { title: 'Химчистка', description: 'Профессиональная химчистка мебели и ковров', price: 'от 5000 р.', link: '/dry-cleaning' },
  { title: 'Мойка окон', description: 'Качественная мойка окон с внутренней и внешней стороны', price: 'от 2000 р.', link: '/window-cleaning' },
];

const TestServices = () => {
  return (
    <div style={{ 
      padding: '50px 0', 
      backgroundColor: '#fff'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ 
          textAlign: 'left', 
          marginBottom: '40px', 
          fontSize: '36px',
          color: '#333'
        }}>
          УСЛУГИ
        </h2>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          overflowX: 'auto',
          flexWrap: 'wrap'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'left',
              minWidth: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              flex: '1'
            }}>
              <h3 style={{ 
                fontSize: '22px', 
                marginTop: '0',
                color: '#333'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                margin: '15px 0', 
                color: '#555',
                flexGrow: '1'
              }}>
                {service.description}
              </p>
              <span style={{
                display: 'block',
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#333'
              }}>
                {service.price}
              </span>
              <Link 
                to={service.link} 
                style={{
                  backgroundColor: '#ff9900',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  width: '100%',
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  marginTop: 'auto'
                }}
              >
                Рассчитать стоимость
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestServices; 