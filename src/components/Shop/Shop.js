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
        let newCart= [];
        const exist = cart.find(singleProduct => singleProduct.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else{
            const rest = cart.filter(singleProduct => singleProduct.id !== product.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
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