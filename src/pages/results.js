import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


export default class Result  extends Component{
    render(){
        return(
                <div style={{flaot:"left", fontFamily:"opensans", fontSize:"50px"}}>
                79%
                </div>
        );
    }
}

