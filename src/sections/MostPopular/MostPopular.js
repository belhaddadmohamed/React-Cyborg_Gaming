import "./MostPopular.css"
import {Card, SectionHeader, PrimaryButton} from "../../components/index"
import gamesApi from "../../Data/MostPopularData"



const MostPopular = () => {

    const games = gamesApi.games.map((card) => <Card  key = {card.id}
                                                      name = {card.name}
                                                      platform = {card.platform} 
                                                      rating = {card.rating} 
                                                      downloads = {card.downloads} 
                                                      img = {card.img} />)
      

    return (
        // <!-- ***** Most Popular Start ***** -->
        
        <div className="most-popular">
            <div className="row">

                <SectionHeader title1="Most Popular" title2="Right Now">
                <div className="row">
                    {games}

                    <PrimaryButton>
                        Discover Popular
                    </PrimaryButton>    
                        
                </div>
                </SectionHeader>

            </div>
        </div>

        // <!-- ***** Most Popular End ***** --> 
    )
}

export default MostPopular