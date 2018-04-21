import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'

export default class ArgumentPane extends Component{
    render() {
        return (
        <Paper zDepth={2} >
            <Card>
                <CardHeader
                title={this.props.title}
                
                >
                </CardHeader>
                <CardText actAsExpander={true}>
                <ul>
                        {this.props.arguments.map((val) => <li>{val}</li>)}
                    </ul>
                </CardText>
                <CardText expandable={true}>
                <ul>
                        {this.props.evidence.map((val) => <li>{val}</li>)}
                    </ul></CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </Paper>    
    );
    }
  
}
