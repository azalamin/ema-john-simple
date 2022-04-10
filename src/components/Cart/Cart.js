import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Cart.css';

const Cart = ({cart, clearCart, children}) => {
    
    let total = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping * product.quantity;
    }
    const tax = Number((total * 0.1).toFixed(0));
    const grandTotal = total + shippingCost + tax;

    return (
      <div className="cart">
        <h4 className="summary-title">Order Summary</h4>
        <div className="order-info">
          <p>Selected Items: {quantity}</p>
          <p>Total Price: ${total}</p>
          <p>Total Shipping Charge: ${shippingCost}</p>
          <p>Tax: ${tax}</p>
          <h5>Grand Total: ${grandTotal}</h5>
          <div className="button-area">
            <button onClick={clearCart} className="clear-btn">
              Clear Cart <FontAwesomeIcon className="trash-icon" icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
          </div>
        </div>
      </div>
    );
};

export default Cart;