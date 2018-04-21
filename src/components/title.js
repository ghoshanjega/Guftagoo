import React, {Component} from "react"
const style = {textAlign:"center", textTransform: "uppercase"}
export default class Title extends Component {
    render () {
        if(this.props.size == "small") {
            return (<h3 style = {{...style, ...this.props.style}}>{this.props.children} </h3>);
        }else{
        return (<h1 style = {{...style, ...this.props.style }}>{this.props.children} </h1>);
        }
        
    }
}