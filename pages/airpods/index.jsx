import AirPodsElemet from "../../components/AirPods/AirPodsElement"
import { authOptions } from "../api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

const AirPods = () => {
   return (
      <AirPodsElemet />
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

export default AirPods