import { MdPersonAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { FaList } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { RiFontSize } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { forwardRef } from "react";
import SidebarRead from "./SidebarRead";

const HeaderRead = forwardRef(({ onToggleSidebar }, props, ref) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

  return (
    <>
    {/* position absolute inset-x-0 so it's depend on the parents (in this case, the StoryPage.jsx is the relative) */}

    {/* also for the ref={ref} we forwardRef from the StoryPage (the functions are in there), so we can use the function that are in there, also same with the bottom navigation bar */}
      <div ref={ref} className="absolute inset-x-0 top-0 w-full h-17 flex flex-col bg-white border-b border-gray-300 shadow-sm">
        <div className="flex items-center justify-between px-5 py-4">
            <FaArrowLeft size={25} onClick={goBack} className="cursor-pointer" />
          <h1 className="text-2xl font-semibold">Title Story..</h1>
          <MdDownloadDone size={30} />
          <RiFontSize size={30} />
          <button onClick={onToggleSidebar} className="cursor-pointer">
            <FaList size={30} />
          </button>
        </div>
      </div>
    </>
  );
});

export default HeaderRead;
