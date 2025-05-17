import { Component } from "react";
import styled from './product.moudle.css';

class Product extends Component {
     // constructor attribute

    // state atribute  => state = {object}
    state = {
        count : 0,
        // productName : 'labtop'
    }
    render() {
   

        return (
            <>  
                <span className='m-2 text-info' >labtop</span>
            
                <span className='m-2 badge bg-primary'>{this.format()}</span>
            
                <span className='m-2 badge bg-primary'></span>
              
                <button onClick = {this.handelIncrement} className='m-2 btn btn-sm btn-success'>+</button>
              
                <button onClick = {this.handelDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
              
                <button onClick = {this.handelDelete} className='m-2 btn btn-sm btn-danger'>delete</button>    
            
           </>
        )
    }
    handelIncrement = ()=>{
        // this.state.count += 1; 
       
        
        /* 
        method setState : 
            1)
            this.setState({count : this.state.count + 1})
            
            2) 
            const counter  = this.state.count
            this.setState({count : counter + 1})
            
            3)
            const {count} = this.state;
            this.setState({count + 1})
        */
    
        const {count : c} = this.state;
        this.setState({count : c + 1})
     
        console.log(this.state)
    }

    handelDecrement = () =>{
        const {count} = this.state;
        this.setState({count : count - 1})
    }
    handelDelete = () =>{
        console.log('Delete')
    }

    format (){
        return this.state.count === 0 ? 'zero' : this.state.count;
    }
}

export default Product;