import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './css/index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/detail/:id" component={ProductDetail} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
