import React, { Component } from 'react';

import ProductItem from './ProductItem';
import Filter from './Filter';

import { getFilteredProducts } from '../helper';

class ProductList extends Component {

  render() {
    const { products } = this.props
    const allProducts = products.products
    const filteredProducts = getFilteredProducts(allProducts, this.props.filters);
    const productLength = filteredProducts.length;
    return (
      <section className="main">
        <Filter filters={products.filters} updateFilter={this.props.updateFilter}/>
        <article className="list">
          <div className="product-count">
              { productLength > 0 ? `Showing ${productLength} products`: 'No products found :( please try other filters'}
          </div>
          <ul className="list-of-products">
            {
              filteredProducts
              .map(prod => {
                // Get ID from image name, other properties are not unique in given data set
                prod.prodId = prod.image.split('.')[0];
                return <ProductItem key={prod.prodId} product={prod} addToCart={this.props.addToCart}/>
              })
            }
          </ul>
        </article>
      </section>
    )
  }
}

// context level router access globally to make use of router object
ProductList.contextTypes = {
  router: React.PropTypes.object
}

export default ProductList;
