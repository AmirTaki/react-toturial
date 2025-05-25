import React, {Component} from "react";
import ProductContext from "./../context/products";

class Navbar extends Component {
    static contextType = ProductContext
      componentDidUpdate(){
        console.log("did update -> navbar")
    }

    
    // render
    render () {
        console.log("render -> navber")
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