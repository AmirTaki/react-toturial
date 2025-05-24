import { Component } from "react";

import ProductContext from "./../context/products";

class Product extends Component {
    static contextType = ProductContext;
    
    render() {
   
        const {productName} = this.props
   
        return (
          
            <div >  
     
                <span className='m-2 text-info' > {productName} </span>
            
                <span className='m-2 badge bg-primary'>{this.format()}</span>
            
                <span className='m-2 badge bg-primary'></span>
              
                <button onClick = {this.handelIncrement} className='m-2 btn btn-sm btn-success'>+</button>
              
                <button onClick = {this.handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
              
                <button onClick = {this.handelDelete} className='m-2 btn btn-sm btn-danger'>delete</button>    
            
           </div>
        )
    }
    handelIncrement = ()=>{
      
        this.context.onIncrement(this.props.id)
    }

    handelDecrement = () =>{
        
        this.context.onDecrement(this.props.id)
    }
    handelDelete = () =>{
        this.context.onDelete(this.props.id)
    }

    format (){
        return this.props.count === 0 ? 'zero' : this.props.count;
    }
}

export default Product;