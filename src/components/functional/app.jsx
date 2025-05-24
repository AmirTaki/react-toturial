import Navbar from "./navbar";
import Products from "./products";
import { useState } from "react";
import productContext from "../../context/products";

const App = () => {

    const [products, setProducts]  = useState(
        [
            {id : 1, count : 2, productName : "labtop"},
            {id : 2, count : 5, productName : "phone"},
            {id : 3, count : 8, productName : "airpods"},
        ]
    )
    return (
        <>
            <productContext.Provider
                value = {{
                    products  : products,
                    onIncrement  : handelIncrement,
                    onDecrement  : handelDecrement ,
                    onDelete : handleDelete ,
                    onReset  : handleReset
                }}
            >
                <Navbar />
                <Products  />
            </productContext.Provider>      
        </>
      );
      
    function handleDelete (productId) {

        const newProducts = products.filter(p => p.id !== productId)
        setProducts(newProducts)
    }

    // function Reset 
    function handleReset () {
        const newProducts = products.map(p => {
            p.count = 0;
            return p 
        })
        setProducts(newProducts)
    }

    // function increcrement
    function handelIncrement(productId) {
        const newProducts = [...products]
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count +=1;
        setProducts(newProducts)
    }

    // function Decrement
    function handelDecrement (productId) {
        const newProducts = [...products]
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count -=1;
        setProducts(newProducts)
    }

      
}
 
export default App;