import { connectToDatabase } from "../../helpers/db";

const handler = async (req, res) => {
   if (req.method !== 'POST') {
      return;
   }

   const { cart, city, country, zipcode, firstName, lastName, phone, email, streetAddress } = req.body

   if (!cart || cart.length === 0 || !city || !country || !zipcode || !firstName || !lastName || !phone || !email || !streetAddress) {
      return;
   }

   const client = await connectToDatabase()

   const ordersCollection = client.db().collection('orders')

   const result = await ordersCollection.insertOne(req.body)

   if (!result) {
      client.close()
      res.status(404).json({ message: 'Something went wrong!' })
   }

   client.close()
   res.status(201).json({ message: 'Success!'})
}

export default handler