import './Sorting.css';
import React from 'react';
import Sort from './Sort';
import Hidden from '@material-ui/core/Hidden';

const Sorting = () => {
  return (
    <div className="sortingcontainer">
      <div className="milespermonth">
        <span className="moremiles">Miles & More</span>
        <span className="collect">Collect more than <strong>750 miles</strong> per month!</span>
      </div>

      <Hidden smDown>
        <Sort />
      </Hidden>
    </div>
  );
}

export default Sorting;