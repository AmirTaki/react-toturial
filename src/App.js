import {Component} from 'react';
import Navbar from './components/navbar';
import Products from './components/products';


class App extends Component {
    //  state 
    state = {
        products : [
            {id : 1, count : 2, productName : "labtop"},
            {id : 2, count : 5, productName : "phone"},
            {id : 3, count : 8, productName : "airpods"},
        ]
    }

    render() {
        return (
            <>
                <Navbar   products = {this.state.products}/>
                <Products 
                    products = {this.state.products}
                    onDelete = {this.handleDelte}
                    onIncrement = {this.handelIncrement}
                    onDecrement = {this.handelDecrement}
                    onReset = {this.handleReset}
                />
            </>
        )
    }


    // method delete
    handleDelte = (prouductId) => {
       const newProduct =   this.state.products.filter(p => p.id !== prouductId)
       this.setState({products : newProduct})
    } 
   
    // method reset
    handleReset = () => {
        const newProducts = this.state.products.map((p, index) => {
            p.count = 0 
            return p    
        })
        this.setState({products : newProducts})
    }

    // method  increcrement
    handelIncrement = (productId) => {
        const newProducts =  [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count += 1;
        this.setState({products : newProducts})
     }  
   
    // method Decrement
    handelDecrement = (productId) => {
        const newProducts =  [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count -= 1;
        this.setState({products : newProducts})
    }
}


export default App;