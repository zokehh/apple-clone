import { getSession } from "next-auth/react"
import IPhoneElement from "../../components/iPhone/iPhoneElement"

const iPhonePage = () => {
   return (
      <div>
         <IPhoneElement />
      </div>
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

export default iPhonePage