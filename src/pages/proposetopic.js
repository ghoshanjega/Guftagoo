import React, {Component} from "react"
import TextField from 'material-ui/TextField';
import Title from '../components/title';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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

const handleSubmit = () => {
    alert("Your topic has been posted! It will be approved for debate if it reaches a threshold")
}
export default class ProposeTopic extends Component{
   
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}><div>
               
            <Title color="#004d40" style={{paddingTop:"90px", paddingBottom: "30px"}}>Propose A Topic</Title>
            
            <div style={{margin: "20px 0"}}></div>
            <div style={{margin:"0 20px"}}>
            <TextField fullWidth={true}
                hintText="Question"
                />
            <TextField fullWidth={true}
                hintText="About the question"
                multiLine={true}
                rows={2}
                rowsMax={4}
                />
            <TextField fullWidth={true}
                hintText="Category"
                />
                <div style={{padding:"40px",   }}>
            <RaisedButton label="Submit" style={{width:"50px",marginLeft:"110px"}} backgroundColor={'#00bfa5'} labelColor="#FFFFFF"  onClick={handleSubmit} />
                </div>
            </div>
                
        </div>
        
        </MuiThemeProvider>);
    }
}
