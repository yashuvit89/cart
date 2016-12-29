import React, { Component } from 'react';

import ProductItem from './ProductItem';
import { getProductDetails } from '../helper';

class Cart extends Component {

  render() {
    const { cart } = this.props;
    // const product = getProductDetails(this.props.products.products, prodId);
    return (
      <section className="main">
        <div className="cart">
          <h2>Cart</h2>
          <h4>{Object.keys(cart).length} products for checkout</h4>
          <ul className="list-of-products">
            {
              Object.keys(cart)
              .map(key => {
                // Get ID from image name, other properties are not unique in given data set
                let prod = getProductDetails(this.props.products.products, key);
                prod.prodId = prod.image.split('.')[0];
                const totalCount = cart[key];
                return <ProductItem key={prod.prodId} product={prod} addToCart={this.props.addToCart} count={totalCount} isCart={true}/>
              })
            }
          </ul>
        </div>
      </section>
    )
  }
}

export default Cart;
