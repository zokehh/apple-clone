import classes from './AirPodsSummary.module.css'
import { BsBag, BsTruck } from "react-icons/bs"
import Link from 'next/link'
import AddToCartLoadingSpinner from '../../../LoadingSpinner/AddToCartLoadingSpinner'

const AirPodsSummary = (props) => {
   const { isLoading } = props


   return (
      <div className={classes.summary}>
         <div className={classes.delivery}>
            <p className={classes.icon}><BsTruck /> Delivery:</p>
            <p className={classes.indent}>In Stock</p>
            <p className={classes.indent}>Free Shipping</p>
            <Link href='#' className={classes.indent}>Get delivery dates</Link>
         </div>

         <div className={classes.pickup}>
            <p className={classes.icon}><BsBag /> Pickup:</p>
            <Link className={classes.indent} href='#'>Check availability</Link>
         </div>
         <button 
            className={`${classes.button} ${isLoading ? classes.loading : ''}`} 
            onClick={props.addToCartHandler}
         >
            {isLoading && <AddToCartLoadingSpinner />} Add to Bag
         </button>
      </div>
   )
}

export default AirPodsSummary