import { getSession } from "next-auth/react"
import AirPodsDetails from "../../components/AirPods/Details/AirPodsDetails"

const AirPodsDetailsPage = () => {
   return (
      <AirPodsDetails />
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

export default AirPodsDetailsPage