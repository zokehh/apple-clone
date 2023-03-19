import { createContext, useState } from "react";


export const NavContext = createContext()

const NavContextProvider = (props) => {
   const [isNavCartShowed, setIsNavCartShowed] = useState(false)
   const [isNavShowed, setIsNavShowed] = useState(false)

   const toggleNavCart = () => {
      setIsNavCartShowed(prevState => !prevState)
      setIsNavShowed(false)
   }

   const hideNavCart = () => {
      setIsNavCartShowed(false)
   }

   const toggleNav = () => {
      setIsNavShowed(prevState => !prevState)
      setIsNavCartShowed(false)
   }

   const hideNav = () => {
      setIsNavShowed(false)
      setIsNavCartShowed(false)
   }

   return (
      <NavContext.Provider value={{
         isNavCartShowed,
         isNavShowed,
         setIsNavCartShowed,
         toggleNavCart,
         hideNavCart,
         toggleNav,
         hideNav
      }}>
         {props.children}
      </NavContext.Provider>
   )
}

export default NavContextProvider