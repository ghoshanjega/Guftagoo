import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'

export default class ArgumentPane extends Component{
    render() {
        let stylePaper = {width:"70%",margin:"20px 10px"}
        let styleCard = {}
        if(this.props.against == true){
            styleCard.backgroundColor = "red";
            stylePaper.float = "right"
        }else{
            styleCard.backgroundColor = "#a4c639";
            stylePaper.float = "left"
        }
        return (
        <Paper zDepth={5} style={stylePaper} rounded={true}>
            <Card style={styleCard}>
                <CardHeader style={{textAlign:"center", fontWeight:"bold"}}title={this.props.title}></CardHeader>
                <CardText actAsExpander={true}>
                    <ul>
                        {this.props.arguments.map((val) => <li>{val}</li>)}
                    </ul>
                </CardText>
                <CardText expandable={true}>
                <ul>
                        {this.props.evidence.map((val) => <li>{val}</li>)}
                    </ul></CardText>
                <CardActions style={{margin:"0 auto", textAlign:"center"}}>
                    <FlatButton  backgroundColor label="Like" />
                </CardActions>
            </Card>
        </Paper>    
        );
    }
  
}
