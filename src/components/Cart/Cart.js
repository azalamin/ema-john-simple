import React from 'react';
import './Cart.css';

const Cart = ({cart, total, shipCost, tax, clearCart}) => {
    return (
        <div>
            <h4 className='summary-title'>Order Summary</h4>
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
    );
};

export default Cart;