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
        <ConnectedCounter />
<<<<<<< HEAD
        <ul>
        <li>
            <Link to="/yourmom.js">homescreen</Link>
          </li>
          <li>
            <Link to="/debate/">debate</Link>
          </li>
          <li>
            <Link to="../pages/discover/">discover</Link>
          </li>
          <li>
            <Link to="/feed/">feed</Link>
          </li>
          <li>
            <Link to="/hot/">hot</Link>
          </li>
        </ul>
=======
        <TabLinks />
>>>>>>> 3455c49a54d5463d7b82db9835622e9fa5db20f6
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
