import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import { NavContext } from '../../store/nav-context'
import classes from './Cart.module.css'

const Cart = () => {
   const cartCtx = useContext(CartContext)
   const navCtx = useContext(NavContext)

   const cartItems = cartCtx.cartItems

   return (
      <div className={classes.container}>
         {cartItems.length === 0 && <div className={classes.ifEmpty}>
            <h2>Your Bag is empty.</h2>
            <Link href="/shop-all">Shop now</Link>
         </div>}

         {cartItems.length !== 0 && <div className={classes.ifNotEmpty}>
            <div className={classes.header}>
               <h2>Bag</h2>
               <Link href='/shop/bag'><button onClick={navCtx.hideNav}>Review Bag</button></Link>
            </div>

            <div className={classes.cartItems}>
               {cartItems.map(item => (
                  <div className={classes.cartItem} key={Math.random()}>
                     <img src={item.cartImage} alt="" />
                     <p>{item.model}</p>
                  </div>
               ))}
            </div>
         </div>}
      </div>
   )
}

export default Cart