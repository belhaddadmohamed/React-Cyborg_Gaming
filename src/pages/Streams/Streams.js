import './Streams.css'
import { LiveStreams, TopStreamers } from '../../sections'
import { Container_8_4 } from '../../components/index'



const Streams = () => {
  return (
    <Container_8_4 component1= {<LiveStreams/>} 
                   component2= {<TopStreamers />} />
    
  )
}

export default Streams