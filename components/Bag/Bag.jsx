import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './Bag.module.css'
import BagItem from './BagItem'


const BagElement = () => {
   const ctx = useContext(CartContext)

   const cartItems = ctx.cartItems

   const formattedPrice = ctx.total.toLocaleString('en-US', {
      minimumFractionDigits: 2 
   })

   const totalWithVat = (ctx.total + (ctx.total * 0.07)).toLocaleString('en-US', {
      minimumFractionDigits: 2
   })

   useEffect(() => {
      ctx.setTotalWithVat(totalWithVat)
   }, [ctx.total])

   return (
      <div className={classes.container}>
         {ctx.cartItems.length === 0 && 
            <div className={classes.empty}>
               <h1>Your bag is empty.</h1>
               <p>Sign in to see if you have any saved items. Or continue shopping.</p>
               <Link href='/iphone'><button>Continue Shopping</button></Link>
            </div>
         }

         {ctx.cartItems.length > 0 && 
         <div>
            <div className={classes.header}>
               <h1>Your bag total is ${formattedPrice}</h1>
               <p>Buy online and get fast, free, contactless delivery.</p>
               <Link href='/shop/checkout'><button>Check Out</button></Link>
            </div>

            <div className={classes.bagItems}>
               {cartItems.map(item => <BagItem key={item.id} item={item} />)}
            </div>

            <div className={classes.checkout}>
               <div className={classes.pricing}>
                  <div>
                     <p>Subtotal</p>
                     <p>${formattedPrice}</p>
                  </div>
                  <div>
                     <p>Shipping</p>
                     <p>FREE</p>
                  </div>
               </div>

               <div className={classes.total}>
                  <div>
                     <h4>Total</h4>
                     <div>
                        <h4>${totalWithVat}</h4>
                        <p>Includes VAT</p>
                     </div>
                  </div>

                  <Link href='/shop/checkout'><button className={classes.checkoutBtn}>Check Out</button></Link>
               </div>
            </div>
         </div>}
      </div>
   )
}

export default BagElement