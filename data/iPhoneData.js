export const getAllIPhones = async () => {
   const response = await fetch('https://apple-cb4f4-default-rtdb.firebaseio.com/iphone.json')
   const data = await response.json()

   const transformedData = Object.keys(data).map(iphoneKey => {
      const iphone = data[iphoneKey]
      const storageArray = Object.keys(iphone.storage).map(iphoneKey => ({
         id: iphoneKey,
         ...iphone.storage[iphoneKey]
      }))
      const colorsArray = Object.keys(iphone.colors).map(iphoneKey => ({
         id: iphoneKey,
         ...iphone.colors[iphoneKey]
      }))

      const imagesArray = Object.keys(iphone.images).map(iphoneKey => ({
         id: iphoneKey,
         ...iphone.images[iphoneKey]
      }))

      return {
         id: iphoneKey,
         ...iphone,
         storage: storageArray,
         colors: colorsArray,
         images: imagesArray,
         cable: 'USB-C to Lightning Cable'
      }
   })

   return transformedData
}

export const getIPhoneDetails = async (iphoneId) => {
   const data = await getAllIPhones()
   const iPhoneDetails = data.find(item => item.link === iphoneId)

   return iPhoneDetails
}