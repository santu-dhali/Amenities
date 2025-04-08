import React, { useState, useEffect } from 'react';
import amenitiesData from './AmenitiesData';
import './Amenities.css';

const Amenities = () => {
  const [activeTab, setActiveTab] = useState('PATIO');
  const [showContent, setShowContent] = useState(true);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    setShowContent(false);
    setTimeout(() => {
      setActiveTab(tab);
      setShowContent(true);
    }, 150);
  };

  const { title, description, image, items } = amenitiesData[activeTab];

  return (
    <div className="amenities-container">
      <h3 className='heading'>3 Tier Amenities & Facilities</h3>

      <div className="tabs-container">
        {['PATIO', 'AZURA', 'PANORAMA'].map((tab) => (
          <div 
            key={tab} 
            className={`tab-logo ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            <img className="img" src={amenitiesData[tab].logo} alt={tab} />
          </div>
        ))}
      </div>

      <div className={`tab-content ${showContent ? 'fade-in' : 'fade-out'}`}>
        <div className="content-layout">
          <div className="left-image">
            <img src={image} alt={`${activeTab} View`} />
          </div>
          <div className="right-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="icon-grid">
              {items.map(({ icon, label }, index) => (
                <div className="icon-item" key={index}>
                  <img src={icon} alt={label} />
                  <h5>{label}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;