import { MdPersonAdd } from "react-icons/md";
import { Link } from "react-router";

const HeaderNotification = () => {
  return (
    <>
      <div className="sticky top-0 bg-white w-full h-17 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-semibold">Updates</h1>
          <MdPersonAdd size={35} />
        </div>
        <div className="flex items-center justify-between bg-gray-100 py-5 font-semibold text-sm w-full px-18 border-b border-gray-300 shadow-sm">
          <Link to={"/notification"}><p className="active font-bold cursor-pointer">NOTFICIATIONS</p ></Link>
          <Link to={"/messages"}><p className="cursor-pointer">MESSAGES</p ></Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNotification;
