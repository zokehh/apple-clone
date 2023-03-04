import { getServerSession } from "next-auth"
import Authenticaiton from "../components/Authentication/Authentication"
import { authOptions } from "./api/auth/[...nextauth]"

const Auth = () => {
  return (
    <div>
      <Authenticaiton />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  
  if (session) {
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

export default Auth