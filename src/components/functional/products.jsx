import Product from "./product"
import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../../context/products";


const Products = (propes) => {
   const productsContect = useContext(ProductContext)
    return (
    <>
        {/* buttons */}
        <button onClick={productsContect.onReset} className = 'btn btn-primary' >Reset</button>

       {productsContect.products.map((p, index) => (          
            <Product 
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