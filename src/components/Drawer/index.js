import './Drawer.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import DrawerMenu from './DrawerMenu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFilePdf, faEnvelope, faBed, faBath, faRulerCombined, faUsers, faShoePrints } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faFilePdf, faEnvelope, faBed, faBath, faRulerCombined, faUsers, faShoePrints)

const styles = {
  stanmargin: {
    margin: '0 20px 20px 20px'
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
    mainimage: this.props.mainImage.path
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleButtonClick() {
    alert("I don't have data to display this :(")
  }

  onRequestClick() {
    alert("I don't have the data for this and the calculations I could do feels like I'm going a bit overboard at this point :)")
  }

  onImageGalleryClick(img) {
    this.setState({ mainimage: img })
  }

  render() {
    console.log(this.props.closeDrawer)
    return (
      <div className="drawerWidth">
        <DrawerMenu 
          closeDrawer={this.props.closeDrawer}
        />
        <div style={styles.stanmargin}>
          <h2 className="locationtitle">{this.props.aptTitle}</h2>
          <div style={{marginTop: '10px', marginBottom: '25px'}}>
          <FontAwesomeIcon style={{marginRight: '10px'}} icon="map-marker-alt" />
            <span>No data provided for each address</span>
          </div>
          <div className="shareiconsdrawer">
            <span>Share:</span>
            <span>G</span>
            <span>X</span>
            <span>in</span>
            <span><FontAwesomeIcon icon="envelope" /></span>
            <Button onClick={this.handleButtonClick} className="drawerbutton" style={{float:'right', marginRight: '0'}}>
              <FontAwesomeIcon style={{marginRight: '10px'}} icon="file-pdf" />
              Download PDF Brochure
            </Button>
          </div>
        </div>
        <div className="imagegallery">
          <div className="mainimage">
            <img src={this.state.mainimage} alt="apartment main" />
          </div>
          <div className="imagesBottom">
            <div className='firstImage' onClick={(e) => {
                let imageSRC = e.target.src
                this.onImageGalleryClick(imageSRC)
              }}
            >
              <img src={this.props.imageList.one.path} alt="apartment 1" />
            </div>
            <div onClick={(e) => {
                let imageSRC = e.target.src
                this.onImageGalleryClick(imageSRC)
              }}
            >
              <img src={this.props.imageList.two.path} alt="apartment 2" />
            </div>
            <div onClick={(e) => {
                let imageSRC = e.target.src
                this.onImageGalleryClick(imageSRC)
              }}
            >
              <img src={this.props.imageList.three.path} alt="apartment 3" />
            </div>
            <div onClick={(e) => {
                let imageSRC = e.target.src
                this.onImageGalleryClick(imageSRC)
              }}
            >
              <img src={this.props.imageList.four.path} alt="apartment 4" />
            </div>
            <div  className='lastImage' onClick={(e) => {
                let imageSRC = e.target.src
                this.onImageGalleryClick(imageSRC)
              }}
            >
              <img src={this.props.imageList.five.path} alt="apartment 5" />
            </div>
          </div>
        </div>

        <div className="apticons">
          <div className="firstrowicons">
            <div className="apticon">
              <div className="circleicon">
                <FontAwesomeIcon className="faiconcolor" icon="bed" />
              </div>
              <div className="faicontext">{this.props.aptBedrooms} bedroom(s)</div>
            </div>
            <div className="apticon">
              <div className="circleicon">
                <FontAwesomeIcon icon="bath" />
              </div>
              <div className="faicontext">1 bathroom</div>
            </div><div className="apticon">
              <div className="circleicon">
                <FontAwesomeIcon icon="ruler-combined" />
              </div>
              <div className="faicontext">{this.props.aptSize} m²</div>
            </div>
          </div>
          <div className="secondrowicons">
            <div className="apticon">
              <div className="circleicon">
                <FontAwesomeIcon icon="users" />
              </div>
              <div className="faicontext">{this.props.aptGuests} guest(s)</div>
            </div>
            <div className="apticon">
              <div className="circleicon">
                <FontAwesomeIcon icon="shoe-prints" />
              </div>
              <div className="faicontext">1. Floor</div>
            </div>
          </div>
        </div>

        <div className="nomorecontnet">
          ***I don't have access to the rest of the data***
        </div>

        <div className="aptfootermenu">
          <div className="priceavailability">
            <div>$2,875 / Month</div>
            <div>Available from 04.05.2019</div>
          </div>
          <div className="aptbtnreq">
            <Button onClick={this.onRequestClick} className="requestAptBTN">Request Apartment</Button>
          </div>
        </div>

      </div>
    )
  }
}

export default (TemporaryDrawer);
