import React, { Component } from 'react'
import { Link } from 'react-router'

class ProductItem extends Component {

  render() {
    const { product } = this.props
    return (
      <li className="product-item">
        <Link to={"detail/" + product.prodId}>
          {product.name}
          {product.measurement}
          {product.price}
          <button id={product.prodId} onClick={this.props.addToCart}>Add To Cart</button>
        </Link>
      </li>
    )
  }
}

export default ProductItem
