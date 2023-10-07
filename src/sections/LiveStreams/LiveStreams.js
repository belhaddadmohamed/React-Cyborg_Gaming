import './LiveStreams.css'
import { Carousel, SectionHeader, Stream } from '../../components/index'



const LiveStreams = () => {
  


  return (


    // <!-- ***** Featured Games Start ***** -->
        
    <div class="featured-games header-text">
        <SectionHeader title1="Live" title2="Streams" />

        <Carousel>
          <Stream />
          <Stream />
        </Carousel>


    </div>

  )
}

export default LiveStreams