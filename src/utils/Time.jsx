import { GoClock } from "react-icons/go";

const Views = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <GoClock size={15} color="gray" />

        <p className="text-sm font-bold text-gray-400">24d 1h</p>
      </div>
    </>
  );
};

export default Views;
