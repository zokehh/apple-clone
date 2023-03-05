import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import AirPodsDetails from "../../components/AirPods/Details/AirPodsDetails"
import { authOptions } from "../api/auth/[...nextauth]"

const AirPodsDetailsPage = () => {
   return (
      <AirPodsDetails />
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

export default AirPodsDetailsPage