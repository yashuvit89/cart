import React from 'react'
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <header>
      <ul className="nav">
        <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Browse</Link>
        <Link to="/cart" activeClassName="active">Cart</Link>
      </ul>
    </header>
  )
}

export default Header;
