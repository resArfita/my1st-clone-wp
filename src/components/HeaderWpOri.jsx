import { useNavigate } from "react-router"
import { FaArrowLeft } from "react-icons/fa6";

const HeaderWPOri = () => {
    const navigate = useNavigate();

    const goBack = () => {
        return navigate(-1)
    }

    return (
        <>
        <div className="sticky top-0 bg-white border-b border-gray-200 shadow-lg w-full h-17 flex items-center gap-10 px-5">
            <FaArrowLeft size={25} className="cursor-pointer" onClick={goBack} />
            <h1 className="text-2xl font-semibold">Wattpad Originals</h1>
        </div>
        </>
    )
}

export default HeaderWPOri;