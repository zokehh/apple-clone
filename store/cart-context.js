import { createContext, useReducer, useState } from "react";


export const CartContext = createContext({
   cartItems: [],
   total: '',
   addToCart: () => {},
   removeFromCart: () => {},
   setCartItems: () => {}
})

const CartContextProvider = (props) => {
   const [cartItems, setCartItems] = useState([])
   const [totalWithVat, setTotalWithVat] = useState(0)
   
   const [total, setTotal] = useState(0)

   const addToCart = (cartImage, bagImage, model, price) => {

      setCartItems(prevState => {
         if (prevState.find(item => item.model === model) == null) {
            return [...prevState, {
               id: Math.random(),
               model,
               cartImage,
               bagImage,
               value: price,
               price,
               quantity: 1,
            }]
         } else {
            return cartItems.map(item => {
               if (item.model === model) {
                  return { ...item, quantity: item.quantity + 1, price: item.price + item.value }
               } else {
                  return item
               }
            })
         }
      })

      console.log(cartItems)

      setTotal(prevState => prevState + +price)

   }

   const removeFromCart = (model) => {
      setCartItems(prevState => {
         return prevState.filter(item => item.model !== model.model)
      })

      const value = model.value * model.quantity

      setTotal(prevState => prevState - value)
   }

   return (
      <CartContext.Provider value={{
         cartItems,
         total,
         addToCart,
         removeFromCart,
         setCartItems,
         setTotal,
         totalWithVat,
         setTotalWithVat,
      }}>
         {props.children}
      </CartContext.Provider>
   )
}

export default CartContextProvider