import React from 'react';
import './OurEmployees.css';

const employees = [
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👨'
  },
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👩'
  },
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👨'
  },
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👩'
  },
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👨'
  },
  {
    name: 'Имя',
    experience: 'Кол-во уборок',
    avatar: 'https://via.placeholder.com/150x150/333333/FFFFFF?text=👩'
  }
];

const OurEmployees = () => {
  return (
    <div className="our-employees-section">
      <div className="container">
        <h2>НАШИ ИСПОЛНИТЕЛИ</h2>
        <div className="employees-slider">
          <div className="employees-container">
            {employees.map((employee, index) => (
              <div key={index} className="employee-card">
                <div className="employee-avatar">
                  <img src={employee.avatar} alt={employee.name} />
                </div>
                <h3>{employee.name}</h3>
                <p>{employee.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEmployees; 