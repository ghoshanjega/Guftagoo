import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'
import Icon from 'material-ui/SvgIcon';
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
                <CardTitle style={{fontWeight:"bold"}}title={this.props.title} actAsExpander={true}>
                <Icon className="action">add_circle</Icon></CardTitle>
                <CardText  style={{fontSize: "18px"}}>
                    <ul>
                        {this.props.arguments.map((val) => <li>{val}</li>)}
                    </ul>
                </CardText>
                <CardText expandable={true}>
                    <ul>
                        {this.props.evidence.map((val) => <li>{val}</li>)}
                    </ul>
                </CardText>
                <CardActions style={{margin:"0 auto", textAlign:"center"}}>
                    <FlatButton label="Like" />
                </CardActions>
            </Card>
        </Paper>    
        );
    }
  
}
