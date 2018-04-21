import React from "react"
import PropTypes from "prop-types"
import TabLinks from '../components/tablinks'
import { connect } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBaseTheme } from "material-ui/styles";

class DefaultLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      
  
      <div>
        <TabLinks />
        {/* <ConnectedCounter /> */}

        {this.props.children()}
      </div>
      
      
      </MuiThemeProvider>
    )
  }
}

export default DefaultLayout
