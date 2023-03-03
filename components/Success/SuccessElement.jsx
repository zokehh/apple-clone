import classes from './SuccessElement.module.css'

const SuccessElement = () => {
   setTimeout(() => {
      window.location.replace('/')
   }, 2000)

   return (
      <div className={classes.container}>
         <h1>Successfully ordered!</h1>
         <img src="../images/success.png" alt="" />
         <p>Redirecting to the main page...</p>
      </div>
   )
}

export default SuccessElement