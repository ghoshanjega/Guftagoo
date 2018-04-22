import React, {Component} from "react"
import { connect } from "react-redux"
import ArgumentPane from "../components/argumentpane"
import ParticipantsList from '../components/participantslist'
import RaisedButton from 'material-ui/RaisedButton';
import Title from '../components/title'
import Dialog from 'material-ui/Dialog'
import LinearProgress from 'material-ui/LinearProgress'
import { AccessAlarm, ThreeDRotation, Book, FormatBold, GroupWork, FormatColorFill, CloudCircle, Computer, Smartphone, Visibility, Lens } from 'material-ui-icons';


const mapStateToProps = (state) => {
    return {debateReducer: state.debateReducer}
}
  
const pad = (d) => {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
const mapDispatchToProps = dispatch => {
    return {
        toggleDrawerFor() {
            
            dispatch({type: "TOGGLE_DRAWER_FOR"})
        },
        toggleDrawerAgainst() {
            dispatch({type: "TOGGLE_DRAWER_AGAINST"})
        },
        decrementTime() {
            dispatch({type: "DECREMENT_TIME"})
        },
        toggleSideDialog() {
            dispatch({type: "TOGGLE_SIDE"})
        }, 
        pickASide(side) {
            dispatch({type: "PICK_SIDE", payload: {side:side}})
            this.toggleSideDialog()
        }
    }
}



class Debate extends Component{
    componentDidMount(){
        setInterval(() => {
            this.props.decrementTime()
        }, 1000)
    }

    render() {
        let forColor = "#4062BB"
        let againstColor = "#DB2B39"
        let chosenColor = "#000000"
        if(this.props.debateReducer.side == "For"){
            chosenColor = forColor;
        }else if(this.props.debateReducer.side == "Against"){
            chosenColor = againstColor;
        }
        let debateStatus = ""
        if(this.props.debateReducer.time == 0){
            debateStatus = (<div style={{float:"left", marginBottom:"10", marginLeft:"15", color:"#000000",display:"flex"}}> DEBATE ENDED </div>)
        }else{
            debateStatus = (<div style={{float:"left", marginBottom:"10", marginLeft:"15", color:"#FF0000",display:"flex"}}><Lens style={{marginRight:"10", size: "3px"}} color={"#FF0000"}/> ON GOING </div>)
        }
        let actions = [
            <RaisedButton
              label="For"
              backgroundColor = {forColor}
              onClick={() => this.props.pickASide("For")}
            />,
            <RaisedButton
              label="Against"
              backgroundColor = {againstColor}

              onClick={() => this.props.pickASide("Against")}
            />
          ];
        return (<div>
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={true}
                open={this.props.debateReducer.toggleSide}
                >
                Pick a side!
                </Dialog>
            <RaisedButton backgroundColor = {forColor} style = {{color:"#FFFFFF !important"}} label="For" onClick={() => this.props.toggleDrawerFor()}/>
            <RaisedButton backgroundColor = {againstColor} style = {{color:"#FFFFFF !important"}}  label="Against" onClick={() => this.props.toggleDrawerAgainst()} style={{float:"right"}}/>
            <ParticipantsList participants={['Arjit', 'Kshitij']} open={this.props.debateReducer.openFor} against={false}/>
            <ParticipantsList participants={['Ghoshan', 'Yawer']} open={this.props.debateReducer.openAgainst} against={true}/>
            <a onClick={this.props.toggleSideDialog} ><Title style={{color: chosenColor}}>{this.props.debateReducer.title}</Title></a>
            <LinearProgress mode="determinate" value={70} color="green" style={{height:"30px", marginBottom:"20px"}}/>
            <div>
                <div style={{float:"left"}}>Time left: {Math.floor(this.props.debateReducer.time/60)}:{pad(this.props.debateReducer.time % 60)}</div>
                <div style={{float:"right"}}>55 viewers</div>
                
            </div>
            {debateStatus}
            <div style={{overflowY: "scroll", width: "100%", height: "440px"}}>
                {this.props.debateReducer.nodes.map((val) => (<ArgumentPane against = {val.against} title={val.title} arguments = {val.evidence} evidence = {val.citations}/>))}
            </div>
        </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debate);