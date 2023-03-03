import { DUMMY_AIRPODS } from '../../data/AirPodsData'
import classes from './AirPodsElement.module.css'
import AirPodsItem from './Item/AirPodsItem'

const AirPodsElemet = () => {
   return (
      <div className={classes.container}>
         {DUMMY_AIRPODS.map(item => <AirPodsItem key={item.id} items={item} />)}
      </div>
   )
}

export default AirPodsElemet