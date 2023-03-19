import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import { NavContext } from '../../store/nav-context'
import classes from './Cart.module.css'
import { signOut } from "next-auth/react";
import { FaUserCircle } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Cart = () => {
   const router = useRouter()

   const cartCtx = useContext(CartContext)
   const navCtx = useContext(NavContext)

   const cartItems = cartCtx.cartItems

   const logoutHandler = async () => {
      const result = await signOut();
      router.push("/auth");
    };

   return (
      <div className={classes.container}>
         {cartItems.length === 0 && <div className={classes.ifEmpty}>
            <h2>Your Bag is empty.</h2>
            <Link onClick={navCtx.hideNav} href="/iphone">Shop now</Link>
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
         <div className={classes.profile}>
            <p className={classes.account}>My Account</p>

            <div className={classes.links}>
               <Link href='#'><p className={classes.user}><BiUser /> Profile</p></Link>
               <p onClick={logoutHandler} className={classes['sign-out']}>
                  <FaUserCircle />  Sign out
               </p>
            </div>
         </div>
      </div>
   )
}

export default Cart