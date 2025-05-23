import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";


const HeaderSearch = () => {
  return (
    <>
      <div className="sticky top-0 bg-white w-full h-17 flex flex-col">
        
        <div className="pt-4">
          <form action="">
            <div className="flex items-center gap-2 px-5 py-2 mx-5 border border-gray-300 bg-gray-100 rounded-full">
              <FiSearch size={30} />
              <input
                type="text"
                className="w-full"
                placeholder="Search stories, people or reading lists"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between bg-white py-5 font-semibold text-sm w-full px-6 border-b border-gray-300">
          <Link to={"/library"}>
            <p className="active font-bold cursor-pointer">Romansa</p>
          </Link>
          <Link>
            <p className="cursor-pointer text-gray-600 font-semibold">
              Fiksi Remaja
            </p>
          </Link>
          <Link>
            <p className="cursor-pointer text-gray-600 font-semibold">
              Fiksi Penggemar
            </p>
          </Link>
          <IoIosArrowDown size={25} className="cursor-pointer" />
        </div>

      </div>
    </>
  );
};

export default HeaderSearch;
