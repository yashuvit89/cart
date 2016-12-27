import React, { Component } from 'react';

import Cart from './Cart';
import Detail from './Detail';
import ProductList from './ProductList';
import Header from './Header';

import products from '../data/products';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
      order: {}
    }
  }
  render() {
    return (
      <div className="main">
        <Header test="value"/>
        <Cart />
        <Detail />
        <ProductList products={products}/>
      </div>
    );
  }
}

export default App;
