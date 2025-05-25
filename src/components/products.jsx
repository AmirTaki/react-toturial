import React, { Component } from 'react';
import Product from './product';
import ProductContext from './../context/products';

class Products extends Component {
    static contextType = ProductContext;

    render() {
    
        return(      
            <div>
               
                {/* button reset */}
                <button onClick={this.context.onReset} className = "btn btn-primary">Reset</button>

                {this.context.products.map((p, index) => (
                
                    <Product  
                        // onIncrement = {this.context.onIncrement}
                        // onDecrement = {this.context.onDecrement}
                        // onDelete = {this.context.onDelete}
                        id = {p.id} 
                        key = {index} 
                        productName = {p.productName} 
                        count = {p.count} 
                    />
                ))}
            </div>       
        )
    }

   }


export default Products;