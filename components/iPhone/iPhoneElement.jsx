import classes from './iPhoneElement.module.css'
import IPhone from './iPhone'

const IPhoneElement = (props) => {
   const { iphoneData } = props

   if (!iphoneData) {
      return <p>Loading...</p>
   }

   return (
      <div className={classes.container}>
         <div className={classes.header}>
            <h1>Shop iPhone</h1>

            <p>All models. <span className={classes.gray}>Take your pick.</span></p>
         </div>
         <div className={classes['all-models']}>
            {iphoneData.map(item => <IPhone key={item.id} items={item} />)}
         </div>
      </div>
   )
}

export default IPhoneElement