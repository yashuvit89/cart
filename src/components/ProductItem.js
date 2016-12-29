import React, { Component } from 'react'
import { Link } from 'react-router'

class ProductItem extends Component {

  render() {
    const { product } = this.props
    return (
      <li className="product-item">
        <Link to={"detail/" + product.prodId}>
          <img src={require(`../css/assets/${product.image}`)} alt={product.name} width="150px" height="150px"/>
          <div className="productContent">
            <h5>{product.name}</h5>
            <div className="measurement">
              {product.measurement}
            </div>
            <div className="price">
              $ {product.price}
            </div>
            {this.props.isCart ? <h5> Quantity {this.props.count}</h5> : <div id={product.prodId} className="addToCartBtn" onClick={this.props.addToCart}>Add To Cart</div>}

          </div>
        </Link>
      </li>
    )
  }
}

export default ProductItem
