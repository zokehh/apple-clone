import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import IPhoneDetails from "../../components/iPhone/Details/IPhoneDetails"
import { getIPhoneDetails } from "../../data/iPhoneData"
import { authOptions } from "../api/auth/[...nextauth]"

const IPhoneDetailsPage = (props) => {
   return (
      <IPhoneDetails detailsData={props.iphoneDetails} />
   )
}

export const getServerSideProps = async (context) => {
   // const session = await getSession({req: context.req})
   const iphoneDetails = await getIPhoneDetails(context.params.iphoneId)
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
         session,
         iphoneDetails
      }
   }
}

export default IPhoneDetailsPage