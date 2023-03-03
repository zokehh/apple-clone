import { getSession } from "next-auth/react"
import SuccessElement from "../../components/Success/SuccessElement"

const Success = () => {
   return (
      <SuccessElement />
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

export default Success