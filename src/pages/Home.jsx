// import { useNavigate } from "react-router"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Personalize from "../components/Personalize"
import TopPicks from "../components/TopPicks"
import EditorChoice from "../components/EditorChoice"
import Recommendation from "../components/Recommendation"

const Home = () => {

    
    return (
        <>
        <Header />
        <Banner />
        <Personalize />
        <TopPicks />
        <EditorChoice />
        <Recommendation />
        </>
        
    )
}

export default Home