import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
      setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
      setPassword(event.target.value);
  }
  const handleConfirmPasswordBlur = (event) => {
      setConfirmPassword (event.target.value);
  }

  if (user) {
      navigate('/shop')
  }

  const handleCreateUser = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
          setError('Confirm password mismatch!')
          return;
      }
      if (password.length < 6) {
          setError('Password should be 6 character or more');
          return;
      }

      createUserWithEmailAndPassword(email, password)
      .then(result =>{
          console.log('user created');
      })
  }

  return (
    <div className="form-container">
      <div className="form-main">
        <h2 className="form-title">Please Sign UP</h2>
        <form onSubmit={handleCreateUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="ConfirmPassword"
              id=""
              required
            />
          </div>
          <p className="error">{error}</p>
          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
        <p className="submit-down-text">
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
        <div className="alternate-login">
          <p>or</p>
        </div>
        <button className="google-login">
          <FcGoogle className="google-icon"></FcGoogle>
          <p>Continue With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Signup;
