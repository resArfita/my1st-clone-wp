import { VscSettings } from "react-icons/vsc";
import { FaList } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import books from "../data/Books"; // mockup data
import { useNavigate } from "react-router";


const SearchContent = () => {
  const navigate = useNavigate();

  const goToDetailStory = (id) => {
    navigate(`/detail_story/${id}`);
  }

  return (
    <>
      <div className="h-screen py-3 mt-16 mb-130">
        <div className=" flex items-center justify-between border-b border-gray-300 py-5 mx-3">
          <p className="text-xl font-bold">1.61K Stories</p>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <VscSettings />
            <p>Filters</p>
          </div>
        </div>

        {books.map((stories) => (
          <div
          key={stories.id}
          className="flex gap-4 mx-5 mt-6 mb-12 cursor-pointer"
          onClick={() => goToDetailStory(stories.id)}>
            <img
              src={stories.cover}
              alt=""
              width={108}
            />
            <div className="flex flex-col">
              <p className="text-lg mt-2 font-semibold">{stories.title}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye size={23} />
                  <p>{stories.views}</p>
                </div>
                <div className="flex items-center">
                  <IoMdStarOutline size={26} />
                  <p>{stories.votes}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaList size={17} />
                  <p>{stories.chapters}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="flex gap-1 items-center flex-wrap">
                {stories.tags.map((tag, idx) => {
                  // nested map to make the last item of tags have different style (no background)
                  const isLast = idx === stories.tags.length - 1;
                  return (
                  <p
                    key={idx}
                    className={`text-sm font-bold mt-2 rounded-full py-1 px-3
                  ${isLast ? "text-gray-700" : "bg-[#E2E2E2] text-gray-700"}`}
                  >
                    {tag}
                  </p>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchContent;
