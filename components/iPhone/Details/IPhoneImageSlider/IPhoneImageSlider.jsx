import classes from "./IPhoneImageSlider.module.css";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useState } from "react";

const IPhoneImageSlider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { images, transition } = props;

  useEffect(() => {
    setSlideIndex(0)
  }, [images])

  const nextSlide = () => {
    setSlideIndex((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevState) => prevState - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        {images.map((item) => (
          <img
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            key={item.id}
            src={item.src}
            alt=""
            className={transition}
          />
        ))}
      <div className={classes.buttons}>
        <button className={slideIndex === 0 ? classes.hide : ''} onClick={prevSlide}>
          <AiOutlineLeft />
        </button>
        <button className={slideIndex === images.length - 1 ? classes.hide : ''} onClick={nextSlide}>
          <AiOutlineRight />
        </button>
      </div>
      </div>
    </div>
  );
};

export default IPhoneImageSlider;
