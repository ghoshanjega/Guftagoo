import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';

import Paper from 'material-ui/Paper'
import Icon from 'material-ui/SvgIcon';
import { FlatButton } from 'material-ui';
export default class ArgumentPane extends Component{
    
    render() {
        let forColor = "#4062BB"
    let againstColor = "#DB2B39"
        let stylePaper = {width:"70%",margin:"5px 5px", borderRadius:"20px"}
        let styleCard = {}
        styleCard.borderRadius = "20px"
        if(this.props.against == true){
            styleCard.border = "3px solid "+againstColor;
            stylePaper.float = "right"
        }else{
            styleCard.border = "3px solid "+forColor;
            stylePaper.float = "left"
        }
        return (
        <Paper  style={stylePaper} rounded={true}>
            <Card style={styleCard}>
                <CardTitle style={{fontWeight:"bold"}} title={this.props.title} ></CardTitle>
                <CardText  style={{fontSize: "16px"}} actAsExpander={true}>
                    {this.props.arguments.map((val) => <li>{val}</li>)}
                </CardText>
                <CardText expandable={true}>
                    Sources
                    <ul>
                        {this.props.evidence.map((val) => <li>{val}</li>)}
                    </ul>
                </CardText>
                <CardActions style={{margin:"0 auto", textAlign:"center"}}>
                    <FlatButton label="Like" secondary={true} />
                </CardActions>
            </Card>
        </Paper>    
        );
    }
  
}
