import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

const Support = () => {
   return (
      <div>
         xddd
      </div>
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

export default Support