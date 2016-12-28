import React, { Component } from 'react';

class Cart extends Component {

  render() {
    const { cart } = this.props
    console.log("cart", cart);
    return (
      <div className="cart">
        <h2>Cart Page</h2>
        {JSON.stringify(cart)}
      </div>

    )
  }
}

export default Cart;
