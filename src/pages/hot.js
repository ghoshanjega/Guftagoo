import React, {Component} from "react"
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import {cyan500, pink700} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';
import { ChatFeed, Message } from 'react-chat-ui';
import Highlighter from "react-highlight-words";
import Paper from 'material-ui/Paper';
import { Whatshot} from 'material-ui-icons';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const myMessage = new Message(1, 'Hello World!', 'Elon Musk');

class Hot extends Component{
  state = {
    messages: [
      
      new Message({ id: 0, message: "The relationship between biology and sexual orientation is a subject of research. A simple and singular determinant for sexual orientation has not been conclusively demonstrated; various studies point to different, even conflicting positions, but scientists hypothesize that a combination of genetic, hormonal, and social factors determine sexual orientation." }), // Blue bubble
    ],
    //...
  };
    render() {
        return (
          <List>
        
        <ListItem>
          <Whatshot color={"#FF0000"} style={{float:"right", marginRight: 20, marginTop: 20}} />
        <Card 
        style={{backgroundColor:"#FFFFFF", border:"5", borderColor:"#004D40"}}>
          <CardTitle 
           titleStyle={{ fontSize: '25px' }}
           title="Is sexual orientation determined at birth?"
           titleColor="#004D40" >
          </CardTitle>

          
          <Paper style={{marginLeft:"10", marginRight:"10", marginBottom:"20", backgroundColor:"#db2b39", padding:"20", borderRadius:"20",color:"#ffffff"}}>
          
          <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["A simple and singular determinant for sexual orientation has not been conclusively demonstrated;"]}
    autoEscape={true}
    textToHighlight="The relationship between biology and sexual orientation is a subject of research. A simple and singular determinant for sexual orientation has not been conclusively demonstrated; various studies point to different, even conflicting positions, but scientists hypothesize that a combination of genetic, hormonal, and social factors determine sexual orientation."
  />
            </Paper>
      
    
            </Card>
        </ListItem>


<ListItem>
<Whatshot color={"#FF0000"} style={{float:"right", marginRight: 20, marginTop: 20}} />
<Card 
containerStyle={{backgroundColor:"#FFFFFF"}}>
  <CardTitle 
   titleStyle={{ fontSize: '25px' }}
   title="Should abortion be illegal?"
   titleColor="#004d40" >
  </CardTitle>

  
  <Paper style={{width:"300px",marginLeft:"10", marginRight:"10", marginBottom:"20", backgroundColor:"#4062bb", padding:"20", borderRadius:"20",color:"#ffffff"}}>
  
  <Highlighter
highlightClassName="YourHighlightClass"
searchWords={["Rather than judge them","some authority may want for them."]}
autoEscape={true}
textToHighlight="Rather than judge them, I give them what they came here for—as expertly, safely, quickly, and painlessly as I can—and I send them home so they can resume the lives they want, and not lives that some authority may want for them."
/>
    </Paper>



    <Paper style={{positionleft:"100",width:"300px",marginLeft:"10", marginRight:"10", marginBottom:"20", backgroundColor:"#db2b39", padding:"20", borderRadius:"20",color:"#ffffff"}}>
  
  <Highlighter
highlightClassName="YourHighlightClass"
searchWords={["physically and psychologically harms their mothers, and emasculates their fathers by depriving them of their paternal identity and responsibilities"]}
autoEscape={true}
textToHighlight="I am pro-life because abortion inhumanely kills children (including members of my own extended family), physically and psychologically harms their mothers, and emasculates their fathers by depriving them of their paternal identity and responsibilities without due process of law."
/>
    </Paper>


    </Card>
</ListItem>

</List>
        
    
    );
    }
}

export default Hot;