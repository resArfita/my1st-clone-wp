import Views from "../utils/Views";
import Status from "../utils/Status";
import Time from "../utils/Time";
import ButtonArrow from "../utils/ButtonArrow";
import { useNavigate } from "react-router";


const PremiumPicks = () => {
  const navigate = useNavigate();

  const goToPremiumPicks = () => {
    navigate("/premium_picks");
    
  };

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-md font-semibold text-gray-400">
          Free for subscribers this month
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xl font-bold">Premium Picks</p>
            <Time />
          </div>
          <div  className="cursor-pointer" onClick={goToPremiumPicks}>
              <ButtonArrow />
          </div>
          
        </div>

        <div className="flex gap-5">
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
            />
          </div>

          {/* this area need to be fixed */}
          <div className="my-12 cursor-pointer">
            <p className="text-xl font-bold mb-3">The Proposal</p>
            <div className="pr-5 mb-2">
              <p className=" text-sm font-semibold text-gray-400">
                What happens when an arrogant
              </p>
              {/* <p>what happends when an arrogant hockey star falls for an honor student that only wants to stay away from him</p> */}
            </div>
            <div className="flex gap-2">
              <Views />
              <Status />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPicks;
