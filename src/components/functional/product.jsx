import { useState } from "react";

const Product = ({productName, count , id, onDelete, onIncrement , onDecrement  }) => {
    
    // const [count, setCount] = useState(propCount)
    
    return (
        <div style={{backgroundColor : 'orange'}}>  
            <span className='m-2 text-info' >{productName}</span>
        
            <span className='m-2 badge bg-primary'>{format()}</span>
        
            <span className='m-2 badge bg-primary'></span>
            
            <button   onClick = {()=>handelIncrement(id , onIncrement)} className='m-2 btn btn-sm btn-success'>+</button>
            
            <button onClick = {handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
            
            <button onClick = {handelDelete} className='m-2 btn btn-sm btn-danger'>delete</button>    
        
        </div>
 
      );



    // decrement
    function handelDecrement () {
    //   setCount(count - 1)
        onDecrement(id)
    }

    // delete
    function handelDelete (){
        onDelete(id);
    }

    // format
    function format (){
        return count === 0 ? 'zero' : count;
    }
}


// function -> out component

// increment
function handelIncrement (id, onIncrement){
    onIncrement(id);
}
export default Product;



