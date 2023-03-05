import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import HomePage from "../components/HomePage/HomePage"
import { authOptions } from "./api/auth/[...nextauth]"

const Home = () => {
   return (
      <HomePage />
   )
}


export const getServerSideProps = async (context) => {
   // const session = await getSession({req: context.req})
   const session = await getServerSession(context.req, context.res, authOptions)
   
   if (!session) {
      return {
         redirect: {
            destination: '/auth',
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

export default Home