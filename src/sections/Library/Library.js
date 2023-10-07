import './Library.css'
import {LibraryItem, PrimaryButton} from '../../components/index'
import {SectionHeader} from '../../components/index'
import LibraryItems from "../../Data/LibraryData"


const Library = () => {

    const games = LibraryItems.games.map(item => <LibraryItem   key = {item.id}
                                                                name = {item.name} 
                                                                platform = {item.platform}
                                                                date = {item.date}
                                                                hoursPlayed = {item.hoursPlayed}
                                                                currently = {item.currently}
                                                                img = {item.img} />)




    return (

        // <!-- ***** Gaming Library Start ***** -->
            <div className="gaming-library">

                <SectionHeader title1="Your Gaming" title2="Library">
                    {games}
                </SectionHeader>


                <div className="col-lg-12">
                    <PrimaryButton>
                        View Your Library
                    </PrimaryButton>
                </div>
            </div>
        // /* <!-- ***** Gaming Library End ***** --> */

  )
}

export default Library