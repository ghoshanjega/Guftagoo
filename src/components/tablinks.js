import React, {Component} from 'react'
import Link, {navigateTo} from "gatsby-link"
import {Tabs, Tab} from "material-ui/Tabs"
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TabLinks extends Component{
    render () {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Tabs>
                    <Tab label="Home Screen" onActive={() => navigateTo("/homescreen/") }/>
                    <Tab label="Debate" onActive={() => navigateTo("/debate/") }/>
                    <Tab label="Discover" onActive={() => navigateTo("/discover/") }/>
                    <Tab label="Feed" onActive={() => navigateTo("/feed/") }/>
                    <Tab label="Hot" onActive={() => navigateTo("/hot/") }/>

                </Tabs>
                </MuiThemeProvider>
        
        </div>);
    }
}
export default TabLinks