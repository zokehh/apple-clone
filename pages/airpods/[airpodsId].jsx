import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import AirPodsDetails from "../../components/AirPods/Details/AirPodsDetails"
import { getAirPodsDetails } from "../../data/AirPodsData"
import { authOptions } from "../api/auth/[...nextauth]"

const AirPodsDetailsPage = (props) => {
   const { airpodsDetails } = props

   return (
      <AirPodsDetails airpodsDetails={airpodsDetails} />
   )
}

export const getServerSideProps = async (context) => {
   const session = await getServerSession(context.req, context.res, authOptions)
   // const session = await getSession({req: context.req})
   const airpodsDetails = getAirPodsDetails(context.params.airpodsId)

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
         session,
         airpodsDetails
      }
   }
}

export default AirPodsDetailsPage