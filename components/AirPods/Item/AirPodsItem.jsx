import Link from 'next/link'
import classes from './AirPodsItem.module.css'
import AirPodsVideo from '../Video/AirPodsVideo'
import { useEffect, useState } from 'react';

const AirPodsItem = (props) => {
   const { image, imageSize, model, generation, price, link, video } = props.items;

   useEffect(() => {
      if (image) {
         setStyles({
            backgroundImage: `url(${image})`,
            backgroundSize: imageSize 
         })
      }
   }, [image, imageSize])

   const [styles, setStyles] = useState({})

   return (
      <div className={classes.container}>
         {video && <AirPodsVideo />}
         {!video && <div style={styles} className={classes.notVideo}>
            <div className={classes.info}>
               <h1>{model}</h1>
               <h5>{generation}</h5>
               <p>${price}</p>
            </div>

            <div className={classes.links}>
               <Link href={`/airpods/${link}`}><button>Buy</button></Link>
               <Link href={`/airpods/${link}`}>Learn more {'>'}</Link>
            </div>
         </div>}
      </div>
   )
}

export default AirPodsItem