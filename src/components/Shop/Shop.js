import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) => {
        console.log('Clicked', product)
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
                    <p>Selected Items: </p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h5>Grand Total: </h5>
                    <div className="button-area">
                        <button className='clear-btn'>Clear Cart</button>
                        <button className='review-btn'>Review Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;