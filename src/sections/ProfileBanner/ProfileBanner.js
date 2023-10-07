import './ProfileBanner.css'
import {SectionHeader, Clip, PrimaryButton} from '../../components/index'
import ClipsData from '../../Data/ClipsData'
import userImg from "../../assets/images/profile.jpg"



const ProfileBanner = () => {


    const clips = ClipsData.clips.map((item) => <Clip key = {item.id}
                                                         name = {item.name}
                                                         vues = {item.vues}
                                                         img = {item.img} />)




    return (
        
        // <!-- ***** Banner Start ***** -->

        <div class="row">
          <div class="col-lg-12">
            <div class="main-profile ">
                <div class="row">
                    <div class="col-lg-4">
                    <img src={userImg} alt="" style={{"border-radius": "23px"}} />
                    </div>
                    <div class="col-lg-4 align-self-center">
                    <div class="main-info header-text">
                        <span>Offline</span>
                        <h4>Alan Smithee</h4>
                        <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <div class="main-border-button">
                        <a href="#">Start Live Stream</a>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 align-self-center">
                    <ul>
                        <li>Games Downloaded <span>3</span></li>
                        <li>Friends Online <span>16</span></li>
                        <li>Live Streams <span>None</span></li>
                        <li>Clips <span>29</span></li>
                    </ul>
                    </div>
                </div>




                {/* Most Popular Clips */}
                <div class="row">
                    <div class="col-lg-12">
                        <div class="clips">
                        <div class="row">

                            <SectionHeader title1="Your Most Popular" title2="Clips" />

                            {clips}

                            <PrimaryButton> Load More Clips </PrimaryButton>

                        </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>


    )
}


export default ProfileBanner