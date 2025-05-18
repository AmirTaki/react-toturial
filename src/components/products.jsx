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
              
              <Product onDelete = {this.handleDelte} id = {p.id} key = {index} productName = {p.productName} count = {p.count} />
                 
            ))}
        </>       
        )
    }

    // method delete
   handleDelte = (prouductId) => {
       const newProduct =   this.state.prodects.filter(p => p.id !== prouductId)
       this.setState({prodects : newProduct})
   } 
}

export default Products;