import { getServerSession } from "next-auth"
import HomePage from "../components/HomePage/HomePage"
import { authOptions } from "./api/auth/[...nextauth]"

const Home = () => {
   return (
      <HomePage />
   )
}


export const getServerSideProps = async (context) => {
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