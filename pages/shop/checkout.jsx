import { getSession } from "next-auth/react"
import CheckoutElement from "../../components/Checkout/Checkout"

const Checkout = () => {
   return (
      <CheckoutElement />
   )
}

export const getServerSideProps = async (context) => {
   const session = await getSession({req: context.req})

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