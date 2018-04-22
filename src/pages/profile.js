import React, {Component} from "react"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { AccessAlarm, ThreeDRotation, Book } from 'material-ui-icons';
import ohj from "../ohj.jpg"

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
  width: "85vw",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  border : "20px"
};

export default class Profile extends Component{
    render () {
        return (<ListItem>
            <Paper style={style} zDepth={5} >
            <div style={{ margin: "auto", position: "relative"}}>
            <div>
                    <img src={ohj} width="150" height="150" style={{marginTop:"20px"}}/></div>
                    
                    <h2 style={{lineHeight:"1.0"}}>Oh Jun Ho</h2>
                    
                    <div >
                    <List>
                    <ListItem disabled={true}>Professor of Mechanical Engineering, Korea Advanced Institute of Science and Technology: academic background in automatic control, real-time control and robotics; Director, Humanoid Robot Research Center, KAIST. Member: IEEE; ASME; National Academy of Engineering of Korea.</ListItem>
                    <ListItem disabled={true} leftAvatar={<Avatar> <Book/> </Avatar>}>1977, BSc and 1979, MSc, Yonsei University, Korea; 1985, PhD, University of California, Berkeley. </ListItem>
                    </List>
                    </div>
            </div>
            </Paper>
            </ListItem>)
    }
}