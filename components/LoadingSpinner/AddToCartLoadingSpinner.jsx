import classes from './AddToCartLoadingSpinner.module.css'

const AddToCartLoadingSpinner = (props) => {
   const { checkout } = props;

   return (
   <div className={`${classes.container} ${checkout ? classes.checkout : ''}`}>
      <img src="/images/addToCartSpinner.gif" alt="" />
   </div>
   )
}

export default AddToCartLoadingSpinner