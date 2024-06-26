import React from 'react';
import { Link } from 'react-router-dom';


const CardSmall = ({ icon, itemName, description, bgcolors, textcolor }) => {
  return (
    // <div className='graph-card-container'>
      <div className={`graph-card ${bgcolors}`}>
        <Link to="/">          
          <div className={`${textcolor}`}>
            <div className="mood-name">
              {icon && <span className="icon">{icon}</span>}
              {itemName}
            </div>
            <div className="description">{description}</div>
            
          </div>
        </Link>
      </div>
    // </div>

  );
};

export default CardSmall;
