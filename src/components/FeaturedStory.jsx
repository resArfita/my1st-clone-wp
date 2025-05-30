import Views from "../utils/Views";
import Status from "../utils/Status";
import ButtonPlus from "../utils/ButtonPlus";
import originalsbook from "../data/OriginalsBook";
import { useNavigate } from "react-router";

const FeaturedStory = () => {
  const navigate = useNavigate();

  //initialize a var to choose one specific book to be rendered
  const featuredBookSpecific = originalsbook[0];

  const goToReadPremium = (id) => {
    navigate(`/read_premium/${id}`);
  }
  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-xl font-bold">Featured story</p>
        <div className="flex flex-col gap-3 mt-2">

          <div className="flex gap-5">
            <div className="mt-2">
              <img
                src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
                alt=""
                width={130}
                className="rounded-md"
              />
            </div>
            {/* this area need to be fixed ==> fixed by limit the character of summary in the book with slice */}
            <div className="mt-12">
              <p className="text-xl font-bold mb-3">{featuredBookSpecific.title}</p>
              <div className="pr-5 mb-2">
                <p className=" text-sm font-semibold text-gray-400">{featuredBookSpecific.summary.slice(0, 30)} ...</p>
              </div>
              <div className="flex gap-2">
                <Views total={featuredBookSpecific.views} />
              <Status status={featuredBookSpecific.status} />
              </div>
              
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
            className="bg-black text-white rounded-full w-full py-2.5 font-semibold cursor-pointer"
            onClick={() => goToReadPremium(featuredBookSpecific.id)}>Read now</button>
            <ButtonPlus />
          </div>

        </div>
      </div>
    </>
  );
};

export default FeaturedStory;
