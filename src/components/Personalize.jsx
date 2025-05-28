import { useNavigate } from "react-router";

const personalizeBooks = [
    { id:1, latestUpdate: "2 new parts", lastRead: "part 16", imageUrl: "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740" },
    { id:2, latestUpdate: "3 new parts", lastRead: "part 2", imageUrl: "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740" },
    { id:3, latestUpdate: "continue", lastRead: "part 5", imageUrl: "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740" },
    { id:4, latestUpdate: "continue", lastRead: "part 20", imageUrl: "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740" },
];

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
            {personalizeBooks.map((item) => (
            
            <div key={item.id} className="bg-gray-100 rounded-md mt-2 pb-2">
              <img
                src={item.imageUrl}
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
