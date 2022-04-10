import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [user] = useAuthState(auth);
    // const navigate = useNavigate();

    const handleNameBlur = (event) => {
      setName(event.target.value);
    };
    const handleEmailBlur = (event) => {
      setEmail(event.target.value);
    };
    const handleAddressBlur = (event) => {
      setAddress(event.target.value);
    };
    const handlePhoneNumberBlur = (event) => {
      setPhone(event.target.value);
    };

      const handleShipping = (event) => {
        event.preventDefault(); 
        const shipping = {name, email, address, phone };
        console.log(shipping);
      };

    return (
      <div className="form-container">
        <div className="form-main">
          <h2 className="form-title">Shipping Information</h2>
          <form onSubmit={handleShipping}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                onBlur={handlePhoneNumberBlur}
                type="text "
                name="phoneNumber "
                id=""
                required
              />
            </div>
            <input
              className="submit-button"
              type="submit"
              value="Add Shipping"
            />
          </form>
        </div>
      </div>
    );
};

export default Shipment;