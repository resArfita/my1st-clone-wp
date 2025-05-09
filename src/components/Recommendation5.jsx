import Tag from "../utils/Tag";

const Recommendation5 = () => {
  return (
    <>
      <div className="flex flex-col mx-5 mb-6">
        <p className="text-md font-semibold text-gray-400">
          Binge to start to finish
        </p>
        <p className="text-xl font-bold">Completed stories</p>
        <div className="flex gap-3 mt-2">
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md"
            />
            <Tag name="teen" />
          </div>

          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md"
            />
            <Tag name="komedi" />
          </div>
          <div className="mt-2">
            <img
              src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
              alt=""
              width={130}
              className="rounded-md"
            />
            <Tag name="drama" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation5;
