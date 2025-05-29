import { AiFillThunderbolt } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GoClock } from "react-icons/go";

const HeaderPremiumPicks = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  // needs to update== probably use outlet in the header
  return (
    <>
      <div className="sticky top-0 bg-[#291C61] w-full h-50 pt-5 flex flex-col">
        <div className="flex items-center justify-between mx-3 py-2">
          <div onClick={goBack} className="cursor-pointer">
            <FaArrowLeft size={25} color="white" />
          </div>
          <div className="flex items-center gap-3">
            <AiFillThunderbolt className="text-white" />
            <h2 className="font-bold text-2xl text-white">Premium Picks</h2>
          </div>
          <div className="cursor-pointer">
            <RxQuestionMarkCircled size={30} color="white" />
          </div>
        </div>
        <div className="flex items-center gap-2 mx-auto mt-3 bg-white rounded-full py-1 px-3">
          <GoClock size={15} />
          <button className="text-sm font-semibold">Expiring in 15d 8h</button>
        </div>
        <div className="text-white flex justify-between mt-11">
          <Link to="/premium_picks" className="py-3 px-17 active:font-bold font-bold">This Month</Link>
          <Link to="/premium_picks2" className=" py-3 px-17 active:font-bold">Next Month</Link>
        </div>
      </div>
    </>
  );
};

export default HeaderPremiumPicks;
