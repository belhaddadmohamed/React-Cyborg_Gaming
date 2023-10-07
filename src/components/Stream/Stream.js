import './Stream.css'
import img from '../../assets/images/featured-01.jpg'



const Stream = () => {
  return (
    
      <div class="item">
          <div class="thumb">
              <img src={img} alt="" />
              <div class="hover-effect">
              <h6>2.4K Streaming</h6>
              </div>
          </div>
          <h4>CS-GO<br/><span>249K Downloads</span></h4>
          <ul>
              <li><i class="fa fa-star"></i> 4.8</li>
              <li><i class="fa fa-download"></i> 2.3M</li>
          </ul>
      </div>
  )
}

export default Stream