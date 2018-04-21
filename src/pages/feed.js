

import React from 'react';
import Paper from 'material-ui/Paper';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { AccessAlarm, ThreeDRotation, Book } from 'material-ui-icons';
import Chip from 'material-ui/Chip';



let overwrites = {
    "palette": {
        "textColor": fade(Colors.darkBlack, 0.87),
        "primary1Color": Colors.purple800,
        "primary2Color": Colors.purple800,
        "borderColor": Colors.grey900,
        "canvasColor": Colors.white
    },
    "card": {
        "titleColor": Colors.purple500,
        "subtitleColor": Colors.pink500,
        "fontWeight": {}
    }
};

const style = {
  height: 400,
  width: "85vw",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  border : "20px"
};

const Feed = () => (
        <MuiThemeProvider muiTheme={ getMuiTheme(baseTheme, overwrites)}>
        <List style={{justifyContent:"center"}}>
            <ListItem>
        <Paper style={style} zDepth={5} >
        <div style={{display:"flex", margin: "auto", position: "relative",
top: "50%",
transform: "translateY(-50%)"}}>
                <div style={{flex: "50%"}}>
                <img src="/src/pages/daniel.jpg"/></div>
                <div style={{flex: "50%"}}>
                
                <h2 style={{lineHeight:"1.0"}}>Ghoshan Jaganathamani</h2>
                <List>
                <ListItem disabled={true} leftAvatar={<Avatar> <Book/> </Avatar>}>Computer Science</ListItem>
                <ListItem disabled={true} leftAvatar={<Avatar> CS </Avatar>}>Computer Science</ListItem>
                </List>
                </div>
        </div>
        </Paper>
        </ListItem>

         <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#ffffff"}}>
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Is sexual orientation determined at birth?"
     titleColor="#123456" >
    </CardTitle>
    <CardText style={{float:"right"}}> PSYCHOLOGICAL
    </CardText> 
    <LinearProgress mode="determinate" value={40} style={{height: "10"}} color={"#9CCC65"}/>
    
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#ffffff"}}>
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize: '30px' }}
     title="Should adults have the right to carry a concealed handgun?"
     titleColor="#123456" >
    </CardTitle>
    {/* <CardText > */}
    <div style={{float:"left", marginBottom:"10", marginLeft:"15"}}> 123,434 views </div>
        <div style={{float:"right", marginBottom:"10", marginRight:"15"}}> POLITICAL </div>
    {/* </CardText>  */}
    <LinearProgress mode="determinate" value={70} style={{height: "10"}} color={"#9CCC65"} />
  </Card>
  </ListItem>

    </List>
    </MuiThemeProvider>
);

export default Feed;