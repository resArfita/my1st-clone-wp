import { FaCircle } from "react-icons/fa";

const Status = ({status}) => {
  return (
    <>
      <div className="flex items-center gap-1 mt-2">
        <FaCircle size={5} color="gray" />

        <p className="text-sm font-semibold text-gray-400">{status}</p>
      </div>
    </>
  );
};

export default Status;
