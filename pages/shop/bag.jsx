import { getSession } from "next-auth/react"
import BagElement from "../../components/Bag/Bag"

const Bag = () => {
   return (
      <BagElement />
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

export default Bag