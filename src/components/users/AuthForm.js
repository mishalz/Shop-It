import { useState, useRef } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";


const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }
            throw new Error(errMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        setErrorMessage(null);
        setIsLogin(true);
        dispatch(
          login({
            token: data.idToken,
            expirationTime: expirationTime.toISOString(),
          })
        );
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <div className={classes.actions}>
          {isLoading && (
            <div>
              <LoadingSpinner />
            </div>
          )}

          <button disabled={isLoading ? true : false}>
            {isLogin ? "Login" : "Create Account"}
          </button>

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
