import classes from './WhatsInBox.module.css'

const WhatsInBox = (props) => {
   const { imageLink, blankColor, model, cable } = props

   return (
      <div className={classes.container}>
        <h1>What's in the Box</h1>
        <div className={classes.imagebox}>
          <img src={`/images/iphone/${imageLink}/${blankColor}inbox.jfif`} alt="" />
          <img src={`/images/iphone/cable.jfif`} alt="" />
        </div>
        <div className={classes.text}>
          <p>{model}</p>
          <p>{cable}</p>
        </div>
      </div>
   )
}

export default WhatsInBox