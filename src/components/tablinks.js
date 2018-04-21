import React, {Component} from 'react'
import Link, {navigateTo} from "gatsby-link"
import {Tabs, Tab} from "material-ui/Tabs"
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


class TabLinks extends Component{
    state = {
        selectedIndex: 0,
      };

      select = (index) => this.setState({selectedIndex: index});
    render () {
        return (

                <Paper zDepth={1} style={{position:"fixed",bottom:"0", width:"100%", zIndex:"999", left:"0"}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onClick={() => navigateTo("/discover/")}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() =>  navigateTo("/feed/")}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => navigateTo("/hot/")}
          />
        </BottomNavigation>
      </Paper>
              
                
        
        );
    }
}
export default TabLinks

const yourmom = {
    // {/* <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}> */}
                // {/* <Tabs>
                //     <Tab label="Home Screen" onActive={() => navigateTo("/homescreen/") }/>
                //     <Tab label="Debate" onActive={() => navigateTo("/debate/") }/>
                //     <Tab label="Discover" onActive={() => navigateTo("/discover/") }/>
                //     <Tab label="Feed" onActive={() => navigateTo("/feed/") }/>
                //     <Tab label="Hot" onActive={() => navigateTo("/hot/") }/>

                // </Tabs> */}
}