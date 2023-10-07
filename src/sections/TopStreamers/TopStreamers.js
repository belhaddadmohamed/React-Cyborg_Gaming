import './TopStreamers.css'
import { SectionHeader, Streamer } from '../../components';



const TopStreamers = () => {
  return (
    <div class="top-streamers">
        <SectionHeader title1="Top" title2="Streamers" />

        <ul>
            <Streamer />
            <Streamer />
        </ul>
    </div>
  )
}

export default TopStreamers