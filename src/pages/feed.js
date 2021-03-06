

import React from 'react';
import Paper from 'material-ui/Paper';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardText, CardTitle, } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { AccessAlarm, ThreeDRotation, Book, FormatBold, GroupWork, FormatColorFill, CloudCircle, Computer, Smartphone, Visibility, Lens } from 'material-ui-icons';
import Chip from 'material-ui/Chip';
import { navigateTo } from 'gatsby-link';
import Profilepic from '../obama.png'



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
  //width: "85vw",
  marginLeft: 30,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 10,
  //   border : "20px"
  backgroundColor: "#000000",
};

const Feed = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme, overwrites)}>
    <List style={{ justifyContent: "center" }}>
      <ListItem style={{ left: "-15" }}>
        <Paper style={style} zDepth={3}  >
          <div style={{
            display: "flex", margin: "auto", position: "relative",
            top: "50%",
            transform: "translateY(-90%)"
          }}>
            <div style={{ flex: "50%" }}>
              <img src={Profilepic} width="130" height="190" style={{ borderRadius: "10" }} /></div>
            <div style={{ flex: "50%" }}>

              <h2 style={{ lineHeight: "1.0", color: "#FFFFFF" }}>Mike J</h2>
              <List>
                <ListItem disabled={true} style={{color:"#FFFFFF"}}leftAvatar={<Avatar> <Book /> </Avatar>}>Computer Science</ListItem>
                <ListItem disabled={true} style={{color:"#FFFFFF"}} leftAvatar={<Avatar backgroundColor="#D3D3D3"> <GroupWork color="#FFFF00" /> </Avatar>}>120</ListItem>
              </List>
            </div>
          </div>

          <div style={{ margin: "30px 0" }} ></div>

          <div style={{
            display: "flex",
            flexWrap: "wrap", fontSize: "8", color: "#c0e5c0",justifyContent:"center"
          }}>
            <Chip backgroundColor={"#FFFFFF"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<AccessAlarm />} />
              Relativity
        </Chip>

            <Chip backgroundColor={"#23af4f"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<FormatBold />} />
              BitCoin
        </Chip>

            <Chip backgroundColor={"#c03456"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<FormatColorFill />} />
              Chemistry
        </Chip>

            <Chip backgroundColor={"#12F5c0"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<CloudCircle />} />
              Cloud Computing
        </Chip>

            <Chip backgroundColor={"#e03450"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<Computer />} />
              Computers
        </Chip>

            <Chip backgroundColor={"#d0f310"} style={{ marginLeft: "10", marginBottom: "10" }}>
              <Avatar icon={<Smartphone />} />
              Phones
        </Chip>
          </div>
        </Paper>
      </ListItem>
      <ListItem onClick={() => navigateTo("/microsoftdebate/")}>
        <Card
          containerStyle={{ backgroundColor: "#ffffff" }}>
          <CardTitle
            //style={{height: "80px"}}
            title="Microsoft should invest in a contingency plan for singularity?"
            titleColor="#123456" >
          </CardTitle>
          {/* <CardText > */}
          <div style={{ float: "left", marginBottom: "10px", marginLeft: "15px", color: "#FF0000", display: "flex" }}><Lens style={{ marginRight: "10", size: "3px" }} color="#FF0000" /> ON GOING </div>

          <div style={{ float: "right", marginBottom: "10px", marginRight: "15px" }}> POLITICAL </div>

          {/* </CardText>  */}
          <LinearProgress mode="determinate" value={70} style={{ height: "10px" }} color="#9CCC65" />
        </Card>
      </ListItem>

      <ListItem>
        <Card
          containerStyle={{ backgroundColor: "#ffffff" }}>
          <CardTitle
            onClick={() => navigateTo("/results/")}
            //style={{height: "80px"}}
            //titleStyle={{ fontSize: '25px' }}
            title="Should adults have the right to carry a concealed handgun?"
            titleColor="#123456" >
          </CardTitle>
          {/* <CardText > */}
          <div style={{ float: "left", marginBottom: "10px", marginLeft: "15px" }}> 123,434 views </div>

          <div style={{ float: "right", marginBottom: "10px", marginRight: "15px" }}> POLITICAL </div>

          {/* </CardText>  */}
          <LinearProgress mode="determinate" value={70} style={{ height: "10px" }} color="#9CCC65" />
        </Card>
      </ListItem>

      <ListItem>
        <Card
          containerStyle={{ backgroundColor: "#ffffff" }}>
          <CardTitle
            //style={{height: "80px"}}
            //titleStyle={{ fontSize: '25px' }}
            title="Are we there yet"
            titleColor="#123456" >
          </CardTitle>
          {/* <CardText > */}
          <div style={{ float: "left", marginBottom: "10px", marginLeft: "15px" }}> 123,434 views </div>

          <div style={{ float: "right", marginBottom: "10px", marginRight: "15px" }}> GENERAL </div>

          {/* </CardText>  */}
          <LinearProgress mode="determinate" value={80} style={{ height: "10px" }} color="#9CCC65" />
        </Card>
      </ListItem>

      <ListItem>
        <Card
          containerStyle={{ backgroundColor: "#ffffff" }}>
          <CardTitle
            //style={{height: "80px"}}
            //titleStyle={{ fontSize: '25px' }}
            title="Should pedestrians walk on left?"
            titleColor="#123456" >
          </CardTitle>
          {/* <CardText > */}
          <div style={{ float: "left", marginBottom: "10px", marginLeft: "15px" }}> 123,434 views </div>

          <div style={{ float: "right", marginBottom: "10px", marginRight: "15px" }}> GENERAL </div>

          {/* </CardText>  */}
          <LinearProgress mode="determinate" value={30} style={{ height: "10px" }} color="#9CCC65" />
        </Card>
      </ListItem>

      <ListItem style={{ marginBottom: "50" }}>
        <Card
          containerStyle={{ backgroundColor: "#ffffff" }}>
          <CardTitle
            //style={{height: "80px"}}
            //titleStyle={{ fontSize: '25px' }}
            title="Is terrorism and religion unseperatable?"
            titleColor="#123456" >
          </CardTitle>
          {/* <CardText > */}
          <div style={{ float: "left", marginBottom: "10px", marginLeft: "15px" }}> 123,434 views </div>

          <div style={{ float: "right", marginBottom: "10px", marginRight: "15px" }}> RELIGION </div>

          {/* </CardText>  */}
          <LinearProgress mode="determinate" value={70} style={{ height: "10px" }} color="#9CCC65" />
        </Card>
      </ListItem>




    </List>
  </MuiThemeProvider>
);

export default Feed;