import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() {
        return(        <Product productName = {this.props.productName} />         )
    }
}

export default Products;