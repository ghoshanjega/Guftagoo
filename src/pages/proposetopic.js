import React, {Component} from "react"
import TextField from 'material-ui/TextField';
import Title from '../components/title';
import RaisedButton from 'material-ui/RaisedButton'

const handleSubmit = () => {
    alert("Your topic has been posted! It will be approved for debate if it reaches a threshold")
}
export default class ProposeTopic extends Component{
    
    render() {
        return (<div>
            <Title>Propose A Topic</Title>
            <div style={{margin: "20px 0"}}></div>
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
                hintText="Relevant tags"
                />
                <div style={{margin: "40px 0"}}></div>
            <RaisedButton label="Submit" fullWidth={true} onClick={handleSubmit} />
                
        </div>);
    }
}
