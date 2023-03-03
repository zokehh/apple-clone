import classes from './NotFound.module.css'

import Link from "next/link"

const NotFound = () => {
   return (
      <div className={classes.container}>
         <h1>Page you're trying to visit doesn't exist 😥</h1>
         <Link href='/home'>Come back to the default page</Link>
      </div>
   )
}

export default NotFound