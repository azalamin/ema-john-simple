import React from 'react';
import './Cart.css';

const Cart = ({cart, clearCart}) => {
    
    let total = 0;
    let shippingCost = 0;
    
    for (const product of cart) {
        total = total + product.price;
        shippingCost = shippingCost + product.shipping;
    }
    
    const tax = Number((total * 0.1).toFixed(0));
    const grandTotal = total + shippingCost + tax;

    return (
        <div className='cart'>
            <h4 className='summary-title'>Order Summary</h4>
                <div className="order-info">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${shippingCost}</p>
                    <p>Tax: ${tax}</p>
                    <h5>Grand Total: ${grandTotal}</h5>
                    <div className="button-area">
                        <button onClick={clearCart} className='clear-btn'>Clear Cart</button>
                        <button className='review-btn'>Review Order</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;