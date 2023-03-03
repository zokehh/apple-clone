import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";

import { getIPhoneDetails } from "../../../data/iPhoneData";

import classes from "./IPhoneDetails.module.css";

import ImageSlider from "./IPhoneImageSlider/IPhoneImageSlider";
import IPhoneModel from "./Model/IPhoneModel";
import IPhoneColor from "./Color/IPhoneColor";

import { CartContext } from "../../../store/cart-context";
import IPhoneStorage from "./Storage/IPhoneStorage";
import Summary from "./Summary/Summary";
import WhatsInBox from "./WhatsInBox/WhatsInBox";

const IPhoneDetails = (props) => {
  const [color, setColor] = useState("Select");
  const [storage, setStorage] = useState();
  const [images, setImages] = useState()
  const [price, setPrice] = useState(0)
  const [isSummary, setIsSummary] = useState(false)
  const [memory, setMemory] = useState()
  const [transition, setTransition] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const cartCtx = useContext(CartContext)

  const router = useRouter();
  const iphoneModel = router.query.iphoneId;
  const data = getIPhoneDetails(iphoneModel);

  useEffect(() => {
   if (color !== "Select") {
    switch (color) {
      case 'Deep Purple':
        setImages(data.dp)
        break
      case 'Gold':
        setImages(data.gold)
        break
      case 'Silver':
        setImages(data.silver)
        break
      case 'Space Black':
        setImages(data.sb)
        break
      case 'Blue':
        setImages(data.blue)
        break
      case 'Midnight':
        setImages(data.midnight)
        break
      case 'Purple':
        setImages(data.purple)
        break
      case 'Starlight':
        setImages(data.starlight)
        break
      case 'Red':
        setImages(data.red)
        break
      case 'Green':
        setImages(data.green)
        break
        case 'Pink':
          setImages(data.pink)
          break
      }
   }
  }, [color])

  if (!data) {
    return <p>Loading...</p>;
  }

  const setColorHandler = (color) => {
    setColor(color)
    setTransition('transition')
    setTimeout(() => {
      setTransition('')
    }, 500)
  }

  const setStorageHandler = (memory) => {
    setStorage(memory);
    setIsSummary(true)
  };

  const blankColor = color.replace(' ', '')
  let fullModel;

  if (isSummary) {
    fullModel = `${data.model} ${memory.storage.memory} ${memory.storage.unit} ${color}`
  }

  const addToCartHandler = () => {
    const cartImage = `../images/iPhone/${data.imageLink}/${blankColor}Cart.png`
    const bagImage = `../images/iPhone/${data.imageLink}/${blankColor}Bag.jfif`

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.replace('/home')
      cartCtx.addToCart(cartImage, bagImage, fullModel, price)
    }, 500)
  }

  return (
    <div className={classes.container}>
      <div className={classes.textInfo}>

        <p className={classes.sobriquet}>New</p>
        <h1>Buy your {data.model}</h1>
        <p className={classes.trade}>{data.trade}</p>

      </div>
      <div className={classes.iphone}>
        <ImageSlider images={!images ? data.images : images} transition={transition} />

        <form className={classes.form}>
          <IPhoneModel 
            model={data.model} 
            pricing={data.pricing} 
            display={data.display} 
          />

          <IPhoneColor 
            color={color} 
            colors={data.colors}
            setColorHandler={setColorHandler} 
          />

          <IPhoneStorage
            color={color}
            storageArray={data.storage}
            storage={storage}
            setStorageHandler={setStorageHandler}
            setPrice={setPrice}
            setMemory={setMemory}
          />
        </form>
      </div>
      {isSummary && <Summary 
        addToCartHandler={addToCartHandler} 
        imageLink={data.imageLink} 
        fullModel={fullModel}
        model={data.model}
        price={price}
        blankColor={blankColor}
        isLoading={isLoading}
      />}

      {isSummary && <WhatsInBox
        imageLink={data.imageLink}
        blankColor={blankColor}
        model={data.model}
        cable={data.cable}
      />
      
      }
      <div className={classes.environment}>
        <h5>Our environmental goals.</h5>
        <p>As part of our efforts to reach carbon neutrality by 2030, iPhone 14 Pro and iPhone 14 Pro Max do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.</p>
        <p>We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones, which are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.</p>
      </div>
    </div>
  );
};

export default IPhoneDetails;
