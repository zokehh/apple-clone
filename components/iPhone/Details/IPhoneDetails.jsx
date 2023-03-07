import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";

import classes from "./IPhoneDetails.module.css";

import ImageSlider from "./IPhoneImageSlider/IPhoneImageSlider";
import IPhoneModel from "./Model/IPhoneModel";
import IPhoneColor from "./Color/IPhoneColor";

import { CartContext } from "../../../store/cart-context";
import IPhoneStorage from "./Storage/IPhoneStorage";
import Summary from "./Summary/Summary";
import WhatsInBox from "./WhatsInBox/WhatsInBox";
import EnvironmentGoals from "./EnvironmentGoals/EnvironmentGoals";

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
  const data = props.detailsData

  const formattedColor = color.replace(' ', '').toLowerCase()

  useEffect(() => {
    if (color !== "Select") {
      setImages(data[formattedColor])
    }
  }, [color])

  // if (!data) {
  //   return <p>Loading...</p>;
  // }

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
    const cartImage = `/images/iphone/${data.imageLink}/${blankColor}Cart.png`
    const bagImage = `/images/iphone/${data.imageLink}/${blankColor}Bag.jfif`

    setIsLoading(true)
    setTimeout(() => {
      router.push('/')
      setIsLoading(false)
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
      <EnvironmentGoals />
    </div>
  );
};

export default IPhoneDetails;