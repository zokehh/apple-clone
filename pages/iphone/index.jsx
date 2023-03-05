import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import IPhoneElement from "../../components/iPhone/iPhoneElement"
import { authOptions } from "../api/auth/[...nextauth]"

const iPhonePage = () => {
   return (
      <div>
         <IPhoneElement />
      </div>
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

export default iPhonePage