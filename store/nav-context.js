import { createContext, useState } from "react";


export const NavContext = createContext()

const NavContextProvider = (props) => {
   const [isNavShowed, setIsNavShowed] = useState(false)

   const toggleNav = () => {
      setIsNavShowed(prevState => !prevState)
   }

   const hideNav = () => {
      setIsNavShowed(false)
   }

   return (
      <NavContext.Provider value={{
         isNavShowed,
         setIsNavShowed,
         toggleNav,
         hideNav
      }}>
         {props.children}
      </NavContext.Provider>
   )
}

export default NavContextProvider