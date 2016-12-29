import React, { Component } from 'react';

import { getProductDetails } from '../helper';

class ProductDetail extends Component {
  render() {
    const prodId = this.props.params.id;
    const product = getProductDetails(this.props.products.products, prodId);
    return (
      <section className="main">
        <div className="product-detail">
          <div className="product-image">
            <h2>{product.name}</h2>
            <img src={require(`../css/assets/${product.image}`)} alt={product.name} width="400px" height="400px"/>
          </div>
          <div className="productMain">
            <div className="productAllDetails">
              <h3>{product.measurement}</h3>
              <h3>$ {product.price}</h3>
              <div className="prodDescription">
                <p>{product.desc}</p>
              </div>
              <a href="#" id={this.props.params.id} className="addToCartBtn" onClick={this.props.addToCart}>Add To Cart</a>
            </div>
          </div>
          {/* {productDetails.image}
          <button id={this.props.params.id} onClick={this.props.addToCart}>Add To Cart</button> */}
        </div>
      </section>
    )
  }
}

export default ProductDetail;
