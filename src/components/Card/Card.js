import './Card.css'
import { FaStar, FaDownload } from "react-icons/fa";    // https://react-icons.github.io/react-icons


const Card = (props) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
          <img src={props.img} alt=""/>
          <h4>{props.name}<br/><span>{props.platform}</span></h4>
          <ul>
          <li> <span style={{"color": "var(--color-icons)", display: "inline"}}> <FaStar /> </span> {props.rating}</li>
          <li> <span style={{"color": "var(--color-primary)", display: "inline"}}> <FaDownload /> </span> {props.downloads}</li>
          </ul>
      </div>
    </div>
  )
}

export default Card