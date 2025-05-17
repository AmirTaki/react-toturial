import { Component } from "react";

class Product extends Component {
    render() {
        const count = 5;
        const list = [<li>item one</li>,<li>item two</li>,<li>item three</li>]
        const Ltext = ['textOne', "textTwo", "textThree"]
        // const maplist = Ltext.map(item => <li>{item}</li>)
        return (
            <>
              <span className='m-2 text-info' >{this.format()}</span>
              <span className='m-2 badge bg-primary'>{1 - 1}</span>
              <button className='m-2 btn btn-sm btn-success'>+</button>
              <button className='m-2 btn btn-sm btn-warning '>-</button>
              <button className='m-2 btn btn-sm btn-danger'>delete</button>

              <ul>
                {list}
              </ul>
              
              <ul>     
                {Ltext.map((item, index) => <li key = {index}>{item}</li>)}
              </ul>
            </>
        )
    }

    format(){
        return <a href = "#">product name</a>;
    }
}

export default Product;