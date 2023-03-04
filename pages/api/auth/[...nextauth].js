import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '../../../helpers/db'
import { verifyPasswords } from '../../../helpers/password'

export const authOptions = {
   session: {
      jwt: true,
   },
   providers: [
      CredentialsProvider({
         name: 'credentials',
         async authorize(credentials) {
            const client = await connectToDatabase()
            const usersCollection = client.db().collection('users3')
            const user = await usersCollection.findOne({email: credentials.email})
            
            if (!user) {
               client.close()
               throw new Error('User does not exist!')
            }
            
            const arePasswordsValid = await verifyPasswords(credentials.password, user.password)
            
            if (!arePasswordsValid) {
               client.close()
               throw new Error("Passwords don't match!")
            }
            
            client.close()
            return { email: user.email }
         }
      })
   ],
   
   pages: {
      signIn: '/auth',
   },

   callbacks: {
      authorized({ req , token }) {
         if(token) return true // If there is a token, the user is authenticated
      }
   },

   secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)