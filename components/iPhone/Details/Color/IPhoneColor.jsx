import classes from './IPhoneColor.module.css'

const IPhoneColor = (props) => {
   const { color } = props;

   const setColorHandler = (color) => {
      props.setColorHandler(color)
   }
   
   return (
      <div className={classes.container} >
         <p>
            Finish. <span className='gray'>Pick your favourite.</span>
         </p>
         <p className={classes['iphone-color']}>Color - {props.color}</p>
         <div className={classes.colors}>
            {props.colors.map((item) => (
               <input
                  type="radio"
                  onClick={() => setColorHandler(item.colorName)}
                  key={item.id}
                  style={{ background: item.colorId }}
                  className={color === item.colorName ? classes.active : ""}
               />
            ))}
         </div>
      </div>
   )
}

export default IPhoneColor