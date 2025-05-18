import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
 
    render() {
        return(      
            <div>
               
                {/* button reset */}
                <button onClick={this.props.onReset} className = "btn btn-primary">Reset</button>

                {this.props.products.map((p, index) => (
                
                    <Product  
                        onIncrement = {this.props.onIncrement}
                        onDecrement = {this.props.onDecrement}
                        onDelete = {this.props.onDelete}
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