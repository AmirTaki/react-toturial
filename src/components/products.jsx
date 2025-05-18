import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() {
        return(      
        <>
            <Product productName = "labtop"/>
            <Product productName = "phone"/>
            <Product productName = "airpods"/>
        </>       
        )
    }
}

export default Products;