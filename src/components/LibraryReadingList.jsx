import { SlOptionsVertical } from "react-icons/sl";

const LibraryReadingList = () => {
  return (
    <>
      <div className="h-screen py-3 mt-16 mb-30 mx-5">
        
        <div className="flex justify-between mt-2">
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={100}
            className="cursor-pointer"
          />
          <div className="flex flex-col px-14">
            <p className="font-semibold text-lg">Fantasy-Romance</p>
            <p className="mt-2 text-gray-500 text-sm font-semibold">3 Stories</p>
          </div>
          <SlOptionsVertical size={20} className="text-gray-600 mt-2" />
        </div>
        <hr className="my-5 w-full text-gray-200"/>

        <div className="flex justify-between mt-2">
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={100}
            className="cursor-pointer"
          />
          <div className="flex flex-col px-14">
            <p className="font-semibold text-lg">Reading List </p>
            <p className="mt-2 text-gray-500 text-sm font-semibold">3 Stories</p>
          </div>
          <SlOptionsVertical size={20} className="text-gray-600 mt-2" />
        </div>
        <hr className="my-5 w-full text-gray-200"/>

        <div className="flex justify-between mt-2">
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={100}
            className="cursor-pointer"
          />
          <div className="flex flex-col px-14">
            <p className="font-semibold text-lg">Reding List 3</p>
            <p className="mt-2 text-gray-500 text-sm font-semibold">3 Stories</p>
          </div>
          <SlOptionsVertical size={20} className="text-gray-600 mt-2" />
        </div>
        <hr className="my-5 w-full text-gray-200"/>

      </div>
    </>
  );
};

export default LibraryReadingList;
