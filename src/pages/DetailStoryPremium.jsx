import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import HeaderDetailStory from "../components/HeaderDetailStory";
import { FaList } from "react-icons/fa6";
import Profile1 from "../utils/Profile1";
import premiumBooks from "../data/PremiumBooks";
import { useParams } from "react-router";
import ButtonStartReading from "../utils/ButtonStartReading";
import ButtonLibrary from "../utils/ButtonLibrary";
import ButtonArrow from "../utils/ButtonArrow";
import { AiFillThunderbolt } from "react-icons/ai";
import { useNavigate } from "react-router";

const DetailStoryPremium = () => {
  const { id } = useParams();

  const detailStoryId = premiumBooks.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();
  const goToReadPremium = (id) => {
    navigate(`/read_premium/${id}`);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto flex flex-col min-h-screen">
        
        {/* cover blured */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={detailStoryId.cover}
            alt="story cover"
            className="absolute top-0 left-0 w-full h-full object-cover blur-sm scale-105"
          />
          <div className="relative z-10">
            <HeaderDetailStory />
          </div>
        </div>

        <div className="relative -top-40 flex flex-col w-full items-center px-4">
          {/* image floating */}
          <img
            src={detailStoryId.cover}
            alt="cover"
            className="w-[220px] h-auto rounded-lg shadow-lg"
          />
          <p className="mt-5 text-sm font-semibold">Wattpad Original</p>
          <p className="text-2xl font-semibold mt-4">{detailStoryId.title}</p>
          <div className="flex items-center gap-3 my-4">
            <Profile1 />
            <p className="text-gray-600 font-semibold">
              {detailStoryId.author}
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-500 font-semibold">
            <div className="flex items-center gap-1">
              <MdOutlineRemoveRedEye size={23} />
              <p>{detailStoryId.views} Reads</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdStarOutline size={26} />
              <p>{detailStoryId.votes} Votes</p>
            </div>
            <div className="flex items-center gap-1">
              <FaList size={17} />
              <p>{detailStoryId.chapters} Parts</p>
            </div>
          </div>

          <div className="flex gap-3 items-center border border-gray-300 rounded-sm my-5 mx-5 p-3 justify-between w-[90%]">
            <div className="bg-violet-900 rounded-full p-1.5">
              <AiFillThunderbolt size={18} color="red"/>
            </div>
            
            <div className="flex flex-col">
              <p className="font-bold text-lg">Premium Picks</p>
              <p className="text-gray-600 text-sm">Free for subscribers until July 1</p>
            </div>
            <ButtonArrow />
          </div>

          <div className="flex gap-4 my-5 px-5">
            <div
            className="flex items-center gap-2 bg-neutral-900 rounded-full px-9 py-2"
            onClick={() => goToReadPremium(detailStoryId.id)}>
              <ButtonStartReading />
              <button className="font-bold text-white cursor-pointer">
                Start reading
              </button>
            </div>
            <div className="flex items-center gap-2 border-2 border-nautral-950 rounded-full px-8 py-2">
              <ButtonLibrary />
              <button className="font-bold">Library</button>
            </div>
          </div>

          <div className="flex flex-col items-center mb-6 mt-3">
            <button className="p-3 w-full rounded-full bg-[#291C61] text-white flex items-center gap-2">
              <AiFillThunderbolt size={25} />
            <p className="font-bold">Go Premium+</p>
            </button>
            <p className="text-sm">Includes <span className="font-bold">200 Bonus Coins a month</span> plus all Premium perks!</p>
          </div>
          

          <div className="flex flex-col">
            <div>
              <span className=" bg-[#05594f] text-white text-sm font-semibold rounded-full py-1 px-2">
                {detailStoryId.status}
              </span>
            </div>
            <div className="flex gap-3 flex-wrap mt-3">
              {detailStoryId.tags.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm font-bold mt-2 bg-gray-200 text-gray-700 rounded-full py-3 px-5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 rounded-sm my-5 mx-5 w-[90%]">
            <p className="p-4">{detailStoryId.summary}</p>
          </div>

          <div className="flex flex-col border px-5 border-gray-300 rounded-sm mt-4 w-[90%]">
            <div className="flex items-center my-6 justify-between">
              <div className="flex items-center gap-3">
                <FaList size={21} />
                <p className="text-lg font-semibold">
                  {detailStoryId.chapters} parts
                </p>
              </div>
              <button className="text-[#280085] font-bold">See all</button>
            </div>
            {detailStoryId.chapterContent.slice(0, 3).map((item, index) => (
              <p key={index} className="my-5">
                {item.subtitle}
              </p>
            ))}
          </div>

          <hr className="w-full my-3 text-gray-400" />
          <div>
            <p className="text-md font-semibold">#29 - family</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailStoryPremium;