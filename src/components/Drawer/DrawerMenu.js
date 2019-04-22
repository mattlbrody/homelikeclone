import React from 'react';
import Button from '@material-ui/core/Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTablet, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTablet, faMapMarkedAlt)

class ButtonAppBar extends React.Component {

handleButtonClick() {
    alert("I don't have data for this")
}

onCloseDrawer = () => {
    alert("Passing a prop from a grandparent to a grandchild is easy, it's significantly harder to do when the prop is a function inside of another function...still working on this one. Click to the left for now :)")
}
    
render() {
    return (
        <div className="drawerContainer">
            <div className="drawernav">
                <div>
                    <Button className="drawerbutton" onClick={this.handleButtonClick}>
                        <FontAwesomeIcon className="fontaicon" icon="map-marked-alt" />
                        Map
                    </Button>
                    <Button className="drawerbutton" onClick={this.handleButtonClick}>
                        <FontAwesomeIcon className="fontaicon" icon="tablet" />
                        New Tab
                    </Button>
                </div>
                <div onClick={this.onCloseDrawer}>
                    X
                </div>
            </div>
        </div>
    );
}
}

export default (ButtonAppBar);
