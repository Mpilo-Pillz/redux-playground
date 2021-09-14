import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <li><Link to='/products/p1'>Ergronomic Chair</Link></li>
                <li><Link to='/products/p2'>Bluetooth Keyboard and mouse</Link></li>
                <li><Link to='/products/p3'>Air pods</Link></li>
            </ul>
        </section>
    )
}

export default Products;