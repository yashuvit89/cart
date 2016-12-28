import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail">
        <h2>ProductDetail Page</h2>
        {this.props.params.id}
        <button id={this.props.params.id} onClick={this.props.addToCart}>Add To Cart</button>
      </div>
    )
  }
}

export default ProductDetail;
