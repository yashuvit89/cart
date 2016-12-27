import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Cart from './components/Cart';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App}/>
        <Match pattern="/cart" component={Cart} />
        <Match pattern="/detail/:detailId" component={Detail} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
