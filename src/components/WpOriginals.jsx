import Tag from "../utils/Tag";
import ButtonArrow from "../utils/ButtonArrow";
import { SiWattpad } from "react-icons/si";
import { useNavigate } from "react-router";
import originalsbook from "../data/OriginalsBook";

const WpOriginals = () => {
  const navigate = useNavigate();

  const goToWpOriginals = () => {
    navigate("/wp_originals");
  };

  const goToDetailStoryWpOri = (id) => {
    navigate(`/detail_story_wp_original/${id}`);
  };

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
      <div className="flex items-center">
           <SiWattpad size={34} color={"#fe5009"} />
           <h1 className="text-2xl font-semibold text-wp-orange">originals</h1> 
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">Your instant escape</p>
          <div className="cursor-pointer" onClick={goToWpOriginals}>
            <ButtonArrow />
          </div>
        </div>

        <div className="flex gap-3 mt-2">
          {originalsbook.map((item) => (

          <div
          key={item.id}
           className="mt-2">
            <img
              src={item.cover}
              alt=""
              width={200}
              className="rounded-md cursor-pointer"
              onClick={() => goToDetailStoryWpOri(item.id)}
            />
            <Tag name={item.tags[0]} />
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default WpOriginals;
