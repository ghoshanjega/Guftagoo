import React from "react"
import PropTypes from "prop-types"
import TabLinks from '../components/tablinks'
import { connect } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBaseTheme } from "material-ui/styles";
const globalStyle = {
    fontFamily: "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
    width: "442px",
    height: "808px",
    marginLeft: "auto",
    marginRight: "auto"
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      
  
      <div style={globalStyle}>
      
        {this.props.children()}
        <div style={{margin:"40px 0"}}></div>
        <TabLinks />
      </div>
      
      
      </MuiThemeProvider>
    )
  }
}

export default DefaultLayout
