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
    }
    this.addToCart = this.addToCart.bind(this)
  }

  // Handle add to cart
  addToCart(e) {
      e.preventDefault();

      const prodId = e.target.id;
      console.log("Product ID", prodId);

      const cart = { ...this.state.cart };
      cart[prodId] = cart[prodId] + 1 || 1;

      this.setState({ cart });
  }

  render() {
    // Passing state from App to necessary components, can be accessible via props
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...this.state, addToCart: this.addToCart})
    });

    return (
      <div className="main">
        {console.log(this.props)}
        <Header />
        {children}
      </div>
    );
  }
}

export default App;
