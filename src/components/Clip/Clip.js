import './Clip.css'
import { FaPlay, FaEye } from "react-icons/fa";


const Clip = (props) => {
    return (
        <div class="col-lg-3 col-sm-6">
            <div class="item">
            <div class="thumb">
                <img src={props.img} alt="" style={{"border-radius": "23px"}} />
                <a href={props.img} target="_blank"><FaPlay/></a>
            </div>
            <div class="down-content">
                <h4>{props.name}</h4>
                <span><FaEye style={{"color": "var(--color-primary)"}}/> {props.vues}</span>
            </div>
            </div>
        </div>
    )
}


export default Clip