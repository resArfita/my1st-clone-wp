import { useNavigate } from "react-router";
import books from "../data/Books";
import { IoTerminal } from "react-icons/io5";


const Personalize = () => {
  const navigate = useNavigate();
  const goToRead = (id) => {
    navigate(`read/${id}`);
  }

  //limit to only show 3 items (need to be updated after there's slider)
  const getFourItems = books.slice(0, 4);

  return (
    <>
      <>
        <div className="flex flex-col mx-5 mb-6">
          <p className="text-xl font-bold">Your stories</p>
          <div className="flex gap-3">
            {getFourItems.map((item) => (
            
            <div key={item.id} className="bg-gray-100 rounded-md mt-2 pb-2">
              <img
                src={item.cover}
                alt=""
                width={90}
                className="rounded-md cursor-pointer"
                onClick={() => goToRead(item.id)}
              />
              <p className="text-sm text-gray-500 font-bold">{item.latestUpdate}</p>
              <p className="text-sm font-bold ">{item.lastRead}</p>
            </div>

          ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Personalize;
