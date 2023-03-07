import classes from './AirPodsElement.module.css'
import AirPodsItem from './Item/AirPodsItem'

const AirPodsElemet = (props) => {
   const { airpodsData } = props

   return (
      <div className={classes.container}>
         {airpodsData.map(item => <AirPodsItem key={item.id} items={item} />)}
      </div>
   )
}

export default AirPodsElemet