import { useRef, useState } from "react";
import classes from "./Authentication.module.css";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";
import LoginLoadingSpinner from "../LoadingSpinner/LoginLoadingSpinner";

const Authenticaiton = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    
    if (isLogin) {
      setIsLoading(true)
       const result = await signIn('credentials', {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword
         })

      setIsLoading(false)

      if (!result.error) {
        router.replace('/')
      }       
   } else {
    setIsLoading(true)
      const response = await fetch("/api/auth/sign-up", {
         method: "POST",
         body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
         }),
         headers: {
            "Content-Type": "application/json",
         },
      });
      const data = await response.json();
      setIsLoading(false)
      if (!response.ok) {
        return;
      }
      
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      
      setIsLogin(true);
   }
};

const switchLogInHandler = () => {
 setIsLogin((prevState) => !prevState);
};

return (
  <div className={classes.authWrapper}>
    <div className={classes.container}>
        <div className={classes.authentication}>
          <img className={classes.logo} src="logo.webp" alt="" />
          <h2>{isLogin ? "Welcome back" : "Create an account"}</h2>
          <p>
            {isLogin
              ? "Please enter your details"
              : "Enter the fields below to get started"}
          </p>
          <form onSubmit={formSubmitHandler} className={classes.form}>
            <div className={classes.inputbox}>
              <input
                ref={emailInputRef}
                type="text"
                placeholder="Enter your email"
              />
              <span className="material-icons">email</span>
            </div>

            <div className={classes.inputbox}>
              <input
                ref={passwordInputRef}
                type="password"
                placeholder="Enter your password"
              />
              <span className="material-icons">lock</span>
            </div>

            <button className={`${classes.signIn} ${isLoading ? classes.loading : ''}`}>{isLoading && <LoginLoadingSpinner />}{isLogin ? "Sign in" : "Sign up"}</button>
          </form>
          <p className={classes.or}>OR</p>
          <div className={classes.authOptions}>
            <div className={`${classes.authOption}`}>
              <img src="google.png" alt="" />
              <p>{isLogin ? "Continue" : "Register"} with Google</p>
            </div>
            <div className={`${classes.authOption}`}>
              <img src="fb.webp" alt="" />
              <p>{isLogin ? "Continue" : "Register"} with Facebook</p>
            </div>
            <div className={`${classes.authOption}`}>
              <img src="logo.webp" alt="" />
              <p>{isLogin ? "Continue" : "Register"} with Apple</p>
            </div>
          </div>
          <p className={classes.bottomLink}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={switchLogInHandler}>
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
        <div className={classes.image}>
          <img src="iphone14.webp" alt="An image showing a iphone 14 pro max." />
        </div>
      </div>
    </div>
  );
};

export default Authenticaiton;
