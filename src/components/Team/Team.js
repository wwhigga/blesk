import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Имя', cleanings: 'Кол-во уборок' },
  { name: 'Имя', cleanings: 'Кол-во уборок' },
  { name: 'Имя', cleanings: 'Кол-во уборок' },
  { name: 'Имя', cleanings: 'Кол-во уборок' },
];

const Team = () => {
  return (
    <div className="team-section">
      <div className="container">
        <h2>НАШИ ИСПОЛНИТЕЛИ</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
              </div>
              <p className="team-name">{member.name}</p>
              <p className="team-cleanings">{member.cleanings}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 