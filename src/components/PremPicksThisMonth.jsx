import { AiFillThunderbolt } from "react-icons/ai";
import ButtonStartReading from "../utils/ButtonStartReading";
import ButtonLibrary from "../utils/ButtonLibrary";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import premiumbooks from "../data/PremiumBooks";
import { useNavigate } from "react-router";

const PremPicksThisMonth = () => {
  const navigate = useNavigate();

  const goToReadPremium = (id) => {
    navigate(`/read_premium/${id}`);
  };

  const goToDetailStoryPrem = (id) => {
    navigate(`/detail_story_premium/${id}`);
  };

  return (
    <>
      <div>
        <div className="bg-[#F6F2FF] w-full h-45 flex flex-col items-center">
          <p className="text-gray-800 font-semibold text-center mt-5 mb-5">
            Get free monthly bundle of 5+ Wattpad Originals with <br />
            any Premium or Premium+ plan.
          </p>
          <div className="bg-[#291C61] flex items-center gap-1 rounded-full px-5 py-2.5 w-45 my-5">
            <AiFillThunderbolt color="white" />
            <button className="font-bold text-white">Subscribe now</button>
          </div>
        </div>

        {/* this is the content area */}
        {premiumbooks.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col mt-6 mx-5 mb-5">
              <div className="mt-2 flex gap-5 mb-3">
                <img
                  src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
                  alt=""
                  width={130}
                  className="rounded-md cursor-pointer"
                  onClick={() => goToDetailStoryPrem(item.id)}
                />
                <div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="font-semibold my-3 cursor-pointer">
                    {item.author}
                  </p>
                  <div className="flex items-center gap-4 mt-5 mb-2">
                    <div className="flex items-center gap-2 mt-2">
                      <IoEyeSharp size={16} color="gray" />
                      <p className="text-sm font-semibold text-gray-400">
                        {item.views}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <IoIosStar size={15} color="gray" />
                      <p className="text-sm font-semibold text-gray-400">
                        {item.votes}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaList size={14} color="gray" />
                      <p className="text-sm font-semibold text-gray-400">
                        {item.chapters}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center flex-wrap">
                    {item.tags.map((tag, idx) => {
                      const isLastItem = idx === item.tags.length - 1;
                      return (
                        <p
                          key={idx}
                          className={`text-sm font-bold mt-2 rounded-full py-1 px-3
                    ${
                      isLastItem
                        ? "text-gray-700"
                        : "bg-[#E2E2E2] text-gray-800"
                    }`}
                        >
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p
                className="mt-1 text-gray-700 mb-4 cursor-pointer"
                onClick={() => goToDetailStoryPrem(item.id)}
              >
                What happens when an arrogant hockey star falls for an honor
                student that only wants to stay away from trouble ? On the ice,
                Caleb Dawson is unstoppable, but his talent alone might not be
                enough to win Jennifer's...
              </p>
              <div className="flex gap-5 my-5">
                <div className="flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2">
                  <ButtonStartReading />
                  <button
                    className="font-bold text-white cursor-pointer"
                    onClick={() => goToReadPremium(item.id)}
                  >
                    Start reading
                  </button>
                </div>
                <div className="flex items-center gap-2 border-2 border-nautral-950 rounded-full px-6 py-2">
                  <ButtonLibrary />
                  <button className="font-bold">Library</button>
                </div>
              </div>
              <hr className="my-6 text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PremPicksThisMonth;
