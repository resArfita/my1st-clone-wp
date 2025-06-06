import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { IoShareSocial } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import NavbarRead from "../components/NavbarRead";
import HeaderRead from "../components/HeaderRead";
import { useEffect, useRef, useState } from "react";
import SidebarRead from "../components/SidebarRead";
import { useParams } from "react-router";
import originalsbook from "../data/OriginalsBook";

const StoryPageOri = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const { id } = useParams();

  const storyIdPrem = originalsbook.find((item) => item.id === parseInt(id));

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        headerRef.current?.contains(e.target) ||
        footerRef.current?.contains(e.target)
      ) {
        return;
      }
      setShowNavbar((prev) => !prev);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <div className="relative h-screen bg-white overflow-hidden">
        {/* sidebar overlaying the main content and the navbars */}
        {showSidebar && (
          <>
            <div
              className="absolute top-0 left-0 w-full h-full bg-transparent z-30"
              onClick={toggleSidebar}> 
            </div> {/* the toggleSifebar gonna closes sidebar when clicking outside */}
            <div className="absolute top-0 right-0 h-full w-80 z-50 bg-white overflow-y-auto border-l border-gray-300">
              <SidebarRead />
            </div>
          </>
        )}
        {/* header need to be overlayed / on top of the main content */}
        {showNavbar && (
          <HeaderRead ref={headerRef} onToggleSidebar={toggleSidebar} />
        )}

        <div className="pt-4 flex flex-col mx-5">
          <h1 className="text-xl mx-auto">{storyIdPrem.chapterContent[0].subtitle}</h1>
          <div className="flex items-center gap-3 mx-auto my-16">
            <div className="flex items-center gap-1">
              <MdOutlineRemoveRedEye size={23} />
              <p>{storyIdPrem.views}</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdStarOutline size={26} />
              <p>{storyIdPrem.votes}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiComment size={17} />
              <p>{storyIdPrem.comments}</p>
            </div>
          </div>
          <div className="">
            <p className="text-md">
              {storyIdPrem.chapterContent[0].content}
            </p>
          </div>
          <div className="flex items-center gap-18 mx-auto bottom-0">
            <div className="flex flex-col items-center gap-1">
              <IoMdStarOutline size={30} className="text-wp-orange" />
              <p className="text-sm">{storyIdPrem.votes}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <BiComment size={30} className="text-wp-orange" />
              <p className="text-sm">{storyIdPrem.comments}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <IoShareSocial size={30} className="text-wp-orange" />
              <p className="text-sm">Share</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-violet-800">
              <AiFillThunderbolt size={30} />
              <p className="text-sm">No ads</p>
            </div>
          </div>
        </div>

        {showNavbar && <NavbarRead ref={footerRef} />}
      </div>
    </>
  );
};

export default StoryPageOri;
