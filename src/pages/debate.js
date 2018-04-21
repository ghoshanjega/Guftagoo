import React, {Component} from "react"
import { connect } from "react-redux"
import ArgumentPane from "../components/argumentpane"
import ParticipantsList from '../components/participantslist'
import FlatButton from 'material-ui/FlatButton';
import Title from '../components/title'
import LinearProgress from 'material-ui/LinearProgress'

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
            <FlatButton label="Show Against" onClick={() => this.props.toggleDrawerAgainst()} style={{float:"right"}}/>
            <ParticipantsList participants={['Arjit', 'Kshitij']} open={this.props.debateReducer.openFor} against={false}/>
            <ParticipantsList participants={['Ghoshan', 'Yawer']} open={this.props.debateReducer.openAgainst} against={true}/>
            <Title>{this.props.debateReducer.title}</Title>
            <LinearProgress mode="determinate" value={70} color="green" style={{height:"30px"}}/>
            <div>
                <div style={{float:"left"}}>4mins left</div>
                <div style={{float:"right"}}>55 viewers</div>
                
            </div>
            {this.props.debateReducer.nodes.map((val) => (<ArgumentPane against = {val.against} title={val.title} arguments = {val.evidence} evidence = {val.citations}/>))}
        </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debate);