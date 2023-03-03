import { getSession } from "next-auth/react"
import Authenticaiton from "../components/Authentication/Authentication"

const Auth = () => {
  return (
    <div>
      <Authenticaiton />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession({req: context.req})
  
  if (session) {
     return {
        redirect: {
           destination: '/home',
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