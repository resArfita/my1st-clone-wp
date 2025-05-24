import { AiFillThunderbolt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { IoMdStarOutline } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { forwardRef } from "react";

const NavbarRead = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-300 flex items-center justify-between px-8 pt-3 pb-3">
        <div className="flex items-center gap-18 mx-auto">
          <div className="flex flex-col items-center">
            <IoMdStarOutline size={30} className="text-wp-orange" />
            <p className="text-sm">4.49K</p>
          </div>
          <div className="flex flex-col items-center">
            <BiComment size={30} className="text-wp-orange" />
            <p className="text-sm">322</p>
          </div>
          <div className="flex flex-col items-center">
            <IoShareSocial size={30} className="text-wp-orange" />
            <p className="text-sm">Share</p>
          </div>
          <div className="flex flex-col items-center text-violet-800">
            <AiFillThunderbolt size={30} />
            <p className="text-sm">No ads</p>
          </div>
        </div>
      </div>
    </>
  );
});

export default NavbarRead;
