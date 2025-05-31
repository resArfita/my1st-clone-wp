import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation3 = () => {
    const getThreeItems = books.slice(5, 8);
    console.log("✅ 3 books passed to RecommendationSection:", getThreeItems);

    return (
        <>
        <RecommendationSection
        heading="We think you'll enjoy"
        booksRec={getThreeItems}
        />
        </>
    )
}

export default Recommendation3;