import React from 'react';
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

const getTheme = () => {
  let overwrites = {
    "palette": {
        "textColor": fade(Colors.darkBlack, 0.87),
        "primary1Color": Colors.pink900,
        "primary2Color": Colors.brown600,
        "borderColor": Colors.grey900,
        "canvasColor": Colors.white
    },
    "card": {
        "titleColor": Colors.purple500,
        "subtitleColor": Colors.pink500,
        "fontWeight": {}
    }
};
  return getMuiTheme(baseTheme, overwrites);
}


const Discover = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
  <List>
    <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Can your mom be any better? Last night I didnt tip her."
     titleColor="#123456" >
    </CardTitle>
    <LinearProgress mode="determinate" value={50} />
    <CardActions style={{alignContent:"flex-end"}}>
      <RaisedButton label="No"  />
      <RaisedButton label="Yes"  style={{alignContent:"flex-end"}}/>
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Should the death penalty be allowed?"
     titleColor="#004D40" >
    </CardTitle>
    <LinearProgress mode="determinate" value={50} color="#004D40" />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton label="No"   backgroundColor="#ffffff" />
      <FlatButton label="Tec" style={{marginLeft:"auto", marginRight:"auto"}}/>
      <RaisedButton label="Yes"  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Should the United States Keep Daylight Saving Time?"
     titleColor="#123456" >
    </CardTitle>
    <LinearProgress mode="determinate" value={50} />
    <CardActions style={{alignContent:"flex-end"}}>
      <RaisedButton label="No"   backgroundColor="#ffffff" />
      <RaisedButton label="Yes"  style={{alignContent:"flex-end"}}/>
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Is sexual orientation determined at birth?"
     titleColor="#123456" >
    </CardTitle>
    <LinearProgress mode="determinate" value={50} />
    <CardActions style={{alignContent:"flex-end"}}>
      <RaisedButton label="No"   backgroundColor="#ffffff" />
      <RaisedButton label="Yes"  style={{alignContent:"flex-end"}}/>
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Should adults have the right to carry a concealed handgun?"
     titleColor="#123456" >
    </CardTitle>
    <LinearProgress mode="determinate" value={50} />
    <CardActions style={{alignContent:"flex-end"}}>
      <RaisedButton label="No"   backgroundColor="#ffffff" />
      <RaisedButton label="Yes"  style={{alignContent:"flex-end"}}/>
    </CardActions>
  </Card>
  </ListItem>

    
  </List>

  

  

 
  </MuiThemeProvider>
);

export default Discover;
