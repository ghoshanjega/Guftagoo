import React, {Component} from "react"
import TextField from 'material-ui/TextField';
import Title from '../components/title';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const handleSubmit = () => {
    alert("Your topic has been posted! It will be approved for debate if it reaches a threshold")
}
export default class ProposeTopic extends Component{
   
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}><div>
            <Title color="#004d40">Propose A Topic</Title>
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
                <div style={{margin: "40px 0"}}></div>
            <RaisedButton label="Submit" backgroundColor={'#00bfa5'} labelColor="#FFFFFF" fullWidth={true} onClick={handleSubmit} />
            </div>
                
        </div>
        </MuiThemeProvider>);
    }
}
