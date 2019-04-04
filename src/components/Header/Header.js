import './header.css';
import React from 'react';
import Phone from '../Phone/Phone';
import Language from '../Language/Language'
import Bars from '../Bars/Bars';
import Input from '@material-ui/core/Input';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

const Header = (props) => {
  return (
    <div className="general-container">
      <div className="container splitleft">
      <img className="homelikelogo" src="http://codifyacademy.com/homelikelogo.png" height="26px" alt="log" />
      <img className="mobilelogo" src="http://codifyacademy.com/mobilelogo.png" height="20x" alt="log" />
      <div className="searchicon">
        <FontAwesomeIcon icon="search" />
      </div>
      <div className="input">
        <Input
          placeholder="Search by city"
        />
      </div>
      </div>
      <div className="container">
        <div className="phoneicon">
          <Phone />
        </div>
        <div className="language container">
          <img height="9px" src="http://codifyacademy.com/britain.svg" alt="english" />
          <Language />
        </div>
        <div className="bars">
          <Bars />
        </div>
      </div>
    </div>
  );
}

export default (Header);