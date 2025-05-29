import { AiFillThunderbolt } from "react-icons/ai";

const ButtonPremium = ({name}) => {
  return (
    <>
      <div className="flex items-center gap-1 bg-purple-50 rounded-full px-2 py-1.5">
        <AiFillThunderbolt color="navy" />
        <button className="font-bold text-md text-violet-800 cursor-pointer">
          {name}
        </button>
      </div>
    </>
  );
};

export default ButtonPremium;
