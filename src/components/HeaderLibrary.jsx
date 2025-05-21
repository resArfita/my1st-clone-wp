import { Link } from "react-router";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";


const HeaderLibrary = () => {
  return (
    <>
      <div className="sticky top-0 bg-white w-full h-17 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-semibold">Library</h1>
          <div className="flex items-center gap-5">
            <RxQuestionMarkCircled size={30} />
          <SlOptionsVertical size={20} />
          </div>
          
        </div>
        <div className="flex items-center justify-between bg-gray-100 py-5 font-semibold text-sm w-full px-6 border-b border-gray-300 shadow-sm">
          <Link to={"/library"}><p className="active font-bold cursor-pointer">CURRENT READS</p ></Link>
          <Link to={"/archive"}><p className="cursor-pointer">ARCHIVE</p ></Link>
          <Link to={"/reading_list"}><p className="cursor-pointer">READING LISTS</p ></Link>
        </div>
      </div>
    </>
  );
};

export default HeaderLibrary;
