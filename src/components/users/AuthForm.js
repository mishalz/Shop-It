import { useState, useRef } from "react";
import LoadingSpinner from "../Layout/UI/LoadingSpinner";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
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

    if (isLogin) {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]${process.env.FIREBASE_WEB_API_KEY}`
      );
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_WEB_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          header: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          setErrorMessage(null);
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          setIsLogin(true);
        } else {
          return res.json().then((data) => {
            let errMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }
            setErrorMessage(errMessage);
          });
        }
      });
    }
    setIsLoading(false);
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
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLoading && (
              <div>
                <LoadingSpinner />
              </div>
            )}
            {!isLoading && isLogin
              ? "Create new account"
              : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
