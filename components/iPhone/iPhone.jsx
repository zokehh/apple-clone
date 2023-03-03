import Link from 'next/link'
import classes from './IPhone.module.css'

const IPhone = (props) => {
   const { model, image, pricing, link } = props.items

   const detailsLink = `/iphone/${link}`

   return (
      <Link className={classes.link} href={detailsLink}>
         <div className={classes.container}>
            <h4>{model}</h4>
            <div className={classes.imgContainer}>
               <img src={image} alt="" />
               <button>Take a closer look</button>
            </div>
            <div className={classes.bottom}>
               <p>{pricing}</p>
               <button>Buy</button>
            </div>
         </div>
      </Link>
   )
}

export default IPhone