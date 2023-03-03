import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useRef } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './Checkout.module.css'

const CheckoutElement = () => {
   const firstNameRef = useRef()
   const lastNameRef = useRef()
   const streetAddressRef = useRef()
   const countryRef = useRef()

   const zipcodeRef = useRef()
   const cityRef = useRef()

   const emailRef = useRef()
   const phoneNumberRef = useRef()

   const router = useRouter()

   const ctx = useContext(CartContext)

   const checkoutCart = ctx.cartItems.map(item => {
      return { model: item.model, price: item.price, quantity: item.quantity }
   })

   const formSubmitHandler = async (event) => {
      event.preventDefault()

      const bodyData = {
         firstName: firstNameRef.current.value,
         lastName: lastNameRef.current.value,
         streetAddress: streetAddressRef.current.value,
         country: countryRef.current.value,

         zipcode: zipcodeRef.current.value,
         city: cityRef.current.value,

         email: emailRef.current.value,
         phone: phoneNumberRef.current.value,

         cart: checkoutCart,
         total: ctx.total
      }

      const response = await fetch('/api/order', {
         method: 'POST',
         body: JSON.stringify(bodyData),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      const data = await response.json()

      if (response.ok) {
         router.replace('/shop/success')
         setTimeout(() => {
            ctx.setCartItems([])
            ctx.setTotal(0)
         }, 1000)
      }
   }

   if (ctx.cartItems.length === 0) {
      return (
         <div className={`${classes.container} ${classes.empty}`}>
            <h1>Your Bag is Empty.</h1>
            <p>There is no items in your bag</p>
            <Link href='/iphone'><button>Continue Shopping</button></Link>
         </div>
      )
   }

   return (
      <div className={classes.container}>
         <div className={classes['header-checkout']}>
            <p>Checkout</p>
            <p className={classes.total}>Your total order is: ${ctx.totalWithVat}</p>
         </div>

         <div className={classes.checkout}>
            <h1>Where should we send your order?</h1>
            <form className={classes.form} onSubmit={formSubmitHandler}>
               <h4>Enter your name and address:</h4>
               <div className={classes.input}>
                  <input ref={firstNameRef} type="text"  required />
                  <label>First Name</label>
               </div>

               <div className={classes.input}>
                  <input ref={lastNameRef} type="text"  required />
                  <label>Last Name</label>
               </div>

               <div className={classes.input}>
                  <input ref={streetAddressRef} type="text"  required />
                  <label>Street Address</label>
               </div>

               <div className={classes.input}>
                  <input ref={countryRef} type="text" required />
                  <label>Country</label>
               </div>

               <div className={classes.zipcodeAndCity}>
                  <div className={classes.input}>
                     <input ref={zipcodeRef} type="text"  required />
                     <label className={classes['zip-code']}>Zip Code</label>
                  </div>

                  <div className={classes.input}>
                     <input ref={cityRef} type="text" required />
                     <label className={classes.city}>City, State</label>
                  </div>
               </div>

               {/*Contact*/}

               <h4 className={classes.contact}>What’s your contact information?</h4>

               <div className={classes.input}>
                  <input ref={emailRef} type="email" required />
                  <label>Email Address</label>
               </div>

               <div className={classes.input}>
                  <input ref={phoneNumberRef} type="text" required />
                  <label>Phone Number</label>
               </div>

               <div className={classes.border}></div>

               <button className={classes.button}>Confirm Order</button>
            </form>
         </div>
      </div>
   )
}

export default CheckoutElement