import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, price, seller, ratings, img, id} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <div className="ratings">
                    <small><p>Manufacturer {seller}</p></small>
                    <small><p>Ratings: {ratings}</p></small>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-button'>Add To Cart </button>
        </div>
    );
};

export default Product;