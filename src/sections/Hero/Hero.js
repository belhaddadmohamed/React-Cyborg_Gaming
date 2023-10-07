import "./Hero.css"
import { PrimaryButton } from "../../components/index"


const Hero = () => {
  return (
          // <!-- ***** Banner Start ***** -->

                <div className="main-banner">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="header-text">
                        <h6>Welcome To Cyborg</h6>
                        <h4><em>Browse</em> Our Popular Games Here</h4>

                        <PrimaryButton>
                          Browse Now
                        </PrimaryButton>
                        
                      </div>
                    </div>
                  </div>
                </div>

          // <!-- ***** Banner End ***** -->
  )
}

export default Hero