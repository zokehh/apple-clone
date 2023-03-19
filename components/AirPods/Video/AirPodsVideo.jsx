import Link from 'next/link'
import classes from './AirPodsVideo.module.css'

const AirPodsVideo = () => {
   return (
      <div className={classes.video}>
         <div className={classes['video-info']}>
            <h1>AirPods Pro</h1>
            <p>$249</p>
         </div>
         <div className={classes['video-links']}>
            <Link href={'/airpods/airpods-pro'}><button>Buy</button></Link>
            <Link href='/airpods/airpods-pro'>Learn more {'>'}</Link>
         </div>
      </div>
   )
}

export default AirPodsVideo