import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { IoShareSocial } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import NavbarRead from "../components/NavbarRead";
import HeaderRead from "../components/HeaderRead";
import { useEffect, useRef, useState } from "react";


const StoryPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if(
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

      <div className="relative h-screen bg-white">
{/* header need to be overlayed */}
    {showNavbar &&
        <HeaderRead ref={headerRef} />
     }

        <div className="pt-4 flex flex-col mx-5">
          <h1 className="text-xl mx-auto">1. Chapter Title</h1>
          <div className="flex items-center gap-3 mx-auto my-16">
            <div className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye size={23} />
                  <p>53.5K</p>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStarOutline size={26} />
                  <p>4.49K</p>
                </div>
                <div className="flex items-center gap-1">
                  <BiComment size={17} />
                  <p>322</p>
                </div>
          </div>
          <div className="">
            <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. Perferendis illum quis quae sed cumque unde.</p>
          </div>
          <div className="flex items-center gap-18 mx-auto bottom-0">
            <div className="flex flex-col items-center gap-1">
                  <IoMdStarOutline size={30} className="text-wp-orange"/>
                  <p className="text-sm">4.49K</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <BiComment size={30} className="text-wp-orange" />
                  <p className="text-sm">322</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IoShareSocial size={30} className="text-wp-orange"/>
                  <p className="text-sm">Share</p>
                </div>
                <div className="flex flex-col items-center gap-1 text-violet-800">
                  <AiFillThunderbolt size={30} />
                  <p className="text-sm">No ads</p>
                </div>
          </div>
        </div>

{ showNavbar && <NavbarRead ref={footerRef} /> }
      </div>

      
    </>
  );
};

export default StoryPage;
