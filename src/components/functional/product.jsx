import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../../context/products";
import { useEffect } from "react";

const Product = ({productName, count , id}) => {
   const productContext = useContext(ProductContext)    
  

    
    return (
        <div>  
            <span className='m-2 text-info' >{productName}</span>
        
            <span className='m-2 badge bg-primary'>{format()}</span>
        
            <span className='m-2 badge bg-primary'></span>
            
            <button   onClick = {handelIncrement} className='m-2 btn btn-sm btn-success'>+</button>
            
            <button onClick = {handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
            
            <button onClick = {handelDelete} className='m-2 btn btn-sm btn-danger'>delete</button>    
        
        </div>
 
      );


    function handelIncrement (){
        productContext.onIncrement(id);
    }
    // decrement
    function handelDecrement () {
    //   setCount(count - 1)
        productContext.onDecrement(id)
    }

    // delete
    function handelDelete (){
        productContext.onDelete(id);
    }

    // format
    function format (){
        return count === 0 ? 'zero' : count;
    }
}


// function -> out component

// increment

export default Product;



