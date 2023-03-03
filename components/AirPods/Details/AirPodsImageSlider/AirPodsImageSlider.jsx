import { useState } from 'react'
import classes from './AirPodsImageSlider.module.css'

const AirPodsImageSlider = (props) => {
   const {images, initialDetailsImage} = props
   const [transition, setTransition] = useState('')
   const [image, setImage] = useState(initialDetailsImage)

   const setImageHandler = (image) => {
      setImage(image)
      setTransition('transition')
      setTimeout(() => {
         setTransition('')
      }, 500)
   }
   
   return (
      <div className={classes.container}>
         <img src={image} className={transition} />
         <div className={classes['image-picker']}>
            {images.map(item => 
            <img 
               onClick={() => setImageHandler(item.src)} 
               src={item.src} 
               key={item.id}
               className={image === item.src ? classes.active : ''}
            />)}
         </div>
      </div>
   )
}

export default AirPodsImageSlider