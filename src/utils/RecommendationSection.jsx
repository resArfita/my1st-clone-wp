import Tag from "../utils/Tag";

const RecommendationSection = ({heading}) => {
  return (
    <>
    {/* idk how, but the tags have to be different in each section */}
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-xl font-bold">{heading}</p>
        <div className="flex gap-3 mt-2">
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
            />
            <Tag name="Psychology" />
          </div>

          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
            />
            <Tag name="Sci-fi" />
          </div>
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md cursor-pointer"
            />
            <Tag name="Romance" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationSection;
