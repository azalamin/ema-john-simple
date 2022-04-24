import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const  Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleProductRemove = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }

    return (
      <div className="shop-container">
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleProductRemove={handleProductRemove}
            />
          ))}
        </div>
        <div className="summary-container">
          <Cart cart={cart}>
            <button onClick={()=> navigate('/shipment')} className="review-btn">Proceed Shipping</button>
          </Cart>
        </div>
      </div>
    );
};

export default Orders;