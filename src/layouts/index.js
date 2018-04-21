import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
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
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
        <li>
            <Link to="/homescreen/">homescreen</Link>
          </li>
          <li>
            <Link to="/debate/">debate</Link>
          </li>
          <li>
            <Link to="/discover/">discover</Link>
          </li>
          <li>
            <Link to="/feed/">feed</Link>
          </li>
          <li>
            <Link to="/hot/">hot</Link>
          </li>
        </ul>
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
