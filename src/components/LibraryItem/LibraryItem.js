import './LibraryItem.css'
import { SecondaryButton } from "../../components/index"


const LibraryItem = (props) => {
  return (
    <div className="item">
        <ul>
            <li><img src={props.img} alt="" className="templatemo-item"/></li>
            <li><h4>{props.name}</h4><span>{props.platform}</span></li>
            <li><h4>Date Added</h4><span>{props.date}</span></li>
            <li><h4>Hours Played</h4><span>{props.hoursPlayed}</span></li>
            <li><h4>Currently</h4><span>{props.currently}</span></li>
            <li> <SecondaryButton>{props.currently}</SecondaryButton> </li>
        </ul>
    </div>
  )
}

export default LibraryItem



            