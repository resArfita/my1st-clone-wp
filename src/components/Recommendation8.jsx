import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation8 = () => {
    const getThreeItems = books.slice(10, 13)
    return (
        <>
        <RecommendationSection
         heading="Because you like teenfiction" 
         booksRec={getThreeItems}/>
        </>
    )
}

export default Recommendation8;