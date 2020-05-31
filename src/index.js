import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList';
import data from './data';

ReactDOM.render(
  <React.StrictMode>
    <ProductList product={data[0]} counter={0} />
  </React.StrictMode>,
  document.getElementById('root')
);
