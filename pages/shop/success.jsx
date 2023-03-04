import { getServerSession } from "next-auth"
import SuccessElement from "../../components/Success/SuccessElement"
import { authOptions } from "../api/auth/[...nextauth]"

const Success = () => {
   return (
      <SuccessElement />
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

export default Success