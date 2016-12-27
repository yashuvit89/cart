import React, { Component } from 'react';

class ProductList extends Component {

  // Navigating to particular product detail page
  goToDetailPage(e) {
      e.preventDefault();
      console.log(this);
      // TODO: remove dummy route
      this.context.router.transitionTo(`/detail/1342`);
  }

  render() {
    console.log(this.props.products);
    return (
      <div className="list">
        <h2>ProductList Page</h2>
        <button type="submit" onClick={(e) => this.goToDetailPage(e)}>Go to Detail Page</button>
      </div>
    )
  }
}

// context level router access globally to make use of router.transitionTo
ProductList.contextTypes = {
  router: React.PropTypes.object
}

export default ProductList;
