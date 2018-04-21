import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import ParticipantsTile from './participanttile'
import { connect } from "react-redux"
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
        <Drawer width={200} openSecondary={this.props.against} open={this.props.open} >
          {this.props.participants.map((val) => (<ParticipantsTile name={val} />))}
          <RaisedButton label="Close" secondary={true} onClick={() => this.props.against == true ? 
                    this.props.toggleDrawerAgainst() : 
                    this.props.toggleDrawerFor()}/>
        </Drawer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList)