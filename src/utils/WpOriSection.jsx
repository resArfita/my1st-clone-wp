import Tag from "./Tag";
import { useNavigate } from "react-router";

const WpOriSection = ({ heading, wpBooksList }) => {
  const navigate = useNavigate();

  const goToDetailStoryWpOri = (id) => {
    navigate(`/detail_story_wp_original/${id}`);
  };

  if (!Array.isArray(wpBooksList)) {
    return <p className="text-red-500">Error: booksRec is not valid</p>;
  }

  return (
    <>
      <div className="mb-4">
        <p className="text-xl font-bold">#{heading}</p>
        <div className="flex gap-3">

          {wpBooksList.map((item) => (
            <div
            key={item.id}
            className="mt-2">
              <img
                src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
                alt=""
                width={120}
                className="rounded-md cursor-pointer"
                onClick={() => goToDetailStoryWpOri(item.id)}
              />
              {/* condition to safely get only the first tag */}
              {item.tags?.[0] && <Tag name={item.tags?.[0] || "untagged"} />}
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default WpOriSection;
