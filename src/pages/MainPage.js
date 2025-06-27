import React from 'react';
import TestHero from '../components/TestHero/TestHero';
import TestServices from '../components/TestServices/TestServices';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import jobsImage from '../assets/jobs.png';
import isp1Image from '../assets/isp1.jpg';
import isp2Image from '../assets/isp2.png';
import isp3Image from '../assets/isp3.jpg';

const MainPage = () => {
  const employees = [
    { name: 'Дуэйн Джонсон', experience: 'Кол-во уборок: 1500+', image: isp1Image },
    { name: 'Филипп Киркоров', experience: 'Кол-во уборок: 1900+', image: isp2Image },
    { name: 'Тина Кароль', experience: 'Кол-во уборок: 1400+', image: isp3Image }
  ];

  return (
    <AnimatedPage>
      <TestHero />
      <TestServices />
      
      {/* Наши работы */}
      <div style={{ 
        padding: '50px 0', 
        backgroundColor: '#f9f9f9'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            marginBottom: '40px', 
            color: '#333',
            textAlign: 'center'
          }}>
            НАШИ РАБОТЫ
          </h2>
          <div style={{ 
            textAlign: 'center'
          }}>
            <img 
              src={jobsImage} 
              alt="Наши работы до и после" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
        </div>
      </div>

      {/* Наши преимущества */}
      <div style={{ 
        padding: '50px 0', 
        backgroundColor: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            marginBottom: '40px', 
            color: '#333',
            textAlign: 'center'
          }}>
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              minWidth: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              flex: '1'
            }}>
              <h3 style={{ fontSize: '22px', marginTop: '0', color: '#333' }}>Проверенные исполнители</h3>
              <p style={{ margin: '15px 0', color: '#555' }}>К нам пришли проверенные исполнители</p>
            </div>
            <div style={{ 
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              minWidth: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              flex: '1'
            }}>
              <h3 style={{ fontSize: '22px', marginTop: '0', color: '#333' }}>Контроль качества</h3>  
              <p style={{ margin: '15px 0', color: '#555' }}>Осматриваем квартиру как в программе «Ревизорро»</p>
            </div>
            <div style={{ 
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              minWidth: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              flex: '1'
            }}>
              <h3 style={{ fontSize: '22px', marginTop: '0', color: '#333' }}>Профессиональная химия</h3>
              <p style={{ margin: '15px 0', color: '#555' }}>Используем только качественную продукцию</p>
            </div>
            <div style={{ 
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
              minWidth: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              flex: '1'
            }}>
              <h3 style={{ fontSize: '22px', marginTop: '0', color: '#333' }}>Работаем по договору</h3>
              <p style={{ margin: '15px 0', color: '#555' }}>Работа с заключением договора и в соответствии с регламентом</p>
            </div>
          </div>
        </div>
      </div>

      {/* Наши исполнители */}
      <div style={{ 
        padding: '50px 0', 
        backgroundColor: '#f9f9f9'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            marginBottom: '40px', 
            color: '#333',
            textAlign: 'center'
          }}>
            НАШИ ИСПОЛНИТЕЛИ
          </h2>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            {employees.map((employee, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                minWidth: '280px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                flex: '1'
              }}>
                <div style={{ 
                  width: '100px', 
                  height: '100px', 
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #ff9900'
                }}>
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
                <h3 style={{ 
                  fontSize: '22px', 
                  marginTop: '0', 
                  marginBottom: '15px',
                  color: '#333' 
                }}>
                  {employee.name}
                </h3>
                <p style={{ 
                  margin: '15px 0', 
                  color: '#555' 
                }}>
                  {employee.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default MainPage; 