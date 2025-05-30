import Views from "../utils/Views";
import Tag from "../utils/Tag";
import books from "../data/Books";
import { useNavigate } from "react-router";

const EditorChoice = () => {
  //initialize to get only 3 items from the books data (need to be updated later it there's slider)
  const editorChoice = books.slice(0, 3);

  const navigate = useNavigate();

  const goToDetailStory = (id) => {
    navigate(`/detail_story/${id}`)
  }

  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-md font-semibold text-gray-400">
          Cerita favorit dari Wattpad HQ
        </p>
        <p className="text-xl font-bold">Pilihan Editor</p>
        <div className="flex gap-3 mt-2">

          {editorChoice.map((item) => (

          <div
          key={item.id}
          className="mt-2">
            <img
              src={item.cover}
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
              onClick={() => goToDetailStory(item.id)}
            />
            <Tag name={item.tags[0]} />
            <Views total={item.views} />
          </div>
))}
        </div>
      </div>
    </>
  );
};

export default EditorChoice;
