import Tag from "../utils/Tag";
import RecommendationSection from "../utils/RecommendationSection";
import books from "../data/Books";

const Recommendation5 = () => {
  const getThreeItems = books.slice(3, 6);
  
  return (
    <>

        <p className="mx-5 text-md font-semibold text-gray-400">
          Binge to start to finish
        </p>
        <RecommendationSection
        heading="Completed stories"
        booksRec={getThreeItems} />
      
    </>
  );
};

export default Recommendation5;
