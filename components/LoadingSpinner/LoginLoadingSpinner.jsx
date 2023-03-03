import classes from './LoginLoadingSpinner.module.css'

const LoginLoadingSpinner = () => {
   return (
      <div className={classes.container}>
         <img src="/images/spinner.gif" alt="loading-spinner" />
      </div>
   )
}

export default LoginLoadingSpinner