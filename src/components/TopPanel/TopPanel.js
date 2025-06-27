import React from 'react';
import topPanelImage from '../../assets/top_panel.png';
import './TopPanel.css';

const TopPanel = () => {
  return (
    <div className="top-panel">
      <img src={topPanelImage} alt="Top Panel" />
    </div>
  );
};

export default TopPanel; 