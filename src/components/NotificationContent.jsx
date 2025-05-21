import { CgProfile } from "react-icons/cg";
import { GiOpenBook } from "react-icons/gi";
import { GiMegaphone } from "react-icons/gi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosUndo } from "react-icons/io";

const NotificationContent = () => {
  return (
    <>
      <div className="mx-5 h-screen py-3 mt-16 mb-30">
        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title....</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />

        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title...</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />

        {/* needs to be updated the align text have to be in the left */}
        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-10">
            <p>
              <b>Author</b> posted a new announcement
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiMegaphone />
              <p className="text-sm font-semibold">May 15, 2025 at 8:04 PM</p>
            </div>
            <p className="text-gray-500 font-semibold py-2">
              New announcement! <br /> Lorem ipsum...
            </p>
            <div className="flex items-center py-2 text-gray-400 gap-5">
              <IoIosUndo size={25} className="cursor-pointer" />
              <SlOptionsVertical size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <hr className="my-3 w-full text-gray-200" />

        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title..</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />

        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title..</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />

        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title..</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />

        <div className="flex justify-between">
          <CgProfile size={70} />
          <div className="flex flex-col px-2">
            <p>
              <b>Author</b> updated <b>Title - Chapter title..</b>
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <GiOpenBook />
              <p className="text-sm font-semibold">Yesterday at 8:04 PM</p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
            alt=""
            width={45}
          />
        </div>
        <hr className="my-3 w-full text-gray-200" />
      </div>
    </>
  );
};

export default NotificationContent;
