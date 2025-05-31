import RecommendationSection from "../utils/RecommendationSection";
import books
 from "../data/Books";
const Recommendation4 = () => {
    const getThreeItems = books.slice(2, 5);
    return (
        <>
        <RecommendationSection
        heading="Your next read"
        booksRec={getThreeItems}
         />
        </>
    )
}

export default Recommendation4;