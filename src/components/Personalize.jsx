import { useNavigate } from "react-router";
import books from "../data/Books";


const Personalize = () => {
  const navigate = useNavigate();
  const goToRead = () => {
    navigate("/read");
  }
  return (
    <>
      <>
        <div className="flex flex-col mx-5 mb-6">
          <p className="text-xl font-bold">Your stories</p>
          <div className="flex gap-3">
            {books.map((item) => (
            
            <div key={item.id} className="bg-gray-100 rounded-md mt-2 pb-2">
              <img
                src={item.cover}
                alt=""
                width={90}
                className="rounded-md cursor-pointer"
                onClick={goToRead}
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
