

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
                <ListItem disabled={true} leftAvatar={<Avatar> CS </Avatar>}>Computer Science</ListItem>

                <ListItem disabled={true} leftAvatar={<Avatar> CS </Avatar>}>Computer Science</ListItem>
    </List>
                </div>
        </div>
        </Paper>
        </ListItem>
    </List>
    </MuiThemeProvider>
);

export default Feed;