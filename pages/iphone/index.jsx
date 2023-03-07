import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import IPhoneElement from "../../components/iPhone/iPhoneElement"
import { DUMMY_IPHONES } from "../../data/iPhoneData"
import { authOptions } from "../api/auth/[...nextauth]"

const iPhonePage = (props) => {
   return (
      <div>
         <IPhoneElement iphoneData={props.iphoneData} />
      </div>
   )
}

export const getServerSideProps = async (context) => {
   // const session = await getSession({req: context.req})
   const iphoneData = DUMMY_IPHONES
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
         iphoneData
      }
   }
}

export default iPhonePage