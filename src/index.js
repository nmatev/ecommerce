import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './product-list';
import data from './data';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ProductList product={data[0]} />
  </React.StrictMode>,
  document.getElementById('root')
);
