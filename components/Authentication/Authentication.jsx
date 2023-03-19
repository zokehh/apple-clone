import { useRef, useState } from "react";
import classes from "./Authentication.module.css";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";
import LoginLoadingSpinner from "../LoadingSpinner/LoginLoadingSpinner";
import { MdEmail } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'

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
      <div className={classes.logo}>
        <img src="logo.webp" />
      </div>

      <div className={classes.credentialsAuth}>
        <div className={classes.email}>
          <input placeholder="Enter your email" type="email" ref={emailInputRef} />
          <label><MdEmail /></label>
        </div>

        <div className={classes.email}>
          <input placeholder="Enter your password" type="email" ref={passwordInputRef} />
          <label><BiLockAlt /></label>
        </div>

        <div className={`${classes.button} ${isLoading ? classes.loading : ''}`}>
          <button onClick={formSubmitHandler}> {isLogin ? 'Sign in' : 'Sign up'} </button>
          {isLoading && <LoginLoadingSpinner loading={isLoading ? true : false} />}
        </div>
      </div>

      <p className={classes.or}>OR</p>

      <div className={classes.authOptions}>
        <div className={classes.authOption}>
          <img src="google.png" /> {isLogin ? 'Continue' : 'Register' } with Google
        </div>
        <div className={classes.authOption}>
          <img src="fb.webp" /> {isLogin ? 'Continue' : 'Register' } with Facebook
        </div>
        <div className={`${classes.authOption} ${classes.apple}`}>
          <img src="logo.webp" /> {isLogin ? 'Continue' : 'Register' } with Apple
        </div>
      </div>

      <div className={classes.bottom}>
        <p>{!isLogin ? "Already have an account? " : "Don't you have an account? "} 
           <span onClick={switchLogInHandler}>{isLogin ? 'Sign up' : 'Sign in'}</span>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Authenticaiton;
