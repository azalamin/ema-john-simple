import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    useEffect( () => {
        
        const savedCart = []
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                console.log(savedCart)
            }
        }
        setCart(savedCart)

    }, [products])

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        addToDb(product.id)
    }

    // Reset Cart
    const clearCart = () => {
        setCart([])
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
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;