import ProductContext from "../../context/products";
import { useContext } from "react";

const Navbar = ({products}) => {
    const productContext =  useContext(ProductContext)
    return (  
            <nav className = 'navbar navbar-light bg-light'>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        functional component <br></br>
                        Navbar {calculateSum()}
                    </a>
                </div>
            </nav>
    );
    
    function calculateSum () {
        let sum = 0
        productContext.products.forEach(p => {
            sum += p.count;
        });
        return sum;
    }
}
 
export default Navbar;