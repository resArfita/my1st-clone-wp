import { IoEyeOutline } from "react-icons/io5";

const Views = ({total}) => {
  return (
    <>
      <div className="flex items-center gap-1 mt-2">
        <IoEyeOutline size={20} color="gray" />
        <p className="text-sm font-semibold text-gray-400">{total}</p>
      </div>
    </>
  );
};

export default Views;
