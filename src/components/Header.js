import React from 'react'
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <div className="header">
      <h2>Header</h2>
      <Link to="/cart" activeClassName="active">Cart</Link>
      <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Browse</Link>
    </div>
  )
}

export default Header;
