import Tag from "../utils/Tag";
import { useNavigate } from "react-router";

const RecommendationSection = ({ heading, booksRec }) => {
  console.log("📚 booksRec received in RecommendationSection:", booksRec);
  const navigate = useNavigate();

  const goToDetailStory = (id) => {
    navigate(`/detail_story/${id}`);
  };

  if (!Array.isArray(booksRec)) {
    return <p className="text-red-500">Error: booksRec is not valid</p>;
  }

  return (
    <>
      {/* idk how, but the tags have to be different in each section == solved by using slice or probably in backend logic (so each section can match different tags personalize)*/}
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-xl font-bold">{heading}</p>
        <div className="flex gap-3 mt-2">

          {/* the concept in this is to set the props from the data books, we doesn't import directly the books inside this component, instead we only pass the props cz we gonna render the books data dinamically in the pages we use this component */}
          {booksRec.map((item) => (
            <div key={item.id} className="mt-2">
              <img
                src={item.cover}
                alt=""
                width={130}
                className="rounded-md cursor-pointer"
                onClick={() => goToDetailStory(item.id)}
              />
              {/* condition to safely get only the first tag */}
              {item.tags?.[0] && <Tag name={item.tags?.[0] || "untagged"} />}
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default RecommendationSection;
