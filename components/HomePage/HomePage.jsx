import Link from 'next/link'
import classes from './HomePage.module.css'
import { AiFillApple } from "react-icons/ai";
import { getSession } from 'next-auth/react';

const HomePage = () => {
   return (
      <div className={classes.container}>
         <section className={classes.iphone14pro}>
            <h1>iPhone 14 Pro</h1>
            <p>Pro. Beyond.</p>
            <Link href='/iphone/14-pro'>Learn more {'>'}</Link>
         </section>

         <section className={classes.iphone14}>
            <h1>iPhone 14</h1>
            <p>Big and bigger.</p>
            <Link href='/iphone/14'>Learn more {'>'}</Link>
         </section>

         <section className={classes.recommended}>
            <div className={`${classes.item} ${classes.watch}`}>
               <div><AiFillApple /> WATCH</div>
               <p className={classes.sobriquet}>SERIES 8</p>

               <p>A healthy leap ahead.</p>
               <Link href='/'>Learn more {'>'}</Link>
            </div>

            <div className={`${classes.item} ${classes.airpods}`}>
               <div>AirPods Pro</div>
               <p>Feel the sound.</p>
               <Link href='/airpods/airpods-pro'>Learn more {'>'}</Link>
            </div>

            <div className={`${classes.item} ${classes.airtag}`}>
               <div>AirTag</div>

               <p>Connect once, find everywhere.</p>
               <Link href='/watch'>Learn more {'>'}</Link>
            </div>

            <div className={`${classes.item} ${classes.valentinesday}`}>
               <div>Valentie's Day</div>

               <p>Sealed with a gift.</p>
               <Link href='/watch'>Shop now {'>'}</Link>
            </div>
         </section>
      </div>
   )
}

export const getServerSideProps = async (context) => {
   const session = await getSession({req: context.req})

   if (!session) {
      return {
         redirect: {
            destination: '/xd',
            permanent: false
         }
      }
   }

   return {
      props: {
         session
      }
   }
}

export default HomePage