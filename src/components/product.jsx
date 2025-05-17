import { Component } from "react";
import styled from './product.moudle.css';

class Product extends Component {
    count = 15;  // constructor attribute
    render() {
   

        return (
            <>  
                <span className='m-2 text-info' >product name</span>
            
                <span className='m-2 badge bg-primary'>{this.format ()}</span>
            
                <span className='m-2 badge bg-primary'></span>
              
                {/* STAND A LINE => .bind(this) */}
                <button onClick = {this.handelIncrement.bind(this)} className='m-2 btn btn-sm btn-success'>+</button>
              
                {/* Arrow Function */}
                <button onClick = {this.handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
              
                {/*  method (paramter) => {()=> this.method(paramter)} */}
                <button onClick = {()=> {this.handelDelete(55)}} className='m-2 btn btn-sm btn-danger'>delete</button>    
            
           </>
        )
    }
    handelIncrement(){
        console.log('Increament', this)
    }
    handelDecrement = () =>{
        console.log('Decrement', this)
    }
    handelDelete(itemNmber){
        console.log('Delete', itemNmber)
    }

    format (){
        return this.count === 0 ? 'zero' : this.count;
    }
}

export default Product;