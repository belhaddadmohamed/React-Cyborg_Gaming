import './Streamer.css'
import { FaCheckCircle } from "react-icons/fa";
import img from '../../assets/images/avatar-01.jpg'

const Streamer = () => {
  return (
    <li>
        <span>01</span>
        <img src={img} alt="" style={{"max-width": "46px", "border-radius": "50%", "margin-right": "15px"}} />
        <h6><FaCheckCircle /> LahutaM</h6>
        <div class="main-button">
            <a href="#">Follow</a>
        </div>
    </li>
  )
}

export default Streamer