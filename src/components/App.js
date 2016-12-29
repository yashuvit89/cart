import React, { Component } from 'react';
import Header from './Header';

import products from '../data/products';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cart: {},
      filters: {}
    }
    this.addToCart = this.addToCart.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }

  /*
    Handle add to cart
    - if product already exists - increment the quantity, else add product to cart
  */
  addToCart(e) {
      e.preventDefault();
      e.target.innerText = "Added !";

      const prodId = e.target.id;
      const cart = { ...this.state.cart };
      cart[prodId] = cart[prodId] + 1 || 1;

      this.setState({ cart });
  }

  /*
    Update state with filtered products
  */
  updateFilter(filters) {
    this.setState({ filters });
  }

  render() {
    // Passing state from App to necessary components, can be accessible via props
    // Pass state + props + any methods
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child,
        {
          ...this.state,
          addToCart: this.addToCart,
          updateFilter: this.updateFilter
        })
    });

    return (
      <div className="wrapper">
        <Header />
        {children}
      </div>
    );
  }
}

export default App;
