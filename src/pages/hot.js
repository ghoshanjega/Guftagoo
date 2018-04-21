import React, {Component} from "react"
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import {cyan500, pink700} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

class Hot extends Component{
    render() {
        return (<ListItem>
        <Card 
        containerStyle={{backgroundColor:"#E8F5E9"}}>
          <CardTitle 
           titleStyle={{ fontSize: '25px' }}
           title="Is sexual orientation determined at birth?"
           titleColor="#123456" >
          </CardTitle>
          <LinearProgress mode="determinate" value={80} color="green" style={{height:"10px"}}/>
          <CardActions style={{alignContent:"flex-end"}}>
            <RaisedButton label="No"   backgroundColor="#ffffff" />
            <RaisedButton label="Yes"  style={{alignContent:"flex-end"}}/>
          </CardActions>
        </Card>
        </ListItem>);
    }
}

export default Hot;