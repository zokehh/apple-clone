import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { getAirPodsData } from "../../../data/AirPodsData"
import { CartContext } from "../../../store/cart-context"
import classes from './AirPodsDetails.module.css'
import AirPodsImageSlider from "./AirPodsImageSlider/AirPodsImageSlider"
import AirPodsInfo from "./AirPodsInfo/AirPodsInfo"
import AirPodsSummary from "./AirPodsSummary/AirPodsSummary"

const AirPodsDetails = () => {
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()

   const airpodId = router.query.airpodsId

   const data = getAirPodsData(airpodId)
   console.log(airpodId)

   if (!data) {
      return <p>Loading...</p>
   }

   const { model, price, installments, generation } = data

   const ctx = useContext(CartContext)

   const addToCartHandler = () => {
      const bagImage = data.cartImage
      const cartImage = data.cartImage
      setIsLoading(true)
      setTimeout(() => {
         setIsLoading(false)
         router.push('/home')
         ctx.addToCart(cartImage, bagImage, model, price)
      }, 500)
   }

   return (
      <div className={classes.container}>
         <div className={classes.informations}>
            <AirPodsInfo 
               model={model} 
               price={price} 
               installments={installments} 
               generation={generation}  
            />
            <AirPodsSummary isLoading={isLoading} addToCartHandler={addToCartHandler} />
         </div>
         <AirPodsImageSlider 
            initialDetailsImage={data.initialDetailsImage} 
            images={data.images}
         />
      </div>
   )
}

export default AirPodsDetails