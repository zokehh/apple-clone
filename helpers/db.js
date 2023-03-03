import { MongoClient } from 'mongodb'

export const connectToDatabase = async () => {
   const client = await MongoClient.connect('mongodb+srv://zokehh:test123@cluster0.feni6hs.mongodb.net/?retryWrites=true&w=majority')

   return client
}