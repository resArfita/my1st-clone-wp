// import { useNavigate } from "react-router"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Personalize from "../components/Personalize"
import TopPicks from "../components/TopPicks"
import EditorChoice from "../components/EditorChoice"
import Recommendation from "../components/Recommendation"
import FeaturedStory from "../components/FeaturedStory"
import PremiumPicks from "../components/PremiumPicks"
import Recommendation3 from "../components/Recommendation3"
import Recommendation4 from "../components/Recommendation4"
import Recommendation5 from "../components/Recommendation5"
import Recommendation6 from "../components/Recommendation6"
import WpOriginals from "../components/WpOriginals"
import Recommendation7 from "../components/Recommendation7"
import Recommendation8 from "../components/Recommendation8"
import Recommendation9 from "../components/Recommendation9"
import NavBar from "../components/NavBar"

const Home = () => {

    
    return (
        <>
        <Header />
        <Banner />
        <Personalize />
        <TopPicks /> {/* Recommendation1 */}
        <EditorChoice />
        <Recommendation /> {/* Recommendation2 */}
        <FeaturedStory />
        <PremiumPicks />
        <Recommendation3 />
        <Recommendation4 />
        <Recommendation5 />
        <Recommendation6 />
        <WpOriginals />
        <Recommendation7 />
        <Recommendation8 />
        <Recommendation9 />
        {/* <NavBar /> */}
        </>
        
    )
}

export default Home