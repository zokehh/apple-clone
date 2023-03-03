import classes from './AddToCartLoadingSpinner.module.css'

const AddToCartLoadingSpinner = () => {
   return (
   <div className={classes.container}>
      <img src="/images/addToCartSpinner.gif" alt="" />
   </div>
   )
}

export default AddToCartLoadingSpinner