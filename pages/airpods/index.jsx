import AirPodsElemet from "../../components/AirPods/AirPodsElement"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import { DUMMY_AIRPODS } from "../../data/AirPodsData"
import { authOptions } from "../api/auth/[...nextauth]"

const AirPods = (props) => {
   return (
      <AirPodsElemet airpodsData={props.airpodsData} />
   )
}

export const getServerSideProps = async (context) => {
   const session = await getServerSession(context.req, context.res, authOptions)
   // const session = await getSession({req: context.req})
   const airpodsData = DUMMY_AIRPODS

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
         airpodsData
      }
   }
}

export default AirPods