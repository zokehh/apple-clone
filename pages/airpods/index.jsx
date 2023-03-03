import AirPodsElemet from "../../components/AirPods/AirPodsElement"
import { getSession } from "next-auth/react"

const AirPods = () => {
   return (
      <AirPodsElemet />
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

export default AirPods