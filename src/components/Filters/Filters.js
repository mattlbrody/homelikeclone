import './Filters.css';
import React from 'react';
import Price from './Options/Price';
import Dates from './Options/Dates';
import Guests from './Options/Guests';
import Bedrooms from './Options/Bedrooms';
import Size from './Options/Size';
import More from './Options/More';

const Filters = () => {
  return (
    <div className="container-filters">
      <div>
        <Price />
      </div>
      <div>
        <Dates />
      </div>
      <div>
        <Guests />
      </div>
      <div>
        <Bedrooms />
      </div>
      <div>
        <Size />
      </div>
      <div>
        <More />
      </div>
    </div>
  );
}

export default Filters;