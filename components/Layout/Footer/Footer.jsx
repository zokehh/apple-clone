import Link from 'next/link'
import classes from './Footer.module.css'
import { AiFillApple } from "react-icons/ai";
import { useRouter } from 'next/router';

const Footer = () => {
   const router = useRouter() 

   if (router.pathname === '/auth' || router.pathname === '/shop/success') {
      return;
   }

   return (
      <footer className={classes.footer}>
         <div className={classes.footerGrid}>
            <div className={classes.footerItem}>
               <h4>Shop and Learn</h4>

               <Link href='/store'>Store</Link>
               <Link href='/iphone'>iPhone</Link>
               <Link href='/airpods'>AirPods</Link>
               <Link href='/watch'>Watch</Link>
               <Link href='/accessories'>Accessories</Link>
               <Link href='/airtag'>AirTag</Link>
            </div>

            <div className={classes.footerItem}>
               <h4>Account</h4>

               <Link href='#'>Manage Your Apple ID</Link>
               <Link href='#'>Apple Store Account</Link>
               <Link href='#'>iCloud.com</Link>
            </div>

            <div className={classes.footerItem}>
               <h4>For Healthcare</h4>

               <Link href='#'>Apple in Healthcare</Link>
               <Link href='#'>Health on Apple Watch</Link>
               <Link href='#'>Health Records on iPhone</Link>
            </div>

            <div className={classes.footerItem}>
               <h4>Apple Values</h4>

               <Link href='#'>Accessibility</Link>
               <Link href='#'>Education</Link>
               <Link href='#'>Environment</Link>
               <Link href='#'>Privacy</Link>
            </div>
         </div>

         <div className={classes.footnote}>
            <p><AiFillApple /> Apple</p>
            <p>All rights reserved.</p>
         </div>
      </footer>
   )
}

export default Footer