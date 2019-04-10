import './header.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Phone from '../Phone/Phone';
import Language from '../Language/Language'
import Bars from '../Bars/Bars';
import Input from '@material-ui/core/Input';
import { fetchData, aptReset } from '../../actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)



class Header extends Component {

  handleInput = (input) => {
    this.props.aptReset({ type: 'APARTMENT_RESET' })
    this.props.fetchData(input);
  }

  render() {
    return (
      <div className="general-container">
        <div className="container splitleft">
          <img className="homelikelogo" src="http://codifyacademy.com/homelikelogo.png" height="26px" alt="log" />
          <img className="mobilelogo" src="http://codifyacademy.com/mobilelogo.png" height="20x" alt="log" />
          <div className="searchicon">
            <FontAwesomeIcon icon="search" />
          </div>
          <div className="input">
            <form onSubmit={(event) => {
              event.preventDefault()
              let input = event.target.userInput.value
              this.handleInput(input)
              event.target.userInput.value = ''
            }}>
              <Input type="text" name="userInput" placeholder="Search by city" />
            </form>
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
}

const mapStateToProps = (state) => {
  return { apts: state.PostsReducer }
}

export default connect(mapStateToProps,
  {fetchData, aptReset}
)(Header);