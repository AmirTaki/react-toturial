import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {
        products : [
            {id : 1, count : 2, productName : "labtop"},
            {id : 2, count : 5, productName : "phone"},
            {id : 3, count : 8, productName : "airpods"},
        ]
    }
    render() {
        return(      
        <>
            {/* button reset */}
            <button onClick={this.handleReset} className = "btn btn-primary">Reset</button>

            {this.state.products.map((p, index) => (
              <Product   onIncrement = {this.handelIncrement}  onDecrement = {this.handelDecrement} onDelete = {this.handleDelte} id = {p.id} key = {index} productName = {p.productName} count = {p.count} />
            ))}
        </>       
        )
    }

    // method delete
   handleDelte = (prouductId) => {
       const newProduct =   this.state.products.filter(p => p.id !== prouductId)
       this.setState({products : newProduct})
   } 
   // method reset
   handleReset = () => {
        const newProducts = this.state.products.map((p, index) => {
            p.count = 0 
            return p    
        })
        this.setState({products : newProducts})
   }

   // method  increcrement
   handelIncrement = (productId) => {
        const newProducts =  [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count += 1;
        this.setState({products : newProducts})
 }  
   
   // method Decrement
   handelDecrement = (productId) => {
        const newProducts =  [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count -= 1;
        this.setState({products : newProducts})
    }
   }


export default Products;