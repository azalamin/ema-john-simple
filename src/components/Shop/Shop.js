import React, { useEffect, useState } from 'react';
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
                <h4>Order Summary</h4>
                <div className="order-info">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: {total}</p>
                    <p>Total Shipping Charge: {shipCost}</p>
                    <p>Tax: {tax}</p>
                    <h5>Grand Total: {total + shipCost + tax}</h5>
                    <div className="button-area">
                        <button onClick={clearCart} className='clear-btn'>Clear Cart</button>
                        <button className='review-btn'>Review Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;