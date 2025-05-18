import Product from "./product"
import { useState } from "react";


const Products = ({products, onIncrement, onDecrement, onDelete, onReset }) => {
   
    return (
    <>
        {/* buttons */}
        <button onClick={onReset} className = 'btn btn-primary' >Reset</button>

       {products.map((p, index) => (          
            <Product 
                onIncrement = {onIncrement}
                onDecrement = {onDecrement}
                onDelete = {onDelete}
                id = {p.id} 
                key = {index}
                count = {p.count}
                productName = {p.productName} 
            />
       ))}
    </>    
    )   
}


export default Products;