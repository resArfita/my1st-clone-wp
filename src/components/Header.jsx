import { SiWattpad } from "react-icons/si";
import ButtonPremium from "../utils/buttonPremium";
import ButtonGift from "../utils/ButtonGift";
import Profile1 from "../utils/Profile1";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-5 mt-5">
        <SiWattpad size={38} color={"#fe5009"} />
        <div className="flex items-center gap-3 mb-2">
          <ButtonPremium />
          <ButtonGift />
          <Profile1 />
        </div>
      </div>
    </>
  );
};

export default Header;
