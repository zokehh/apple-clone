import Link from 'next/link'
import classes from './AirPodsItem.module.css'
import AirPodsVideo from '../Video/AirPodsVideo'

const AirPodsItem = (props) => {
   const { image, model, generation, price, link, video } = props.items;

   return (
      <div className={classes.container}>
         {video && <AirPodsVideo />}
         {!video && <div>
            <img src={image} alt="" />
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