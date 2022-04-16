import React from 'react'
import { Link } from 'react-router'

class Navlink extends React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})

export default Navlink ;