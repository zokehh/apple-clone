import { getServerSession } from "next-auth"
import CheckoutElement from "../../components/Checkout/Checkout"
import { authOptions } from "../api/auth/[...nextauth]"

const Checkout = () => {
   return (
      <CheckoutElement />
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

export default Checkout