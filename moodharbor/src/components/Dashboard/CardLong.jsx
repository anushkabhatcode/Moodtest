import React from 'react';


const CardLong = ({ icon, itemName, description }) => {
  return (
    
      <div className="activity-card">  
        <div className="card-content">
            <div className="mood-name">
              {icon && <span className="icon">{icon}</span>}
              {itemName}
            </div>
          <div className="description">{description}</div>
        </div>
    </div>
  );
};

export default CardLong;
