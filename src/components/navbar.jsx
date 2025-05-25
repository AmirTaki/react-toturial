import React, {Component} from "react";
import ProductContext from "./../context/products";

class Navbar extends Component {
    static contextType = ProductContext
    // constructor
    constructor(){
        super()
        console.log('constructor -> navbar',);
    }

    // component did mount
    componentDidMount()
    {
        console.log('component did mount -> navbar')
    }
    // render
    render () {
        console.log(" render  - navbar")
        return (
            <nav className = 'navbar navbar-light bg-light'>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <span> class component </span> <br></br>
                        Navbar 
                        {this.calculateSum()}
                    </a>
                </div>
            </nav>
        )
    }

    calculateSum = () => {
        let sum = 0
        this.context.products.map(p => {
            sum += p.count;
        });
        return sum;
    }
}

export default Navbar