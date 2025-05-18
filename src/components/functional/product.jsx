import { useState } from "react";

const Product = () => {
    // useState() discractor=> const [nameState, FunctionState ] = useStaet(value)
    const [count, setCount] = useState(0)
    
    return (
        <div>  
            <span className='m-2 text-info' >labtop</span>
        
            <span className='m-2 badge bg-primary'>{format()}</span>
        
            <span className='m-2 badge bg-primary'></span>
            
            <button onClick = {()=>handelIncrement(count, setCount)} className='m-2 btn btn-sm btn-success'>+</button>
            
            <button onClick = {handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
            
            <button onClick = {handelDelete} className='m-2 btn btn-sm btn-danger'>delete</button>    
        
        </div>
 
      );



    // decrement
    function handelDecrement () {
      setCount(count - 1)
    }

    // delete
    function handelDelete (){
        console.log('Delete')
    }

    // format
    function format (){
        return count === 0 ? 'zero' : count;
    }
}


// function -> out component

// increment
function handelIncrement (count, setCount){
    setCount(count + 1);
}
export default Product;




/* 
Array discratoers
const result = ['one', 'two']

const list [first, second] = result

console.log(first)

console.log(second)

*/