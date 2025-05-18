import { Component } from "react";
import styled from './product.moudle.css';

class Product extends Component {

    // state = {
    //     count : this.props.count
    // }
    render() {
   
        const {productName} = this.props
   
        return (
            <div style={{backgroundColor : 'silver'}}>  
     
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
      
        this.props.onIncrement(this.props.id)

        // const {count : c} = this.state;
        // this.setState({count : c + 1})
    }

    handelDecrement = () =>{
        
        this.props.onDecrement(this.props.id)
        
        // const {count} = this.state;
        // this.setState({count : count - 1})
    }
    handelDelete = () =>{
        this.props.onDelete(this.props.id)
    }

    format (){
        return this.props.count === 0 ? 'zero' : this.props.count;
    }
}

export default Product;