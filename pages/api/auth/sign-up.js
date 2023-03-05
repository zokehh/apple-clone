import { connectToDatabase } from "../../../helpers/db";
import { hashPassword } from "../../../helpers/password";

const handler = async (req, res) => {
   if (req.method !== 'POST') {
      return;
   }

   const data = req.body

   const { email, password } = data

   if (!email || !email.includes('@') || !email.includes('.') || !password || password.trim().length < 7) {
      res.status(422).json({ message: 'Invalid input!' })
      return;
   }

   const client = await connectToDatabase()

   const usersCollection = client.db().collection('users3')

   const existingUser = await usersCollection.findOne({ email: email })

   if (existingUser) {
      res.status(422).json({ message: 'User already exists!' })
      client.close()
      return;
   }

   const hashedPassword = await hashPassword(password)

   const result = await usersCollection.insertOne({
      email: email,
      password: hashedPassword
   })

   client.close()
   res.status(201).json({ message: 'Successfully created an account!', result })
}

export default handler