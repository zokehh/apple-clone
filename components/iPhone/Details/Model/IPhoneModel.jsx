import classes from './IPhoneModel.module.css'

const Model = (props) => {
   return (
      <div className={classes.container}>
         <p className={classes.modelHeader}>
            Model.{" "}
            <span className='gray'>Which is best for you?</span>
         </p>
         <div className={classes['model-box']}>
            <div className={classes['model-and-display']}>
               <h4>{props.model}</h4>
               <p>{props.display}</p>
            </div>
            <p className={classes['trade-information']}>{props.pricing}</p>
         </div>
      </div>
   )
}

export default Model