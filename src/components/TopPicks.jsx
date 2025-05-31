import Tag from "../utils/Tag";
import { useNavigate } from "react-router";
import premiumBooks from "../data/PremiumBooks";

const TopPicks = () => {
  const navigate = useNavigate();

  const goToDetailStoryPrem = (id) => {
    navigate(`/detail_story_premium/${id}`);
  };

    //limit to only show 3 items (need to be updated after there's slider)
    const getThreeItems = premiumBooks.slice(0, 3);

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-xl font-bold">Top picks for you</p>
        <div className="flex gap-3 mt-2">
          
          {getThreeItems.map((item) => (

          
          <div
          key={item.id}
          className="mt-2">
            <img
              src={item.cover}
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
              onClick={() => goToDetailStoryPrem(item.id)}
            />
            <Tag name={item.tags[0]} />
          </div>
))}
        </div>
      </div>
    </>
  );
};

export default TopPicks;
