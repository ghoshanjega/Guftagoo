import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import ParticipantsTile from './participanttile'
import { connect } from "react-redux"
import Title from './title'
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
            toggleDrawerFor() {
                dispatch({type: "TOGGLE_DRAWER_FOR"})
            },
            toggleDrawerAgainst() {
                dispatch({type: "TOGGLE_DRAWER_AGAINST"})
            }

        }
}

class ParticipantsList extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {this.setState({open: !this.props.open}); }

  render() {
    return (
      <div>
        <Drawer width={175} openSecondary={this.props.against} open={this.props.open}>
            <Title size="small">{this.props.against == false ? "Participants For" : "Participants Against"}</Title>
          {this.props.participants.map((val) => (<ParticipantsTile name={val} />))}
            <div style={{textAlign:"center"}}>
                <RaisedButton style={{margin:"30px auto"}}label="Close" secondary={true} 
                    onClick={() => this.props.against == true ? 
                        this.props.toggleDrawerAgainst() : 
                        this.props.toggleDrawerFor()}/>
            </div>
        </Drawer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList)