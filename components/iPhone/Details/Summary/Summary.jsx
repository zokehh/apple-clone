import classes from './Summary.module.css'
import { BsTruck, BsBag} from 'react-icons/bs'
import Link from 'next/link';
import AddToCartLoadingSpinner from '../../../LoadingSpinner/AddToCartLoadingSpinner';

const Summary = (props) => {
   const { imageLink, blankColor, fullModel, addToCartHandler, price, model, isLoading } = props;

   return (
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <p className={classes.model}>Your new {model}.</p>
          <p className='gray'>Just the way you want it.</p>
          <img src={`../images/iPhone/${imageLink}/${blankColor}Summary.jfif`} alt="" />
        </div>

        <div className={classes.center}>
          <div className={classes.modelAndPrice}>
            <p>{fullModel}</p>
            <p className='bold'>${price}</p>
          </div>
          <div className={classes.bonuses}>
            <p className='bold'>One-time payment</p>
            <Link href='#'>Get 3% Daily Cash with Apple Card</Link>
          </div>
        </div>

        <div className={classes.rightSide}>
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
          <button className={`${classes.addToCart} ${isLoading ? classes.loading : ''}`} onClick={addToCartHandler}>
            {isLoading && <AddToCartLoadingSpinner />}Add to Bag
          </button>
        </div>
      </div>
   )
}

export default Summary