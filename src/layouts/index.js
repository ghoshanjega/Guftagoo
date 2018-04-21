import React from "react"
import PropTypes from "prop-types"
import TabLinks from '../components/tablinks'
import { connect } from "react-redux"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <TabLinks />
        <ConnectedCounter />
<<<<<<< HEAD
        <TabLinks />
=======
>>>>>>> e84c5c985464b205008babf2b8f38a689185e8f2
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
