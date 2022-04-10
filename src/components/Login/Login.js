import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (error?.message.includes("wrong-password")) {
      setCustomError("Wrong Password");
    }
    if (error?.message.includes("user-not-found")) {
      setCustomError("User not found.");
    }
  }, [error]);

  if (user) {
    navigate(from, {replace: true});
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="form-main">
        <h2 className="form-title">Please Login</h2>
        <h4>{loading ? "Loading...." : ""}</h4>
        <form onSubmit={handleUserSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <p className="error">{customError}</p>
          <input className="submit-button" type="submit" value="Login" />
        </form>
        <p className="submit-down-text">
          <small>
            New to Ema-John? <Link to="/signup">Create a new account</Link>
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

export default Login;
