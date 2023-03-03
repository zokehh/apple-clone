import { getSession } from "next-auth/react"

const Support = () => {
   return (
      <div>
         xddd
      </div>
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

export default Support