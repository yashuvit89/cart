import React, { Component } from 'react';

import ProductItem from './ProductItem';
import Filter from './Filter';

class ProductList extends Component {

  render() {
    return (
      <div className="list">
        <h2>Product List</h2>
        <Filter />
        <ul className="list-of-products">
          {
            this.props.products.products
              .map(prod => {
                // Get ID from image name, other properties are not unique in given data set
                prod.prodId = prod.image.split('.')[0];
                return <ProductItem key={prod.prodId} product={prod} addToCart={this.props.addToCart}/>
              })
          }
        </ul>
      </div>
    )
  }
}

// context level router access globally to make use of router object
ProductList.contextTypes = {
  router: React.PropTypes.object
}

export default ProductList;
