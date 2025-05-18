import Product from "./product"
import { useState } from "react";


const Products = () => {
    const [products, setProducts]  = useState(
        [
            {id : 1, count : 2, productName : "labtop"},
            {id : 2, count : 5, productName : "phone"},
            {id : 3, count : 8, productName : "airpods"},
        ]
    )
    return (
    <>
       {products.map((p, index) => (
            
            <Product key = {index} count = {p.count} productName = {p.productName} />
       ))}
    </>    
  

)   
}
export default Products;