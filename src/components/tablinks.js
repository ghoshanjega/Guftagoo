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
import { Pageview, Whatshot, Face, Lens, Help, AddBox} from 'material-ui-icons';



let tmpselind = 0
class TabLinks extends Component{
  select = (index, link) => {
    tmpselind = index
    navigateTo(link)
  };

      
    render () {
      
        return (

       <Paper style={{position:"fixed", bottom:"0", margin:"0 auto", width:"442px"}}>
        <BottomNavigation selectedIndex={tmpselind}>
          <BottomNavigationItem
            style={{width:"25%"}}
            label="Discover"
            icon={<Pageview/>}
            onClick={() => this.select(0, "/discover/")}
          />
          <BottomNavigationItem
            label="Hot"
            icon={<Whatshot/>}
            onClick={() => this.select(1, "/hot/")}
          />
          <BottomNavigationItem
            label="My Feed"
            icon={<Face />}
            onClick={() =>  this.select(2, "/feed/")}
          />
          <BottomNavigationItem
            label="New"
            icon={<AddBox  />}
            onClick={() =>  this.select(3, "/proposetopic/")}
          />
        </BottomNavigation>
      </Paper>
              
                
        
        );
    }
}
export default TabLinks
