import { getSession } from "next-auth/react"
import IPhoneDetails from "../../components/iPhone/Details/IPhoneDetails"

const IPhoneDetailsPage = () => {
   return (
      <IPhoneDetails />
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

export default IPhoneDetailsPage