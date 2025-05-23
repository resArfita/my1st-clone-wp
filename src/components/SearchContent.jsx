import { VscSettings } from "react-icons/vsc";
import { FaList } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";

// mockup data
const books = [
  {
    id: 1,
    title: "My Hero, My Boss",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    views: "1.33M",
    votes: "14.8K",
    chapters: "24",
    tag1: "dark",
    tag2: "cinta",
    tag3: "adult",
    tagrest: "+15 more",
  },
  {
    id: 2,
    title: "The Antagonist",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    views: "7.65M",
    votes: "408K",
    chapters: "74",
    tag1: "miskin",
    tag2: "fiksi",
    tag3: "hidupkembali",
    tagrest: "+22 more",
  },
  {
    id: 3,
    title: "Fat Princess",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    views: "1.22M",
    votes: "58.4K",
    chapters: "46",
    tag1: "gemuk",
    tag2: "romansa",
    tag3: "adult",
    tagrest: "+21 more",
  },
  {
    id: 4,
    title: "Book 4",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    views: "1.33M",
    votes: "14.8K",
    chapters: "24",
    tag1: "dark",
    tag2: "cinta",
    tag3: "adult",
    tagrest: "+15 more",
  },
  {
    id: 5,
    title: "Book 5",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    views: "1.33M",
    votes: "14.8K",
    chapters: "24",
    tag1: "dark",
    tag2: "cinta",
    tag3: "adult",
    tagrest: "+15 more",
  },
];

const SearchContent = () => {
  return (
    <>
      <div className="h-screen py-3 mt-16 mb-120">
        <div className=" flex items-center justify-between border-b border-gray-300 py-5 mx-3">
          <p className="text-xl font-bold">1.61K Stories</p>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <VscSettings />
            <p>Filters</p>
          </div>
        </div>

        {books.map((stories) => (
          <div key={stories.id} className="flex gap-4 mx-5 mt-6 mb-12">
            <img
              src={stories.cover}
              alt=""
              width={108}
              className="cursor-pointer"
            />
            <div className="cursor-pointer flex flex-col">
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
              <div className="flex gap-1 items-center">
                <p className="text-sm font-bold mt-2 bg-[#E2E2E2] text-gray-700 rounded-full py-1 px-3">
                  {stories.tag1}
                </p>
                <p className="text-sm font-bold mt-2 bg-[#E2E2E2] text-gray-700 rounded-full py-1 px-3">
                  {stories.tag2}
                </p>
                <p className="text-sm font-bold mt-2 bg-[#E2E2E2] text-gray-700 rounded-full py-1 px-3">
                  {stories.tag3}
                </p>
                <p className="text-sm font-bold mt-2 text-gray-700">{stories.tagrest}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchContent;
