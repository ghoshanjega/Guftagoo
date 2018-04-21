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
import { Pageview, Whatshot, Face, Lens} from 'material-ui-icons';




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
            label="discover"
            icon={<Pageview/>}
            onClick={() => navigateTo("/discover/")}
          />
          <BottomNavigationItem
            label="Hot"
            icon={<Whatshot/>}
            onClick={() =>  navigateTo("/hot/")}
          />
          <BottomNavigationItem
            label="My Feed"
            icon={<Face />}
            onClick={() => navigateTo("/feed/")}
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