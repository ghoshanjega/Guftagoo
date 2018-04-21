import React, {Component} from 'react'
import Link from "gatsby-link"
// import {Tabs, Tab} from "material-ui/Tabs"
class TabLinks extends Component{
    render () {
        return (
            <div>
                {/* <Tabs>
<Tab label="Авторизация">
Login
</Tab>
<Tab label="Регистрация">
Register
</Tab>
</Tabs> */}
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
        </div>);
    }
}
export default TabLinks