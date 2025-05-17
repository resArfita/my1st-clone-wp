import Tag from "../utils/Tag";
import ButtonArrow from "../utils/ButtonArrow";
import { SiWattpad } from "react-icons/si";
import { useNavigate } from "react-router";

const WpOriginals = () => {
  const navigate = useNavigate();

  const goToWpOriginals = () => {
    navigate("/wp_originals");
  };

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
      <div className="flex items-center">
           <SiWattpad size={34} color={"#fe5009"} />
           <h1 className="text-2xl font-semibold text-wp-orange">originals</h1> 
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">Your instant escape</p>
          <div className="cursor-pointer" onClick={goToWpOriginals}>
            <ButtonArrow />
          </div>
        </div>

        <div className="flex gap-3 mt-2">
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={200}
              className="rounded-md cursor-pointer"
            />
            <Tag name="psychologycal" />
          </div>
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={200}
              className="rounded-md cursor-pointer"
            />
            <Tag name="horror" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WpOriginals;
