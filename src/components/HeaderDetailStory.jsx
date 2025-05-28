import { useNavigate } from "react-router"
import { FaArrowLeft } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { IoShareSocial } from "react-icons/io5";


const HeaderDetailStory = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        return navigate(-1)
    }

    return (
        <>
        <div className="sticky top-0 bg-transparent w-full h-17 flex items-center gap-10 px-5 justify-between text-white">
            <FaArrowLeft size={25} className="cursor-pointer" onClick={goBack} />
            <div className="flex items-center gap-9">
               <IoShareSocial size={30} />
            <SlOptionsVertical size={20} /> 
            </div>
            
        </div>
        </>
    )
}

export default HeaderDetailStory;