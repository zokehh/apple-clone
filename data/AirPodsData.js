export const DUMMY_AIRPODS = [
   {
      id: 'ap1',
      model: 'AirPods Pro',
      generation: '2nd generation',
      link: 'airpods-pro',
      price: 249,
      video: true,
      installments: '41.50/mo. for 6mo.*',
      initialDetailsImage: '/images/airpods/airpods-pro/airpods-pro-1.jfif',
      cartImage: '/images/airpods/airpods-pro/CartImage.png',
      images: [
         { id: 'i1', src: '/images/airpods/airpods-pro/airpods-pro-1.jfif'},
         { id: 'i2', src: '/images/airpods/airpods-pro/airpods-pro-2.jfif'},
         { id: 'i3', src: '/images/airpods/airpods-pro/airpods-pro-3.jfif'},
         { id: 'i4', src: '/images/airpods/airpods-pro/airpods-pro-4.jfif'},
         { id: 'i5', src: '/images/airpods/airpods-pro/airpods-pro-5.jfif'},
         { id: 'i6', src: '/images/airpods/airpods-pro/airpods-pro-6.jfif'},
      ]
   },
   {
      id: 'ap2',
      model: 'AirPods',
      generation: '3rd generation',
      link: 'airpods-3rd-generation',
      price: 169,
      installments: '28.16/mo. for 6mo.*',
      image: 'images/airpods/airpods-3.jpg',
      initialDetailsImage: '/images/airpods/3rd-generation/image1.jfif',
      cartImage: '/images/airpods/3rd-generation/CartImage.png',
      images: [
         { id: 'i1', src: '/images/airpods/3rd-generation/image1.jfif'},
         { id: 'i2', src: '/images/airpods/3rd-generation/image2.jfif'},
         { id: 'i3', src: '/images/airpods/3rd-generation/image3.jfif'},
         { id: 'i4', src: '/images/airpods/3rd-generation/image4.jfif'},
         { id: 'i5', src: '/images/airpods/3rd-generation/image5.jfif'},
         { id: 'i6', src: '/images/airpods/3rd-generation/image6.jfif'},
      ]
   },{
      id: 'ap3',
      model: 'AirPods',
      generation: '2nd generation',
      link: 'airpods-2nd-generation',
      price: 129,
      installments: '21.50/mo. for 6mo.*',
      image: 'images/airpods/airpods-2.png',
      initialDetailsImage: '/images/airpods/2nd-generation/image1.jfif',
      cartImage: '/images/airpods/airpods-pro/CartImage.png',
      images: [
         { id: 'i1', src: '/images/airpods/2nd-generation/image1.jfif'},
         { id: 'i2', src: '/images/airpods/2nd-generation/image2.jfif'},
         { id: 'i3', src: '/images/airpods/2nd-generation/image3.jfif'},
         { id: 'i4', src: '/images/airpods/2nd-generation/image4.jfif'},
         { id: 'i5', src: '/images/airpods/2nd-generation/image5.jfif'},
      ]
   }
]

export const getAirPodsDetails = (airpodsId) => {
   const data = DUMMY_AIRPODS

   const airpodsDetails = data.find(item => item.link === airpodsId)
   return airpodsDetails
}