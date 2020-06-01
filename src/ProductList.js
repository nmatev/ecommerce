import React, { Component } from 'react';
import './product-list.css';
import Product from './product/Product';
import ProductPrice from './product-price/ProductPrice';

class ProductList extends Component {

    state = {
      counter: this.props.counter,
      title: "Hi be...",
      value: "",
    }

  handleClick = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleChange = event => {
    this.state({
      value: event.target.value
    })
  }

  render() {
    const { product } = this.props;
    const { counter, title, } = this.state;

    return (
      <div className="container">
        {title}
        <Product 
          product={product}
          Price={ProductPrice}
          handleClick={this.handleClick}
          counter={counter}
        />

        <input onChange={this.handleChange} />

      </div>
    )
  }
}

export default ProductList;
