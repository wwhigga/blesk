import React, { useState } from 'react';
import './About.css';

const About = ({ title, data }) => {
  const [activeTab, setActiveTab] = useState('kitchen');

  if (!data || !data.services) {
    return null;
  }

  const services = data.services;

  return (
    <div className="about-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="tabs">
          <button onClick={() => setActiveTab('kitchen')} className={activeTab === 'kitchen' ? 'active' : ''}>В кухне</button>
          <button onClick={() => setActiveTab('rooms')} className={activeTab === 'rooms' ? 'active' : ''}>В комнатах</button>
          <button onClick={() => setActiveTab('bathrooms')} className={activeTab === 'bathrooms' ? 'active' : ''}>В санузлах</button>
        </div>
        <div className="tab-content">
          <table>
            <thead>
              <tr>
                <th>Работы</th>
                <th>ВСЕ</th>
              </tr>
            </thead>
            <tbody>
              {services[activeTab] && services[activeTab].map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.included ? '✔' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About; 