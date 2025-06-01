import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation6 = () => {
    const getThreeItems = books.slice(4, 7);

    return (
        <>
        <RecommendationSection
        heading="Try something new"
        booksRec={getThreeItems} />
        </>
    )
}

export default Recommendation6;