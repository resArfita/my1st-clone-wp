import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import HeaderDetailStory from "../components/HeaderDetailStory";
import { FaList } from "react-icons/fa6";
import Profile1 from "../utils/Profile1";


const DetailStory = () => {
  return (
    <>
      {/* cover */}
      <div className="relative bg-red-400 flex flex-col">
        <div className="bg-rose-400 h-85">
          <HeaderDetailStory />
        </div>
        <div className="absolute inset-0 top-40 flex flex-col justify-center items-center bg-transparent">
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={220}
            className="rounded-lg my-9"
          />
          <p className="text-2xl font-semibold">Title Story</p>
          <div className="flex items-center gap-3 my-4">
            <Profile1 />
            <p className="text-gray-600 font-semibold">Author</p>
          </div>
          <div className="flex items-center gap-5 text-gray-500 font-semibold">
            <div className="flex items-center gap-1">
              <MdOutlineRemoveRedEye size={23} />
              <p>53.5K</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdStarOutline size={26} />
              <p>4.49K</p>
            </div>
            <div className="flex items-center gap-1">
              <FaList size={17} />
              <p>32</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default DetailStory;