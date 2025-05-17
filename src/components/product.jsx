import { Component } from "react";

class Product extends Component {
    count = 15;  // constructor attribute
    name = true;  // attribute
    number = 10
    render() {
        // const count = 5
        const Ltext = ['textOne', "textTwo", "textThree"]
        return (
            <>
             { this.count !== 0 ? (
                <> 
                    {/* condition ? true : false */}
                    <span className='m-2 text-info' >{this.name  ? "product name" :'not' }</span>
                    {/* function () -> attribute */}
                    <span className='m-2 badge bg-primary'>{this.format ()}</span>
                    {/* condition && */}
                    <span className='m-2 badge bg-primary'>{this.number !== 0 && this.number}</span>
             
                    <span className='m-2 badge bg-primary'></span>
             
                    <button className='m-2 btn btn-sm btn-success'>+</button>
             
                    <button className='m-2 btn btn-sm btn-warning '>-</button>
             
                    <button className='m-2 btn btn-sm btn-danger'>delete</button>    
             
                    <ul>     
                        {Ltext.map((item, index) => <li key = {index}>{item}</li>)}
                    </ul>
                </>
          
             ) : (
                <h1>there is no product</h1>
             )}
        
            </>
        )
    }
    format (){
        // return this.count == 0 ? 'zero' : this.count;
        if (this.count == 0) return 'zero'
        else return this.count
    }
}

export default Product;