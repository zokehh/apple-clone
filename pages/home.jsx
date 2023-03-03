import { getSession } from "next-auth/react"
import HomePage from "../components/HomePage/HomePage"

const Home = () => {
   return (
      <HomePage />
   )
}

export const getServerSideProps = async (context) => {
   const session = await getSession({req: context.req})
   
   if (!session) {
      return {
         redirect: {
            destination: '/',
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