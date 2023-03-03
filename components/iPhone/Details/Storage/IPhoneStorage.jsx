import classes from  './IPhoneStorage.module.css'
import StorageElement from './IPhoneStorageElement'

const IPhoneStorage = (props) => {
   const { color, storageArray, storage } = props;

   return (
      <div className={`${classes.container} ${color === "Select" ? classes.disabled : ''}`}>
         <p>
            Storage.{" "}
            <span className='gray'>How much space do you need?</span>
         </p>
         {storageArray.map((item) => (
            <StorageElement
               key={item.id}
               storage={item}
               onClick={() => {
                  props.setStorageHandler(item.storage.memory)
                  props.setPrice(item.price)
                  props.setMemory(item)
            }}
            isSelected={
               storage === item.storage.memory ? true : false
            }
            />
         ))}
      </div>
   )
}

export default IPhoneStorage