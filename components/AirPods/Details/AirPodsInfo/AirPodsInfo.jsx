import Link from 'next/link'
import classes from './AirPodsInfo.module.css'

const AirPodsInfo = (props) => {
   const {model, generation, price, installments} = props;

   return (
      <div className={classes.container}>
         <h2>{model}</h2>
         <h2>({generation})</h2>
         <p>${price}</p>
         <p>or</p>
         <p>{installments}</p>
         <Link href='#'>
            Pay 0% APR when you choose Apple Card Monthly Installments at checkout
         </Link>

         <div className={classes.line}></div>

         <p className={classes.extraInfo}>To purchase with monthly pricing, add this item to your bag and choose to check out with Apple Card Monthly Installments.◊</p>
      </div>
   )
}

export default AirPodsInfo