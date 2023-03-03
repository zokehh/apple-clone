import Link from 'next/link'
import classes from './AirPodsVideo.module.css'

const AirPodsVideo = () => {
   return (
      <div className={classes.video}>
         <video autoPlay loop muted>
            <source src='https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large.mp4' />
         </video>
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