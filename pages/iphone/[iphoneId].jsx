import { getServerSession } from "next-auth"
import IPhoneDetails from "../../components/iPhone/Details/IPhoneDetails"
import { authOptions } from "../api/auth/[...nextauth]"

const IPhoneDetailsPage = () => {
   return (
      <IPhoneDetails />
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

export default IPhoneDetailsPage