import Views from "../utils/Views";
import Tag from "../utils/Tag";
import { useNavigate } from "react-router";
import books from "../data/Books";

const Recommendation = () => {
  const navigate = useNavigate();

  const goToDetailStory = (id) => {
    navigate(`/detail_story/${id}`);
  }

  const getThreeItems = books.slice(3, 6);

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-xl font-bold">Recommended for you</p>
        <div className="flex gap-3 mt-2">
          {getThreeItems.map((item) => (
            
          
          <div
          id={item.id}
          className="mt-2">
            <img
              src={item.cover}
              alt={item.title}
              width={130}
              className="rounded-md cursor-pointer"
              onClick={() => goToDetailStory(item.id)}
            />
            <Tag name={item.tags[0]} />
          </div>
))}
          
        </div>
      </div>
    </>
  );
};

export default Recommendation;
