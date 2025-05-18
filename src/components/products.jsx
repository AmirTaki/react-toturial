import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {
        prodects : [
            {id : 1, count : 2, productName : "labtop"},
            {id : 2, count : 5, productName : "phone"},
            {id : 3, count : 8, productName : "airpods"},
        ]
    }
    render() {
        return(      
        <>
            {this.state.prodects.map((p, index) => (
              
              // <Product key = {index} productName = {p.productName} count = {p.count} />
                
                <Product key = {index} productName = {p.productName} count = {p.count} > 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet pariatur animi, nulla iure placeat consequatur dolores minima maiores nobis quasi recusandae ea voluptates quas voluptas fuga omnis quae quam.</p>
                </Product>
          
            ))}
        </>       
        )
    }
}

export default Products;