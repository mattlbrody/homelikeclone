import './ApartmentCountTitle.css';
import React from 'react';
import ToolTip from '../ToolTip/ToolTip';

const ApartmentCountTitle = () => {
  return (
    <div className="ApartmentCountTitle containerapttitle">
      <div>267 of 1211 Listings In London</div>
      <div className="tooltip">
        <ToolTip />
      </div>
    </div>
  );
}

export default ApartmentCountTitle;