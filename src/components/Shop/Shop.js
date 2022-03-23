import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
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
        
        const storedData = getStoredData();
        const savedProduct = [];
        for (const id in storedData) {
            const quantity = storedData[id];
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                addedProduct.quantity = quantity;
                savedProduct.push(addedProduct)
            }
        }
        
        setCart(savedProduct);
        
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    // Reset Cart
    const clearCart = () => {
        setCart([])
        localStorage.removeItem('shopping-cart')
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