import { MongoClient } from 'mongodb'

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.feni6hs.mongodb.net/?retryWrites=true&w=majority`

export const connectToDatabase = async () => {
   const client = await MongoClient.connect(connectionString)

   return client
}