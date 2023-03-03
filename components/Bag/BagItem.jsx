import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './BagItem.module.css'

const BagItem = (props) => {
   const ctx = useContext(CartContext)

   const formattedItemPrice = props.item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })

   const removeItemHandler = (model) => {
      ctx.removeFromCart(model)
   }

   const decrementHandler = () => {
      ctx.setCartItems(ctx.cartItems.map(item => {
         if (item.model === props.item.model && item.quantity > 1) {
            ctx.setTotal(prevState => prevState - item.value )
            return {...item, quantity: item.quantity - 1, price: item.price - item.value }
         } else {
            return item
         }
      }))
   }

   const incrementHandler = () => {
      ctx.setCartItems(ctx.cartItems.map(item => {
         if (item.model === props.item.model) {
            ctx.setTotal(prevState => prevState + item.value)
            return { ...item, quantity: item.quantity + 1, price: item.price + item.value }
         } else {
            return item
         }
      }))
   }

   return (
      <div className={classes.container}>
         <div className={classes.image}>
            <img src={props.item.bagImage} alt="" />
         </div>

         <div className={classes.itemInfo}>
            <p className={classes.model}>{props.item.model}</p>
            <div className={classes.quantity}>
               <button 
                  className={props.item.quantity === 1 ? classes.disabled : ''} 
                  onClick={decrementHandler}>
                     {"-"}
               </button>
               <p>{props.item.quantity}</p>
               <button onClick={incrementHandler}>+</button>
            </div>
            <p className={classes.price}>${formattedItemPrice}</p>
            <button className={classes.remove} onClick={() => removeItemHandler(props.item)}>Remove</button>
         </div>

      </div>
   )
}

export default BagItem