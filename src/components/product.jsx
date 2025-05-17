import { Component } from "react";
import styled from './product.moudle.css';

class Product extends Component {
    count = 15;  // constructor attribute
    imgUrl = 'https://picsum.photos/200'
    render() {
   

        return (
            <>  
                <span className='m-2 text-info' >product name</span>
            
                <span className='m-2 badge bg-primary'>{this.format ()}</span>
            
                <span className='m-2 badge bg-primary'></span>
            
                <button className='m-2 btn btn-sm btn-success'>+</button>
            
                <button className='m-2 btn btn-sm btn-warning '>-</button>
            
                <button className='m-2 btn btn-sm btn-danger'>delete</button>    
            
            {/* style :  {}=> javaScript , {}Object */}
                <img src={this.imgUrl}  style = {{borderRadius: '50%'}} alt="" />
            </>
        )
    }
    format (){
        return this.count === 0 ? 'zero' : this.count;
    }
}

export default Product;