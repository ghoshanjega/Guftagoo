import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import {cyan500, pink700} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';
import { Spellcheck, Done, ThumbDown, ThumbUp, ViewHeadline, Search } from 'material-ui-icons';
import TextField from 'material-ui/TextField';

import Title from '../components/title'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
import { navigateTo } from 'gatsby-link';

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
    <ListItem >
    <TextField style={{width:"100%", color:"#00BFA5"}}
      hintText="Search"
    />
    </ListItem>
    <ListItem style={{height:"80px"}}>
    <h1>
    <ViewHeadline color={"#000000"}/> CATEGORIES
  </h1>
      </ListItem>
   

  <ListItem  onClick={() =>  navigateTo("/debate/")}>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="90"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should the death penalty be allowed?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={80} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="70"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should parents or other adults be able to ban books from schools and libraries?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={100} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="70"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Is a college education worth it?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={100} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="50"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Is golf a sport?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={10} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

   <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="40"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should marijuana be a medical option?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={40} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  
 

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="90"
          size={20}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should the federal minimum wage be increased?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={80} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="10"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should prescription drugs be advertised directly to consumers?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={30} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

 

 

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="20"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should prostitution be legal?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={100} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

 

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="20"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Are social networking sites good for our society?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={40} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>



  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="10"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should the words `under God' be in the US Pledge of Allegiance?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={40} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

 
  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"ffffff"}}>
  <CircularProgress
          mode="determinate"
          value="90"
          size={30}
          color={"#00bfa5"}
          thickness={2}
          style={{float:"right", marginRight:"10", marginTop:"10"}}
        />
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should the death penalty be allowed?"
     titleColor="#004D40" >
    </CardTitle>
    <div style={{float:"right", marginRight:"10", marginBottom:"10"}}> PSYCOLOGY
    </div>
    <LinearProgress  mode="determinate" value={50} color={"#00BFA5"} />
    <CardActions style={{alignContent:"flex-end"}}>
      
      <div style={{alignContent:"flex-end"}}>
      <RaisedButton icon={<ThumbDown color={"#004D40"}/>}   backgroundColor="#ffffff" />
      {/* <FlatButton label="Tec"/> */}
      <RaisedButton icon={<ThumbUp  color={"#004D40"}/>}  style={{alignContent:"flex-end", float:"right"}}/>
        </div>
      
    </CardActions>
  </Card>
  </ListItem>

  <ListItem>
  <Card 
  containerStyle={{backgroundColor:"#E8F5E9"}}>
    <CardTitle 
     //style={{height: "80px"}}
     titleStyle={{ fontSize:"25px" }}
     title="Should the United States Keep Daylight Saving Time?"
     titleColor="#123456" >
    </CardTitle>
    <LinearProgress mode="determinate" value={40} color="green" style={{height:"10px"}}/>
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
