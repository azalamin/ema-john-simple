import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect( () => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) => {
        setCart([...cart, product])
        setTotal(total + product.price)
    }
    
    // Calculate Shipping Cost
    let shipCost = 0;
        if(cart.length >= 1){
            shipCost = 60;
        };
        if (cart.length >= 5){
            shipCost = 150;
        };
        if (cart.length >= 10){
            shipCost = 300;
        }
    
    // Calculate Tax
    let tax = Math.round(total  * .1) ;

     const clearCart = () => {
        setCart([])
        setTotal(0)
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="summary-container">
                <Cart 
                cart={cart}
                total={total}
                shipCost={shipCost}
                tax={tax}
                clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;