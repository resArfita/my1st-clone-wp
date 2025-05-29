import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import HeaderDetailStory from "../components/HeaderDetailStory";
import { FaList } from "react-icons/fa6";
import Profile1 from "../utils/Profile1";
import books from "../data/Books";
import { useParams } from "react-router";

const DetailStory = () => {
  const { id } = useParams();

  const detailStoryId = books.find((item) => item.id === parseInt(id));

  return (
    <>
      {/* cover */}
      <div className="relative bg-red-400 flex flex-col">
        <div className="bg-rose-400 h-85">
          <HeaderDetailStory />
        </div>
        <div className="absolute inset-0 top-40 flex flex-col justify-center items-center bg-transparent">
          <img
            src={detailStoryId.cover}
            alt=""
            width={220}
            className="rounded-lg my-9"
          />
          <p className="text-2xl font-semibold">{detailStoryId.title}</p>
          <div className="flex items-center gap-3 my-4">
            <Profile1 />
            <p className="text-gray-600 font-semibold">{detailStoryId.author}</p>
          </div>
          <div className="flex items-center gap-5 text-gray-500 font-semibold">
            <div className="flex items-center gap-1">
              <MdOutlineRemoveRedEye size={23} />
              <p>{detailStoryId.views}</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdStarOutline size={26} />
              <p>{detailStoryId.votes}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaList size={17} />
              <p>{detailStoryId.chapters}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default DetailStory;