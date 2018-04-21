import React, {Component} from "react"
import { connect } from "react-redux"
import ArgumentPane from "../components/argumentpane"
import ParticipantsList from '../components/participantslist'
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = (state) => {
    return {debateReducer: state.debateReducer}
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

class Debate extends Component{
    render() {
        return (<div>
            <FlatButton label="Show For" onClick={() => this.props.toggleDrawerFor()}/>
            <FlatButton label="Show Against" onClick={() => this.props.toggleDrawerAgainst()}/>
            <ParticipantsList participants={['Arjit', 'Kshitij']} open={this.props.debateReducer.openFor} against={false}/>
            <ParticipantsList participants={['Ghoshan', 'Yawer']} open={this.props.debateReducer.openAgainst} against={true}/>
            <div>Title: {this.props.debateReducer.title}</div>
            {this.props.debateReducer.nodes.map((val) => (<ArgumentPane title={val.title} arguments = {val.evidence} evidence = {val.citations}/>))}
        </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debate);