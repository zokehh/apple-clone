import { getServerSession } from "next-auth"
import BagElement from "../../components/Bag/Bag"
import { authOptions } from "../api/auth/[...nextauth]"

const Bag = () => {
   return (
      <BagElement />
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

export default Bag