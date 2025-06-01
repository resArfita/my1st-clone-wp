import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation7 = () => {
    const getThreeItems = books.slice(8, 11)
    return (
        <>
        <RecommendationSection
        heading="Picked for you"
        booksRec={getThreeItems}/>
        </>
    )
}

export default Recommendation7;