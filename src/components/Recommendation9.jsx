import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation9 = () => {
    const getThreeItems = books.slice(12, 15);

    return (
        <>
        <RecommendationSection
        heading="You may enjoy"
        booksRec={getThreeItems} />
        </>
    )
}

export default Recommendation9;